const should = require('chai').should();

const fizzBuzzer = require('../fizzBuzzer');

function outputArray(input, length) {
    var array = [];

    for (var i = 0; i < length; i++) {
        array.push(input);
    }
    return array;
}

it('It should return fizzbuzz and be divisble by 15', function () {
    describe('fizzBuzzer', function () {
        var argumentArray = [15, 30, 45, 60, 75, 90];
        var answerArray = outputArray('fizz-buzz', argumentArray.length);

        argumentArray.forEach(function (item, index) {
            var answer = fizzBuzzer(item);
            answer.should.equal(answerArray[index]);
        })
    })
})

it('should return buzz and be divisble by 5', function () {
    describe('fizzBuzzer', function () {
        var argumentArray = [5, 10, 20, 25, 35, 40];
        var answerArray = outputArray('buzz', argumentArray.length);

        argumentArray.forEach(function (item, index) {
            var answer = fizzBuzzer(item);
            answer.should.equal(answerArray[index]);
        })
    })
})

it('return fizz and be divisble by 3', function () {
    describe('fizzBuzzer', function () {
        var argumentArray = [3, 6, 9, 12, 18, 21];
        var answerArray = outputArray('fizz', argumentArray.length);

        argumentArray.forEach(function (item, index) {
            var answer = fizzBuzzer(item);
            answer.should.equal(answerArray[index]);
        })
    })
})

it('should return a number', function () {
    describe('fizzBuzzer', function () {
        var argArray = [1, 2, 8, 7, 22];

        argArray.forEach(function (item, index) {
            var answer = fizzBuzzer(item);
            answer.should.equal(argArray[index]);
        })
    })
})

it('should return an error', function () {
    describe('fizBuzzer', function () {
        var argumentArray = ['hello', 'world', '', true];

        argumentArray.forEach(function (item) {

            // ***************
            //could we talk about this one

            // (function () {
            //     fizzBuzzer(item);
            // }).should.throw(Error);

            // (fizzBuzzer(item)).should.throw(Error);
            var answer = fizzBuzzer(item);
            answer.should.throw(Error);
        })
    })
})
