// // Exercise 1: List of people

// const people = ["Greg", "Mary", "Devon", "James"];

// // Part I - Review About Arrays
// // Write code to remove “Greg” from the people array.

// people.splice(0,1)

// // Write code to replace “James” to “Jason”.

// people.pop()
// people.push('Jason')

// // Write code to add your name to the end of the people array.

// people.push('Daniel')

// // Write code that console.logs Mary’s index. take a look at the indexOf method on Google.

// console.log(people.indexOf('Mary'))

// // Write code to make a copy of the people array using the slice method.
// // The copy should NOT include “Mary” or your name.
// // Hint: remember that now the people array should look like this const people = ["Mary", "Devon", "Jason", "Yourname"];
// // Hint: Check out the documentation for the slice method

// const newList = people.slice(1,3)
// console.log(newList);

// // Write code that gives the index of “Foo”. Why does it return -1 ?

// console.log(people.indexOf('Foo'))
// //-1 is the index when the item can't be found

// // Create a variable called last which value is the last element of the array.
// // Hint: What is the relationship between the index of the last element in the array and the length of the array?

// const last = people[people.length-1]

// console.log(last);

// // Part II - Loops
// // Using a loop, iterate through the people array and console.log each person.

// for (const iterator of people) {
//     console.log(iterator)
// }

// // Using a loop, iterate through the people array and exit the loop after you console.log “Devon” .
// // Hint: take a look at the break statement in the lesson.

// for (let i = 0; i < people.length; i++) {
//     if (people[i]==='Devon') {
//         console.log(people[i])
//         break;
//       }
//     console.log(people[i])
//   }

// //Exercise 2: Your Favourite Colours

// const colors = ['turquoise','magenta','yellow','purple','pink']
// const ordinal = ["th","st","nd","rd"]

// const createOrdinal = function(num){
//     return (num % 10 === 1 ? `${num}${ordinal[1]}` : (num % 10 === 2 ? `${num}${ordinal[2]}` : (num % 10 === 3 ? `${num}${ordinal[3]}` : `${num}${ordinal[0]}`)))

// }

// colors.forEach((element, index) => {
//     console.log(`My ${createOrdinal(index+1)} choice is ${element}.`)
// });

// //Exercise 3: Repeat the Question

// let flag = true
// let num
// let newNum
// while (flag = true) {
//     num = prompt('Gimme a number');
//     newNum = Number(num);
//     if (newNum >= 10) {
//         flag = false
//         break
//     }

// }

// //Exercise 4: Building Management

// const building = {
//     numberOfFloors: 4,
//     numberOfAptByFloor: {
//         firstFloor: 3,
//         secondFloor: 4,
//         thirdFloor: 9,
//         fourthFloor: 2,
//     },
//     nameOfTenants: ["Sarah", "Dan", "David"],
//     numberOfRoomsAndRent:  {
//         sarah: [3, 990],
//         dan:  [4, 1000],
//         david: [1, 500],
//     },
// }

// console.log(building.numberOfFloors);

// console.log(building.numberOfAptByFloor.firstFloor + building.numberOfAptByFloor.thirdFloor);

// // name = building.nameOfTenants[1].toLowerCase

// console.log(`${building.nameOfTenants[1]} has ${building.numberOfRoomsAndRent[building.nameOfTenants[1].toLowerCase()][0]} rooms in his apartment.`)

// if ((building.numberOfRoomsAndRent.sarah[1] + building.numberOfRoomsAndRent.david[1]) > building.numberOfRoomsAndRent.dan[1]) {
//     building.numberOfRoomsAndRent.dan[1] = 1200
// }

// console.log(building.numberOfRoomsAndRent.dan[1]);

// //Exercise 5: Family

// let family = {
//   mum: "Yarden",
//   dad: "Daniel",
//   child: "Baby Alma",
// };

// for (const key in family) {
//   console.log(key);
// }

// for (const key in family) {
//   console.log(family[key]);
// }

// //Exercise 6: Rudolf
// const details = {
//     my: 'name',
//     is: 'Rudolf',
//     the: 'raindeer'
//   }

// let newArray = []

// for (const key in details) {
//     newArray.push(key)
//     newArray.push(details[key])
// }
// console.log(...newArray);

// //Exercise 7: Secret Group
// const names = ["Jack", "Philip", "Sarah", "Amanda", "Bernard", "Kyle"];

// const initials = []

// for (const n in names) {
//     initials.push(names[n].charAt(0))
// }

// initials.sort()
// const newName = initials.join('')

// console.log(newName);