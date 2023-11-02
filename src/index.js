module.exports = function(val) {
  if (typeof val === 'number') {
    return fizzBuzz(val)
  }
  if (Array.isArray(val)) {
    return val.map((item) => {
      return fizzBuzz(item)
    })
  }
}

function fizzBuzz(n) {
  if (n % 3 === 0 && n % 5 === 0) return 'FizzBuzz'
  if (n % 3 === 0) return 'Fizz'
  if (n % 5 === 0) return 'Buzz'
  return n
}
