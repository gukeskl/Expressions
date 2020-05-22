const assert = require('chai').assert
const addExpressions = require('../addExpresions')

describe('addExpressions', () => {

        it('Should return null, while nothing in inputs', () => {
            let result = addExpressions()
            assert.equal(result, null)
        })

        it('Should return null, while inputs are empty string' , () => {
            let result = addExpressions('', '')
            assert.equal(result, null)
        })

        it('Should return x, while first input = "x", second = ""', () => {
            let result = addExpressions('x', '')
            assert.equal(result, 'x')
        })

        it('Should return 2x1, when both inputs are "x"', () => {
            let result = addExpressions('x', 'x')
            assert.equal(result, '2x1')
        })

        it('Should return -2x1, when both inputs are "-x"', () => {
            let result = addExpressions('-x', '-x')
            assert.equal(result, '-2x1')
        })

        it('Should return 0, when when equations reduce mutually', () => {
            let result = addExpressions('-2x2-3', '+2x2+3')
            assert.equal(result, '0')
        })

        it('Should return 3x3 +3x2 +3, in case "2x2+3" + "3x3+ x2"', () => {
            let result = addExpressions('2x2+3', '3x3+ x2')
            assert.equal(result, '3x3 +3x2 +3')
        })

        it('Should return -1x5 +5x3 +1x2 +13x1 -6, in case "-x5+10x+3" + "+5x3+x2+3x-9"', () => {
            let result = addExpressions('-x5+10x+3', '+5x3+x2+3x-9')
            assert.equal(result, '-1x5 +5x3 +1x2 +13x1 -6')
        })
})
