const { data } = require('../mock-data')

const { arrays } = data

function flat(arr) {
    let result = []

    for (const elem of arr) {
        if (Array.isArray(elem)) {
            result = [...result, ...flat(elem)]
        } else {
            result.push(elem)
        }
    }

    return result
}

function flattenDeep(arr) {
    if (Array.isArray(arr)) {
        return arr.reduce((acc, value) => [...acc, ...flattenDeep(value)], [])
    } else {
        return [arr]
    }
}

// console.log(flat(arrays))
// console.log(flattenDeep(arrays))
