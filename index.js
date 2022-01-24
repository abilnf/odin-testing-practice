function capitalize(string) {
  return string.toUpperCase();
}

function reverseString(string) {
  return string.split("").reverse().join("");
}

const calculator = {
  add: function (a, b) {
    return a + b;
  },
  sub: function (a, b) {
    return a - b;
  },
  mult: function (a, b) {
    return a * b;
  },
  div: function (a, b) {
    return a / b;
  },
};

function casesarCipher(string) {
  let out = "";
  for (let letter of string) {
    let code = letter.charCodeAt();
    if (code >= 65 && code <= 90) {
      code++;
      if (code > 90) code -= 26;
    }
    if (code >= 97 && code <= 122) {
      code++;
      if (code > 122) code -= 26;
    }
    out += String.fromCharCode(code);
  }
  return out;
}

function analyzeArray(array) {
  return {
    average: array.reduce((sum, a) => sum + a, 0) / array.length,
    min: array.reduce((min, a) => Math.min(min, a), Infinity),
    max: array.reduce((max, a) => Math.max(max, a), -Infinity),
    length: array.length,
  };
}

module.exports = {
  capitalize,
  reverseString,
  calculator,
  casesarCipher,
  analyzeArray,
};
