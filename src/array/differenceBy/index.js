const differenceBy = (arr1, arr2, func) => {
    return arr1.filter((a) => {
        const floorArray = arr2.map(func)
        return !floorArray.includes(func(a))
    })
}

// console.log(differenceBy([2.1, 1.2], [2.3, 3.4], Math.floor))

const differenceByX = (arr1, arr2, key) => {
    return arr1.filter((a) => {
        const arr = arr2.map((b) => b[key])

        return !arr.includes(a[key])
    })
}

console.log(differenceByX([{ x: 2 }, { x: 1 }], [{ x: 1 }], 'x'))
