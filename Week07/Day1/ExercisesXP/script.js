// // Exercise 1

// const compareToTen = (num) => {
//     return new Promise((resolve, reject) => {
//         if (num<=10) {
//             resolve(`Not more than 10 - well done!`)
//         } else {
//             reject(`More than 10 - mission failed.`)
//         }
    
//     })
// }

// compareToTen(8).then(result=>console.log(result)).catch(error=>console.log(error))

// //Exercise 2

// const fourSeconds = () => new Promise(resolve=>{
//         setTimeout(()=> 
//             resolve("Success")
//         ,4000)
//     })


// fourSeconds().then(result=>console.log(result))

// //Exercise 3

// const promise3 = Promise.resolve(3);
// promise3.then(result=>console.log(result))

// const promiseBoo = Promise.reject('Boo!')
// promiseBoo.catch(error=>console.log(error))