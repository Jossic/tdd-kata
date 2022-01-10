import { roman } from '../src/roman';

describe('Roman Test', () => {
	it('should return I when sending 1', () => {
		expect(roman(1)).toBe('I');
	});
	it('should return II when sending 2', () => {
		expect(roman(2)).toBe('II');
	});
	it('should return III when sending 3', () => {
		expect(roman(3)).toBe('III');
	});
	it('should return V when sending 5', () => {
		expect(roman(5)).toBe('V');
	});
	it('should return VII when sending 7', () => {
		expect(roman(7)).toBe('VII');
	});
	it('should return X when sending 10', () => {
		expect(roman(10)).toBe('X');
	});
	it('should return XXXVIII when sending 38', () => {
		expect(roman(38)).toBe('XXXVIII');
	});
	it('should return IV when sending 4', () => {
		expect(roman(4)).toBe('IV');
	});
	it('should return IX when sending 9', () => {
		expect(roman(9)).toBe('IX');
	});
	it('should return XLII when sending 42', () => {
		expect(roman(42)).toBe('XLII');
	});
	it('should return L when sending 50', () => {
		expect(roman(50)).toBe('L');
	});
	it('should return XC when sending 90', () => {
		expect(roman(90)).toBe('XC');
	});
	it('should return CI when sending 101', () => {
		expect(roman(101)).toBe('CI');
	});
	it('should return CDIV when sending 404', () => {
		expect(roman(404)).toBe('CDIV');
	});
	it('should return DCCXXI when sending 721', () => {
		expect(roman(721)).toBe('DCCXXI');
	});
	it('should return MMCMLVII when sending 2957', () => {
		expect(roman(2957)).toBe('MMCMLVII');
	});
});
