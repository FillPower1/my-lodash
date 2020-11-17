export function flat(arr) {
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

console.log(
    flat([
        1,
        'any [complex] string',
        null,
        function () {},
        [1, 2, [3, '4'], 0],
        [],
        { a: 1 },
    ])
)
// console.log(flattenDeep(arrays))
