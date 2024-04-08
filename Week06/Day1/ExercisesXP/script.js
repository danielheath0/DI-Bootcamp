// Exercise 1

// / #1
// function funcOne() {
//     let a = 5;
//     if(a > 1) {
//         a = 3;
//     }
//     alert(`inside the funcOne function ${a}`);
// }

// #1.1 - run in the console:
        // funcOne() - a is 3 because the original a is greater than 1.

// #1.2 What will happen if the variable is declared 
// with const instead of let ?
        // error - can't reassign the value of a constant.

// //#2
// let a = 0;
// function funcTwo() {
//     a = 5;
// }

// function funcThree() {
//     alert(`inside the funcThree function ${a}`);
// }

// // #2.1 - run in the console:
// funcThree()
// funcTwo()
// funcThree()

        // result is a = 5 because the running of funcTwo changes the value of a in the global scope. 
// #2.2 What will happen if the variable is declared 
// with const instead of let ?
        // error when funcTwo runs becasue you can't reassign the value of a constant.


// //#3
// function funcFour() {
//     window.a = "hello";
// }


// function funcFive() {
//     alert(`inside the funcFive function ${a}`);
// }

// // #3.1 - run in the console:
// funcFour()
// funcFive()

        //Value of a is "hello"

// //#4
// let a = 1;
// function funcSix() {
//     let a = "test";
//     alert(`inside the funcSix function ${a}`);
// }


// // #4.1 - run in the console:
// funcSix()

        // a = "test" as a inside the scope of the function that is the value of a

// #4.2 What will happen if the variable is declared 
// with const instead of let ? 
        
        //Which variable? Basically it doesn't matter, as the scope of each a is different, and its value is never reassigned.

//#5
// let a = 2;
// if (true) {
//     let a = 5;
//     alert(`in the if block ${a}`);
// }
// alert(`outside of the if block ${a}`);

// #5.1 - run the code in the console
        
    // a is 5 and then 2


// #5.2 What will happen if the variable is declared 
// with const instead of let ?

        //Same thing : the two scopes are different.

// Exercise 2

// function winBattle(){
//     return true;
// }

// // is the same as:

// const winBattle = () => true;

// let experiencePoints = winBattle() ? 10 : 1

// console.log(experiencePoints)

// Exercise 3

// const amIString = (arg) => {
//     return typeof arg === "string"
    
// }

// console.log(amIString('Iron Maiden'))
// console.log(amIString(12))
// console.log(amIString([1,2,3]))

// // #Exercise 4

// const findSum = (a,b) => a + b

// console.log(findSum(4,13))

// //Exercise 5

// function weightConverter (weight) {
//     return weight * 1000
// }

// console.log(weightConverter(3))

// const weightConverter2 = function (weight) {
//     return weight * 1000
// }

// console.log(weightConverter2(2))

// //Difference is that declaration creates the function and then assigns it to a constant. Expression does both things in one go.

// const weightConverter3 = weight => weight * 1000

// console.log(weightConverter3(10))

//Exercise 6

//I don't know DOM yet - I'll come back to this in a few weeks.

//Exercise 7

