const e = require('express');
const { sum, sub, mul, div } = require('./math');

test("sum add two numbers", () => {
    const result = sum(20, 30);
    const result2= sum(100, 200);
    const expected = 50;
    const expected2 = 300;
    expect(result).toBe(expected);
    expect(result2).toBe(expected2);
})
test("subtract two numbers", () => {
    const result = sub(20, 30);
    const expected = -10;
    expect(result).toBe(expected);
})
test("multiplicate two numbers", () => {
    const result = mul(10, 30);
    const expected = 300;
    expect(result).toBe(expected);
})
test("division of two numbers", () => {
    const result = div(30, 10);
    const expected = 3;
    expect(result).toBe(expected);
})