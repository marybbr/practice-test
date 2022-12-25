function solve({ url, params, query }) {
  let finalURL = "";
  finalURL += url;

  return finalURL;
}

console.log(
  solve({
    url: "https://cafebazaar.ir/apps/:type/:id/",
    params: {
      id: "com.farsitel.bazaar",
      random: "xyz",
    },
    query: {
      ref: "direct",
      l: "en",
    },
  })
);

//   return 'https://cafebazaar.ir/apps/com.farsitel.bazaar?l=en&ref=direct'

// const readline = require("readline").createInterface({
//   input: process.stdin,
//   output: process.stdout,
// });

// readline.on("line", (data) => {
//   main(data.trim());
//   readline.close();
// });

// function main(line) {
//   console.log(solve(JSON.parse(line)));
// }
