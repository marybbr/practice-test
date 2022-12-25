const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("", function (str) {
  let numbers = {};
  const all = str.split("");
  all.forEach((element) => {
    if (numbers[element]) {
      numbers[element] += 1;
    } else {
      numbers[element] = 1;
    }
  });
  if (numbers.R >= 3 || (numbers.Y >= 2 && numbers.R >= 2) || !numbers.G) {
    return console.log("nakhor lite");
  }
  return console.log("rahat baash");
});
