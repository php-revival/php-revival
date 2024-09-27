import { describe, expect, it } from '@jest/globals'
import arrShuffle from './arrShuffle'

describe('arrShuffle', () => {
    it('returns an array with the same length', () => {
        const arr = [1, 2, 3, 4, 5]
        const result = arrShuffle(arr)
        expect(result.length).toEqual(arr.length)
    })

    it('returns an array with the same elements', () => {
        const arr = [1, 2, 3, 4, 5]
        const result = arrShuffle(arr)
        const sortedOriginal = [...arr].sort()
        const sortedResult = [...result].sort()
        expect(sortedResult).toEqual(sortedOriginal)
    })

    it('does not always return the same array', () => {
        const arr = [
            1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
            21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38,
            39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52,
        ]

        const result1 = arrShuffle(arr)
        const result2 = arrShuffle(arr)

        expect(result1).not.toEqual(result2)
    })

    it('returns an empty array when given an empty array', () => {
        expect(arrShuffle([])).toEqual([])
    })

    it('returns the same array when given an array of one element', () => {
        expect(arrShuffle([1])).toEqual([1])
    })

    it('can handle arrays of different types', () => {
        const arr = ['a', 'b', 'c']
        const result = arrShuffle(arr)
        expect(result.sort()).toEqual(arr.sort())
    })

    it('does not modify the original array', () => {
        const arr = [1, 2, 3, 4, 5]
        const copy = [...arr]
        arrShuffle(arr)
        expect(arr).toEqual(copy)
    })
})
