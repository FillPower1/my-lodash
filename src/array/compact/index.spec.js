import { compact } from '.'

describe('compact', () => {
    it('should return not falsey values', () => {
        const arr = [0, 1, false, 2, '', 3, null]

        expect(compact(arr)).toEqual([1, 2, 3])
    })
})
