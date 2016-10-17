var Recursion = {
  factorial: function (n) {
    // 5! = 5 x 4 x 3 x 2 x 1 = 120
    // 2! = 2 x 1 = 2
    // return n * (n-1)
    if (n === 0) return 1
    return n * Recursion.factorial(n - 1)
  },

  gcd: function (x, y) {
    if (y) return Recursion.gcd(y, x % y)
    return Math.abs(x)
  },

  range: function(x,y) {
    if (x <= y) {
      rangeArray.push(x)
      return Recursion.range(x + 1, y)
    }
    return rangeArray
  },

  sum: function(array) {
    var sum = 0
    array.forEach(function(element) {
      sum += element
    })
    return sum
  },

  // switching to ES6
  isPalindrome: (input) => {
    if (input.length < 2) return true
    else {
      var firstChar = input.charAt(0)
      var lastChar = input.charAt(input.length - 1)

      if (firstChar !== lastChar) {
        return false
      } else {
        var middle = input.substr(1, input.length - 2)
        return Recursion.isPalindrome(middle)
      }
    }
  },

  reverse: function (input) {
    if (input.length === 2) {
      lastChars = input[input.length - 1]
      return lastChars.concat(input[input.length - 2])
    }
    else if (input.length > 2) {
      lastChars = input.concat(input[input.length - 2])
      remainingChars = input.substr(0, input.length - 1)
      console.log(lastChars);
      // console.log(remainingChars);
      return Recursion.reverse(remainingChars)
    }
  }
}

// console.log(Recursion.reverse('ab'));
console.log(Recursion.reverse('abcde'));

var rangeArray = []
module.exports = Recursion
