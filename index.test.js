const {
  capitalize,
  reverseString,
  calculator,
  casesarCipher,
  analyzeArray,
} = require("./index");

test("capitalizes string", () => {
  expect(capitalize("heLLo WoRld!!.??")).toBe("HELLO WORLD!!.??");
});

test("reverses string", () => {
  expect(reverseString("what a cool day!.. ")).toBe(" ..!yad looc a tahw");
});

test("calculator add", () => {
  expect(calculator.add(5, 7)).toBe(12);
});

test("calculator sub", () => {
  expect(calculator.sub(50, 52)).toBe(-2);
});

test("calculator mult", () => {
  expect(calculator.mult(6, 7)).toBe(42);
});

test("calculator div", () => {
  expect(calculator.div(56, 7)).toBe(8);
});

test("casesarCipher shifting", () => {
  expect(casesarCipher("abc")).toBe("bcd");
});

test("casesarCipher keeping case", () => {
  expect(casesarCipher("abcDeF")).toBe("bcdEfG");
});

test("casesarCipher punctuation", () => {
  expect(casesarCipher("abc def .! gh")).toBe("bcd efg .! hi");
});

test("casesarCipher wrapping", () => {
  expect(casesarCipher("xyzXYZ")).toBe("yzaYZA");
});

test("analyze array", () => {
  expect(analyzeArray([1, 8, 3, 4, 2, 6])).toEqual({
    average: 4,
    min: 1,
    max: 8,
    length: 6,
  });
});
