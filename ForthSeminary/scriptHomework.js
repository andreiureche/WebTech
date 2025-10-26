class InvalidType extends Error {
    constructor(message = 'InvalidType') {
        super(message);
        this.name = 'InvalidType';
    }
}

class InvalidInput extends Error {
    constructor(message = 'InvalidInput') {
        super(message);
        this.name = 'InvalidInput';
    }
}

const isStringPrimitiveOrObject = (v) =>
    typeof v === 'string' || v instanceof String;

const normalizeInput = (input) => {
    if (!isStringPrimitiveOrObject(input)) 
        throw new InvalidType();
    let s = input.toString();
    s = s.replace(/^\uFEFF/, '').replace(/[\r\n]+$/g, '');
    return s;
}

const compressRLE = (s) => {
    if (/[0-9]/.test(s)) {
        throw new InvalidInput();
    }
    if (s.length === 0) 
        return '';
    let out = '';
    let curr = s[0];
    let count = 1;
    for (let i = 1; i < s.length; i++) {
        if (s[i] === curr) {
            count++;
        } else {
            out += String(count) + curr;
            curr = s[i];
            count = 1;
        }
    }
    out += String(count) + curr;
    return out;
}

const decompressRLE = (sRaw) => {
    const s = normalizeInput(sRaw);
    if (s.length === 0) 
        return '';
    if (!/\d/.test(s)) {
        if (/[^A-Za-z]/.test(s)) 
            throw new InvalidInput();
        return s;
    }
    const re = /(\d+)([A-Za-z])/g;
    let match;
    let result = '';
    let covered = 0;
    while ((match = re.exec(s)) !== null) {
        if (match.index !== covered) {
            throw new InvalidInput();
        }
        const count = parseInt(match[1], 10);
        const ch = match[2];
        if (!Number.isFinite(count) || count < 0) 
            throw new InvalidInput();
        result += ch.repeat(count);
        covered = re.lastIndex;
        }
    if (covered !== s.length) 
        throw new InvalidInput();
    return result;
}

const caesarShiftChar = (ch, shift) => {
    const A = 'A'.charCodeAt(0);
    const a = 'a'.charCodeAt(0);
    const code = ch.charCodeAt(0);
    if (code >= A && code <= A + 25) {
        const pos = code - A;
        const newPos = ((pos + shift) % 26 + 26) % 26;
        return String.fromCharCode(A + newPos);
    } 
    else if (code >= a && code <= a + 25) {
        const pos = code - a;
        const newPos = ((pos + shift) % 26 + 26) % 26;
        return String.fromCharCode(a + newPos);
    } 
    else {
        return ch;
    }
}

const encryptCaesar = (s, shift) => {
    return Array.from(s)
                .map((ch) => {
                    if (ch === ' ') 
                        return ' ';
                    if (!/^[A-Za-z ]$/.test(ch)) {
                        throw new InvalidInput();
                    }
                    return caesarShiftChar(ch, shift);
                })
                .join('');
}

const decryptCaesar = (s, shift) => {
    return encryptCaesar(s, -shift);
}

const textProcessor = (algo, operation, input, options) => {
    if (typeof operation !== 'boolean') 
        throw new InvalidType();
    if (!isStringPrimitiveOrObject(algo)) 
        throw new InvalidType();
    const algoNorm = algo.toString().trim().toLowerCase();
    const str = normalizeInput(input);
    if (algoNorm === 'rle' || algoNorm === 'run-length' || algoNorm === 'runlength') {
        if (operation === true) {
            return compressRLE(str);
        } 
        else {
            return decompressRLE(str);
        }
    } 
    else if (algoNorm === 'caesar' || algoNorm === 'caesar cipher' || algoNorm === 'caesarcipher') {
        if (!options || typeof options !== 'object') 
            throw new InvalidInput();
        if (!Object.prototype.hasOwnProperty.call(options, 'shift')) 
            throw new InvalidInput();
        const shiftRaw = options.shift;
        if (typeof shiftRaw !== 'number' || !Number.isFinite(shiftRaw)) 
            throw new InvalidInput();
        const shift = Math.trunc(shiftRaw);
        if (!/^[A-Za-z ]*$/.test(str)) 
            throw new InvalidInput();
        if (operation === true) {
            return encryptCaesar(str, shift);
        } 
        else {
            return decryptCaesar(str, shift);
        }
    } 
    else {
        throw new InvalidType();
    }
}

module.exports = {
    textProcessor,
    InvalidType,
    InvalidInput,
}