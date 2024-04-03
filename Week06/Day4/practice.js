const example = ["1,2,5,6,7", "2,5,7,8,15"];

const findIntersection = (array) => {
  const [a, b] = array;
  const duplicates = [];
  const arrayA = a.split(",");
  const arrayB = b.split(",");
  arrayA.forEach((element) => {
    arrayB.includes(element) ? duplicates.push(element) : null;
  });

  return duplicates;
};

console.log(findIntersection(example));
