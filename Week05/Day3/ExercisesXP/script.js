// //Exercise 1
// const displayNumbersDivisible = (divisor) => {
//     sum = 0
//     for (let index = 0; index < 501; index++) {
//         if (index % divisor == 0) {
//             sum += index
//             console.log(index);
//         };

//     }
//     console.log(`Sum = ${sum}`)
// }

// displayNumbersDivisible(23)

// //Exercise 2

// const stock = {
//   banana: 6,
//   apple: 0,
//   pear: 12,
//   orange: 32,
//   blueberry: 1,
// };

// const prices = {
//   banana: 4,
//   apple: 2,
//   pear: 1,
//   orange: 1.5,
//   blueberry: 10,
// };

// const shoppingList = ["banana", "orange", "apple"];

// const myBill = () => {
//   let total = 0;
//   for (let index = 0; index < shoppingList.length; index++) {
//     let currentItem = shoppingList[index];
//     if (currentItem in stock && stock[currentItem] > 0) {
//       total += prices[currentItem];
//       stock[currentItem]--;
//     }
//   }
//   return total;
// };

// console.log(myBill());

// //Exercise 3

// const changeEnough = (itemPrice, amountOfChange) => {
//   const coinValues = [0.25, 0.1, 0.05, 0.01];
//   let totalValue=0
//   for (let index = 0; index < amountOfChange.length; index++) {
//     totalValue += amountOfChange[index]*coinValues[index]
//   }
// return itemPrice <= totalValue
// };

// console.log(changeEnough(14.11, [2,100,0,0]));
// console.log(changeEnough(0.75, [0,0,20,5]) );

// //Exercise 4

// const hotelCost = () => {
//   let nights = prompt("Please choose how many nights you would like to stay:");
//   nights = parseInt(nights);
//   if (!isNaN(nights) && Number.isInteger(nights) && nights > 0) {
//     return nights * 140;
//   } else {
//     return hotelCost();
//   }
// };

// const planeRideCost = () => {
//   let price;
//   let destination = prompt("Where are you going?");
//   if (!typeof destination === "string") {
//     return planeRideCost();
//   } else {
//     if (destination.toLowerCase() === "london") {
//       price = 183;
//     } else if (destination.toLowerCase() === "paris") {
//       price = 220;
//     } else {
//       price = 300;
//     }
//     return price;
//   }
// };

// const rentalCarCost = () => {
//   let carPrice;
//   let days = prompt(`How many days would you like to rent the car for?`);
//   days = parseInt(days);
//   if (!isNaN(days) && Number.isInteger(days) && days > 0) {
//     if (days <= 10) {
//       carPrice = days * 40;
//     } else {
//       carPrice = days * 40 * 0.95; //5% discount if rent for more than 10 days
//     }
//   } else {
//     return rentalCarCost();
//   }

//   return carPrice;
// };

// const totalVacationCost = () => {
//   let hotel = hotelCost();
//   let plane = planeRideCost();
//   let car = rentalCarCost();

//   return `Total cost is \$${hotel + plane + car}.`;
// };

// console.log(totalVacationCost());

