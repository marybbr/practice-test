function solve(scores) {
  return function (n) {
    let l, r;
    scores.sort();
    l = 0;
    r = scores.length - 1;
    while (l < r) {
      if (scores[l] + scores[r] == n) return true;
      else if (scores[l] + scores[r] < n) l++;
      else r--;
    }
    return false;
  };
}

const solver = solve([1, 3, 1, 2]);
console.log(solver(2)); // 1+1 = 2
console.log(solver(3)); // 1+2 = 3
console.log(solver(4)); // 1+2 = 3
console.log(solver(5)); // 1+2 = 3
console.log(solver(6)); // No pair exists for 4

// const readline = require("readline").createInterface({
//   input: process.stdin,
//   output: process.stdout,
// });

// readline.on("line", (data) => {
//   main(data.trim());
//   readline.close();
// });

// function main(line) {
//   const [scores, sums] = JSON.parse(line);

//   const result = [];
//   const solver = solve(scores);
//   for (const sum of sums) {
//     result.push(solver(sum) ? 1 : 0);
//   }

//   console.log(JSON.stringify(result));
// }
