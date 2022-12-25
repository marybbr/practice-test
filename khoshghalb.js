const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("", function (n) {
  for (let i = 0; i < n; i++) {
    console.log("man khoshghlab hastam");
  }
  rl.close();
});
