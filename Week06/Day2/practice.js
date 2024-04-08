// const numbers = [1,2,3,4,5]



// numbers.forEach((number, index, arr) => {arr[index] = number*2});

// console.log(numbers)

// function greaterThan3(arr) {
//     let newArray = [];
//     for (let index = 0; index < arr.length; index++) 
//         {
//             if (arr[index] > 3) 
//                 {newArray.push(arr[index])}
//         }        
//     return newArray

// };
//  const myArray = [0,1,1,2,3,5,8,13,21];

//  console.log(greaterThan3(myArray))

// const numbers = [2,5,10,100]
// function doACount(arr) {
// let count = 0

// for (const item of arr) {
//     count += item
    
// }
// return count
// }

// console.log(doACount(numbers));

const arr = [1,2,3,3,3,5,2,1,1,1,1,3,3,5]

function poll(array) {
    let tallest = 0
    for (const item in array) {
        if (item > tallest) {
        tallest = item  
          
        }
    }