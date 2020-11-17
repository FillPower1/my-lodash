// #1 дедовский способ
const diff = (arr1, arr2) => {
    const arr = []

    for (let i = 0; i < arr1.length; i++) {
        for (let j = 0; j < arr2.length; j++) {
            if (arr2[j] !== arr1[i]) {
                arr.push(arr1[i])
                break
            } else {
                break
            }
        }
    }

    return arr
}

const diff2 = (arr1, arr2) => {
    const newArr = []

    for (const a of arr1) {
        for (const b of arr2) {
            if (b !== a) {
                newArr.push(a)
                break
            } else {
                break
            }
        }
    }

    return newArr
}

// #2
const difference = (arr1, arr2) => arr1.filter((e) => !arr2.includes(e))

console.log(diff2([2, 1], [2, 3]))
