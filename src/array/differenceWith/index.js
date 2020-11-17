import _ from 'lodash'

const differenceWith = (arr, eq, func) => {
    return arr.filter((a) => {
        for (const b of eq) {
            if (!func(a, b)) {
                return a
            }
        }
    })
}

const objects = [
    { x: 1, y: 2 },
    { x: 2, y: 1 },
]

console.log(differenceWith(objects, [{ x: 1, y: 2 }], _.isEqual))
// => [{ 'x': 2, 'y': 1 }]
