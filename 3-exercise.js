//Write a function createCounter. It should accept an initial integer init. It should return an object with three functions.

//The three functions are:

//increment() increases the current value by 1 and then returns it.
//() reduces the current value by 1 and then returns it.


let createCounter = function(init) {
    let initial = init 
    return{
        increment(){
            initial += 1
            return initial
        },
        decrement(){
            initial -= 1
            return initial
        },
        reset(){
            initial = init
            return init
        }
    }
};
                                                                                                                            
                                                                                                                            

console.log(createCounter(5))
