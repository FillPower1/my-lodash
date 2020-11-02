export const chunk = (arr, count = 1) => {
    const newArr = []

    if (count <= 0) return newArr

    while (arr.length > 0) {
        newArr.push(arr.splice(0, count))
    }

    return newArr
}
