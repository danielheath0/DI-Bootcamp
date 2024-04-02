// //Exercise 1: Location

// const person = {
//     name: 'John Doe',
//     age: 25,
//     location: {
//         country: 'Canada',
//         city: 'Vancouver',
//         coordinates: [49.2827, -123.1207]
//     }
// }

// const {name, location: {country, city, coordinates: [lat, lng]}} = person;

// console.log(`I am ${name} from ${city}, ${country}. Latitude(${lat}), Longitude(${lng})`);

// // Expected output: I am John Doe from Vancouver, Canada. Lattitude(49,2827), Longitude(-123.1207)

// // Actual output: I am John Doe from Vancouver, Canada. Latitude(49.2827), Longitude(-123.1207)

// //Exercise 2: Display Student Info
// function displayStudentInfo({first, last}){
//     console.log(`Your full name is ${first} ${last}`)
// }

// displayStudentInfo({first: 'Elie', last:'Schoppik'});

// //Similar to **kwargs in Python!

// //Exercise 3 User & ID

// const users = { user1: 18273, user2: 92833, user3: 90315 };
// const usersArray = Object.entries(users);

// const doubledUsersArray = usersArray.map((arr) => [arr[0], arr[1] * 2]);

// console.log(doubledUsersArray);

// //Exercise 4: Person Class
// class Person {
//     constructor(name) {
//       this.name = name;
//     }
//   }

//   const member = new Person('John');
//   console.log(typeof member);

//   //Expected answer: Object
//   //Actual answer: object

// //Exercise 5: Dog Class
// class Dog {
//     constructor(name) {
//       this.name = name;
//     }
//   };
//  //Number 2 will successfully extend. We need to super the name to bring it from Dog, but name also needs to be a parameter of the constructor.

//Exercise 6: Challenges
// [2] === [2] is True - False surpisingly!
// {} === {} is False because nothing neither is nor is not equal to nothing.
//Both are false because they are compared by reference.

// const object1 = { number: 5 };
// const object2 = object1;
// const object3 = object2;
// const object4 = { number: 5};

// object1.number = 4;
// console.log(object2.number)
// console.log(object3.number)
// console.log(object4.number)

// 4 4 5 : makes sense because object3 object2 and object1 all point to the same reference. object4 points elsewhere.

// class Animal {
//   constructor(name, type, color) {
//     this.name = name;
//     this.type = type;
//     this.color = color;
//   }
// }

// class Mammal extends Animal {
//   constructor(name, type, color, noise) {
//     super(name, type, color);
//     this.noise = noise;
//   }
//   sound(noise) {
//     return `I'm a ${this.type} called ${this.name} and I'm ${this.color}. ${this.noise}!`
//   }
// }

// let farmerCow = new Mammal('Simon','cow', 'spotted', 'Mooooo')

// console.log(farmerCow.sound());