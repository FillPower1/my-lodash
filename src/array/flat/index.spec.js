import { flat } from '.'

describe('flat', () => {
    const arr = [5, [1, 2, 3], [4, 5, 6, [1, 2, 3]], [7, 8, 9]]

    it('should return correct flatted array', () => {
        expect(flat(arr)).toEqual([5, 1, 2, 3, 4, 5, 6, 1, 2, 3, 7, 8, 9])
    })
})
