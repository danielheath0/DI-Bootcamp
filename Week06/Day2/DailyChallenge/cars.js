// Car Inventory
//Part 1

const inventory = [
  { id: 1, car_make: "Lincoln", car_model: "Navigator", car_year: 2009 },
  { id: 2, car_make: "Mazda", car_model: "Miata MX-5", car_year: 2001 },
  { id: 3, car_make: "Honda", car_model: "Accord", car_year: 1983 },
  { id: 4, car_make: "Land Rover",car_model: "Defender Ice Edition",car_year: 2010},
  { id: 5, car_make: "Honda", car_model: "Accord", car_year: 1995 },
];

const getCarHonda = function (carInventory) {
  const found = carInventory.find((item) => item.car_make === "Honda");
  return `This is a ${found.car_make} ${found.car_model} from ${found.car_year}.`;
};

console.log(getCarHonda(inventory));

//Part 2
const sortCarInventoryByYear = function (carInventory) {
  carInventory.sort((a, b) => a.car_year - b.car_year);
};

sortCarInventoryByYear(inventory);
console.log(inventory);
