let output = "";
for (let index = 0; index < 5; index++) {
  output += "*";
  console.log(output);
}

for (let index1 = 0; index1 < 5; index1++) {
  let nextOutput = "";
  for (let index2 = 0; index2 <= index1; index2++) {
    nextOutput += "*";
  }
  console.log(nextOutput);
}
