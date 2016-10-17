/* global it describe */

var expect = require('chai').expect
var assert = require('assert')
var Recursion = require('./app')

// Write a JavaScript program to calculate the factorial of a number.
// In mathematics, the factorial of a non-negative integer n, denoted by n!, is the product of all positive integers less than or equal to n. For example, 5! = 5 x 4 x 3 x 2 x 1 = 120

describe('calculate the factorial of a number', function () {
  it('should return 120', function () {
    var expected = 120
    var actual = Recursion.factorial(5)
    expect(expected).to.be.eql(actual)
  })

  it('should return 40320', function () {
    var expected = 40320
    var actual = Recursion.factorial(8)
    expect(expected).to.be.eql(actual)
  })
})

// Write a JavaScript program to find the greatest common divisor (gcd) of two positive numbers.

describe('find the greatest common divisor (gcd) of two positive numbers.', function () {
  it('should return 2', function () {
    var expected = 2
    var actual = Recursion.gcd(2, 4)
    expect(expected).to.be.eql(actual)
  })

  it('should return 100', function () {
    var expected = 100
    var actual = Recursion.gcd(100, 1000)
    expect(expected).to.be.eql(actual)
  })
})

// Write a JavaScript program to get the integers in range (x, y).

describe('a JavaScript program to get the integers in range (x, y).', function () {
  it('should return [1,2,3,4]', function () {
    var expected = [1, 2, 3, 4]
    var actual = Recursion.range(1, 4)
    expect(actual).to.be.eql(expected)
  })
})

// Write a JavaScript program to compute the sum of an array of integers.
describe('a JavaScript program to compute the sum of an array of integers.', function () {
  it('should return 10', function () {
    var expected = 10
    var actual = Recursion.sum([1, 2, 3, 4])
    expect(actual).to.be.eql(expected)
  })

  it('should return 21', function () {
    var expected = 21
    var actual = Recursion.sum([1, 2, 3, 4, 5, 6])
    expect(actual).to.be.eql(expected)
  })
})

// switching to ES6
// Write a recursive function called isPalindrome that returns true if a word is a palindrome
describe('isPalindrome', () => {
  it('should return true', () => {
    assert.equal(true, Recursion.isPalindrome('abba'))
  })

  it('should return false', () => {
    assert.equal(false, Recursion.isPalindrome('abbac'))
  })

  it('should return true', () => {
    assert.equal(true, Recursion.isPalindrome('tacocat'))
  })
})

// Write a recursive function called reverse that accepts a string and returns a reversed string.
describe('a recursive function called reverse that accepts a string and returns a reversed string.', () => {
  it('should return ba', () => {
    assert.equal('ba', Recursion.reverse('ab'))
  })

  it('should return cba', () => {
    assert.equal('cba', Recursion.reverse('abc'))
  })
})
