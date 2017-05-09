const should = require('chai').should();

const fizzBuzzer = require('../fizzBuzzer');


describe('fizzBuzzer', function() {

	it('should return fizz when number are dividable by 3', function() {
		const normalCases = [
		{num: 3, expected: 'fizz'},
		{num: 9, expected: 'fizz'},
		{num: 69, expected: 'fizz'}
		];

		normalCases.forEach(function(input) {
			const answer = fizzBuzzer(input.num);
			answer.should.equal(input.expected);
		});
	});

	it('should return buzz when number are dividable by 5', function() {
		const normalCases = [
		{num: 5, expected: 'buzz'},
		{num: 20, expected: 'buzz'},
		{num: 100, expected: 'buzz'}
		];

		normalCases.forEach(function(input) {
			const answer = fizzBuzzer(input.num);
			answer.should.equal(input.expected);
		});
	});

	it('should return fizz-buzz when number are dividable by 3 and 5', function() {
		const normalCases = [
		{num: 15, expected: 'fizz-buzz'},
		{num: 60, expected: 'fizz-buzz'},
		{num: 150, expected: 'fizz-buzz'}
		];

		normalCases.forEach(function(input) {
			const answer = fizzBuzzer(input.num);
			answer.should.equal(input.expected);
		});
	});

	it('should raise error if args not numbers', function() {
		const badInputs = [
		'a',
		'1',
		false
		];
		badInputs.forEach(function(input) {
			(function() {
				fizzBuzzer(input)
			}).should.throw(Error);
		});
	});
});