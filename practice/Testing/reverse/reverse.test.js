var reverse = require('./reverse')


describe ("The reverse function", function(){


test("returns the given array reversed", function(){
    expect(reverse([1, 2, 3])).toEqual([3, 2, 1])
})


//we swapped .toBe to .toEqual for deep equality
// expect(), toBe(), and toEqual() are matchers in Jest

})

//it and test are interchangeable