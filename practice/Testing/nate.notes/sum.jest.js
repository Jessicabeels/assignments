var sum = require('./sum')
//require the function from our other file so that we can use it, using relative path './sum', ./ denotes that the file is on the same level of directory

test('adds 1 + 2 to equal 3', function() {
    expect(sum(1, 2)).toBe(3)
})
//test function
//arg1: a string explaining what the test is testing
//arg2: an anonymous function that will trigger the test evaluations

