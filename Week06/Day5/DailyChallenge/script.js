const isAnagram = (firstString, secondString) => {
  let firstStringNoSpace = firstString.replace(/\s+/g, "").toLowerCase();
  let secondStringNoSpace = secondString.replace(/\s+/g, "").toLowerCase();

  let firstArray = [...firstStringNoSpace];
  let secondArray = [...secondStringNoSpace];

  if (firstArray.length !== secondArray.length) {
    return false;
  } else {
    firstArray.sort();
    secondArray.sort();

    for (let index = 0; index < firstArray.length; index++) {
      if (firstArray[index] !== secondArray[index]) return false;
    }
  }
  return true;
};

console.log(isAnagram("anagram", "nag a ram"));
