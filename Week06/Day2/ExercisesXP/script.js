// //Exercise 1: Colors

// const colors = ["Blue", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow"];

// colors.forEach((element, index) => {
//     console.log(`${index+1}# choice is ${element}.`)    
// });

// function isViolet(arr) {
//     return arr.some(value => value ==="Violet") ? "Yeah!" : "No..."
// }

// console.log(isViolet(colors));

// //Exercise 2: Colors #2
// const colors = ["Blue", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow"];
// const ordinal = ["th","st","nd","rd"]

// const createOrdinal = function(num){
//     return (num % 10 === 1 ? `${num}${ordinal[1]}` : (num % 10 === 2 ? `${num}${ordinal[2]}` : (num % 10 === 3 ? `${num}${ordinal[3]}` : `${num}${ordinal[0]}`)))

// }

// colors.forEach((element, index) => {
//     console.log(`${createOrdinal(index+1)} choice is ${element}.`)    
// });

//Exercise 3:

// 1: ['bread','carrot','potato','chicken','apple','orange']
// 2: unpacks string into array, i.e. ['U','S','A']

// //Exercise 4:
// const users = [{ firstName: 'Bradley', lastName: 'Bouley', role: 'Full Stack Resident' },
//              { firstName: 'Chloe', lastName: 'Alnaji', role: 'Full Stack Resident' },
//              { firstName: 'Jonathan', lastName: 'Baughn', role: 'Enterprise Instructor' },
//              { firstName: 'Michael', lastName: 'Herman', role: 'Lead Instructor' },
//              { firstName: 'Robert', lastName: 'Hajek', role: 'Full Stack Resident' },
//              { firstName: 'Wes', lastName: 'Reid', role: 'Instructor'},
//              { firstName: 'Zach', lastName: 'Klabunde', role: 'Instructor'}];

// const welcomeStudents = users.map(item =>`Hello ${item.firstName}`)

// console.log(welcomeStudents);

// const filterStudents = users.filter(item => item.role ==='Full Stack Resident')

// console.log(filterStudents);

// const lastNameFullStack = filterStudents.map(item=>`${item.lastName}`)
// console.log(lastNameFullStack);

// // #Exercise 5: Star Wars
// const epic = ['a', 'long', 'time', 'ago', 'in a', 'galaxy', 'far far', 'away'];

// let tag = epic.reduce((accumulator, currentValue) => `${accumulator} ${currentValue}`)

// console.log(tag);

//Exercise 6: Employees #2

// const students = [{name: "Ray", course: "Computer Science", isPassed: true}, 
//                {name: "Liam", course: "Computer Science", isPassed: false}, 
//                {name: "Jenner", course: "Information Technology", isPassed: true}, 
//                {name: "Marco", course: "Robotics", isPassed: true}, 
//                {name: "Kimberly", course: "Artificial Intelligence", isPassed: false}, 
//                {name: "Jamie", course: "Big Data", isPassed: false}];

// const filterStudents = students.filter(student => student.isPassed)

// console.log(filterStudents);

// filterStudents.forEach(student => console.log(`Congrats ${student.name}, you passed the course in ${student.course}!`))
