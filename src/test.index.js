/**
 * FizzBuzz
 *
 * Para os números de 1 a 100,
 *
 * se o número for divisível por 3 imprima Fizz;
 * se o número for divisível por 5, imprima Buzz;
 * se o número for divisível por 3 e 5 (ex.: 15) imprima o FizzBuzz;
 * caso contrário, imprima o número.
 */

const assert = require('assert')

const fizzbuzz = require('./index')

describe('FizzBuzz', () => {
  it('retorna n para um número não divisível por 3 nem 5', () => {
    const resultadoAtual = fizzbuzz(2)
    const resultadoEsperado = 2

    assert.equal(resultadoAtual, resultadoEsperado)
  })

  it('retorna 4 para um número número 4', () => {
    const resultadoAtual = fizzbuzz(4)
    const resultadoEsperado = 4

    assert.equal(resultadoAtual, resultadoEsperado)
  })

  it('retorna Fizz para um número divisível por 3', () => {
    const resultadoAtual = fizzbuzz(3)
    const resultadoEsperado = 'Fizz'

    assert.equal(resultadoAtual, resultadoEsperado)
  })

  it('retorna Buzz para um número divisível por 5', () => {
    const resultadoAtual = fizzbuzz(5)
    const resultadoEsperado = 'Buzz'

    assert.equal(resultadoAtual, resultadoEsperado)
  })

  it('retorna FizzBuzz para um número divisível por 3 e 5', () => {
    const resultadoAtual = fizzbuzz(15)
    const resultadoEsperado = 'FizzBuzz'

    assert.equal(resultadoAtual, resultadoEsperado)
  })

  it('retorna um array com n, Fizz, Buzz, ou FizzBuzz para um array de números', () => {
    const resultadoAtual = fizzbuzz([1, 2, 3, 4, 5, 15, 30, 60, 99])
    const resultadoEsperado = [1, 2, 'Fizz', 4, 'Buzz', 'FizzBuzz', 'FizzBuzz', 'FizzBuzz', 'Fizz']

    assert.equal(resultadoAtual.toString(), resultadoEsperado.toString())
  })

  it('retorna um array com n, Fizz, Buzz, ou FizzBuzz para um array de números', () => {
    const resultadoAtual = fizzbuzz([1, 2, 3, 4, 6, 15, 30, 60, 99])
    const resultadoEsperado = [1, 2, 'Fizz', 4, 'Fizz', 'FizzBuzz', 'FizzBuzz', 'FizzBuzz', 'Fizz']

    assert.equal(resultadoAtual.toString(), resultadoEsperado.toString())
  })
})
