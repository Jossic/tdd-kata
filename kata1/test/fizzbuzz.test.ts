import { fizzBuzz } from '../src/fizzBuzz';

describe('Fizzbuzz tests', () => {
	it('should return a 1 when sending 1', () => {
		expect(fizzBuzz(1)).toBe('1');
	});

	it('should return a Fizz when sending 3', () => {
		expect(fizzBuzz(3)).toBe('Fizz');
	});

	it('should return a Buzz when sending 5', () => {
		expect(fizzBuzz(5)).toBe('Buzz');
	});

	it('should return a FizzBuzz when sending 15', () => {
		expect(fizzBuzz(15)).toBe('FizzBuzz');
	});
});
