var {
    sum
} = require('./sum')
// console.log(sum.sum())

// test("Adds 1 + 2 to equals 3", function(){
//     expect(sum(1,2)).toBe(3)
// })


describe("The Sum function", function () {



    test("negative nums give correct output", function () {
        expect(sum(-1, -2)).toBe(-3)
        expect(sum(-50, -2)).toBe(-52)
        expect(sum(-100, -10)).toBe(-110)

    })


    test("If not arguments, sends error string", function () {
        expect(sum()).toBe("Please provide 2 numbers")
    })


    interface("returns an error if non-numerical values are given", function(){
        expect(sum(true, "hello")).toBe("Please provide 2 numerical values")
        expect(sum([], {})).toBe("Please provide 2 numerical values")
        expect(sum(null, undefined)).toBe("Please provide 2 numerical values")
    })
    //check for too large of numbers, boolean, string, 2 arrays

})