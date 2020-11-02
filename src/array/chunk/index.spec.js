import { chunk } from '.'

describe('chunk', () => {
    let arr
    let arr2

    beforeEach(() => {
        arr = [1, 2, 3, 4, 5]
        arr2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]
    })

    it('should return empty array', () => {
        expect(chunk(arr, 0)).toEqual([])
        expect(chunk(arr, -1)).toEqual([])
    })

    it('should return correct chunked array', () => {
        expect(chunk(arr, 3)).toEqual([
            [1, 2, 3],
            [4, 5],
        ])
        expect(chunk(arr2, 4)).toEqual([
            [1, 2, 3, 4],
            [5, 6, 7, 8],
            [9, 10, 11],
        ])
    })
})
