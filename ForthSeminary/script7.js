function deepClone(value, seen = new WeakMap()) {
  if (value === null || typeof value !== 'object') return value;
  if (seen.has(value)) return seen.get(value);
  if (value instanceof Date) {
    return new Date(value.getTime());
  }
  if (value instanceof RegExp) {
    const flags = value.flags || (value.global ? 'g' : '') + (value.ignoreCase ? 'i' : '') + (value.multiline ? 'm' : '');
    return new RegExp(value.source, flags);
  }
  if (value instanceof Map) {
    const copy = new Map();
    seen.set(value, copy);
    for (const [k, v] of value.entries()) {
      copy.set(deepClone(k, seen), deepClone(v, seen));
    }
    return copy;
  }
  if (value instanceof Set) {
    const copy = new Set();
    seen.set(value, copy);
    for (const v of value.values()) {
      copy.add(deepClone(v, seen));
    }
    return copy;
  }
  if (value instanceof ArrayBuffer) {
    return value.slice(0);
  }
  if (ArrayBuffer.isView(value)) {
    if (value instanceof DataView) {
      const bufferCopy = value.buffer.slice(0);
      return new DataView(bufferCopy, value.byteOffset, value.byteLength);
    } else {
      const bufferCopy = value.buffer.slice(0);
      return new value.constructor(bufferCopy, value.byteOffset, value.length);
    }
  }
  if (typeof value === 'function') {
    return value;
  }
  const proto = Object.getPrototypeOf(value);
  const copy = Array.isArray(value) ? [] : Object.create(proto);
  seen.set(value, copy);
  const descriptors = Object.getOwnPropertyDescriptors(value);
  for (const [key, descriptor] of Object.entries(descriptors)) {
    if ('value' in descriptor) {
      descriptor.value = deepClone(descriptor.value, seen);
    }
    Object.defineProperty(copy, key, descriptor);
  }
  const symbolKeys = Object.getOwnPropertySymbols(value);
  for (const sym of symbolKeys) {
    const desc = Object.getOwnPropertyDescriptor(value, sym);
    if ('value' in desc) {
      desc.value = deepClone(desc.value, seen);
    }
    Object.defineProperty(copy, sym, desc);
  }
  return copy;
}
