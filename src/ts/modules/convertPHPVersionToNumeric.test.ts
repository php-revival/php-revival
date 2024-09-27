import convertPHPVersionToNumeric from './convertPHPVersionToNumeric'
import { describe, expect, it } from '@jest/globals'

describe('convertPHPVersionToNumeric', () => {
    const dataset = [
        ['PHP < 8.0', '7.4.0'],
        ['PHP < 8.1', '8.0.0'],
        ['PHP < 8.2', '8.1.0'],
        ['PHP < 8.3', '8.2.0'],
        ['PHP < 8.4', '8.3.0'],
        ['PHP < 9.0', '8.4.0'],
        ['PHP < 9.1', '9.0.0'],
        ['PHP < 9.2', '9.1.0'],
        ['PHP < 9.3', '9.2.0'],
        ['PHP < 9.4', '9.3.0'],
        ['PHP 7.3', '7.3.0'],
        ['PHP 7.4', '7.4.0'],
        ['PHP 8.0', '8.0.0'],
        ['PHP 8.1', '8.1.0'],
        ['PHP 8.2', '8.2.0'],
        ['PHP 8.3', '8.3.0'],
        ['PHP 8.4', '8.4.0'],
        ['PHP 9.0', '9.0.0'],
        ['PHP 9.1', '9.1.0'],
        ['PHP 9.2', '9.2.0'],
        ['PHP 9.3', '9.3.0'],
        ['PHP 9.4', '9.4.0'],
    ]

    it.each(dataset)('converts %s to %s', (version: string, expected: string) => {
        const result = convertPHPVersionToNumeric(version)
        expect(result).toBe(expected)
    })
})
