module.exports = (expA, expB) => {
    return addExpressions(expA, expB)
}
const VARIABLE = 'x'

function addExpressions(expressionsA, expressionsB) {
    if (!expressionsA && !expressionsB) return null
    if (!expressionsA) return expressionsB
    if (!expressionsB) return expressionsA

    let answer = ''

    let exA = equationToMap(expressionsA)
    let exB = equationToMap(expressionsB)

    for (let [power, value] of exA) {
        if (exB.has(power)) {
            exA.set(power, value + exB.get(power))
            exB.delete(power)
        }
    }

    exA = new Map(
        [...exA, ...exB]
            .filter(pair => pair[1] !== 0)
            .sort((firstPair, secondPair) => {
                return secondPair[0] - firstPair[0]
            })
    )
    answer = createAnswer(exA)
    if (answer === '') return '0'
    return answer
}

function equationToMap(ex) {
    const map = new Map()

    ex.replace(/[-]+/g, '+-')
        .replace(/${VARIABLE}[+]-+/g, `${VARIABLE}-`)
        .split('+')
        .filter(el => el !== '')
        .map(el =>
            el.trim()
                .split(`${VARIABLE}`)
                .map(element => element === '' ? '1' : element)
                .map(element => element === '-' ? '-1' : element))
        .forEach(array => {
            map.set(array[1] === undefined ? 0 : parseInt(array[1]), parseInt(array[0]))
        }
        )
    return map
}

function createAnswer(answerMap) {
    let ans = ''
    const unpacked = [...answerMap]
    unpacked.forEach(([power, value], index) => {
        if (index !== 0)
            ans += ' +'
        ans += value
        if (power !== 0)
            ans += VARIABLE + power
    })
    ans = ans.replace(/[+]-+/g, '-')
    return ans
}
