const nocb = require("../dist");

function saySomething(message, callback) {
  setTimeout(() => callback(message), 2000);
}

console.log("[WITHOUT NOCB]");
console.log("this message should be at start");
saySomething("hey without nocb", (rep) => console.log(rep));

(async function () {
  const rep = await nocb((r) => saySomething("hey nocb", r));
  console.log("[WITH NOCB]");
  console.log(rep);
  console.log("this message should be at end");
})();
