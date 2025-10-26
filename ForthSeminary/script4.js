String.prototype.capitalizeWords = function() {
    return this.replace(/\b[a-z]/g, match => match.toUpperCase());
}
console.log("these words will be capitalized!".capitalizeWords());

Number.prototype.times = function(callback) {
  for (let i = 0; i < this; i++) {
    callback(i);
  }
};
(3).times(i=>console.log("Apelul ${i+1}"));