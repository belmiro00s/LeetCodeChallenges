// Write a function expect that helps test the code

// The function should to return an object with the following two functions.

//toBe(val) accepts another value and returns true if the two values === each other. If they are not equal, it should throw an error "Not Equal".
//notToBe(val) accepts another value and returns true if the two values !== each other. If they are equal, it should throw an error "Equal".

var expect = function (val) {
    const realVal = val

    return {
        toBe: function (newVal) {
            if (realVal !== newVal) {
                throw new Error("Not equal")
            } else {
                return true
            }
        },
        notToBe: function (newVal) {
            if (realVal === newVal) {
                throw new Error("Equal")
            } else {
                return true
            }
        }
    }
}