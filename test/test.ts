import nocb from "../dist";

function saySomething(message, callback) {
  setTimeout(() => callback(message), 2000);
}

console.log("[WITHOUT NOCB]");
console.log("this message should be at start");
saySomething("hey", (rep) => console.log(rep));

(async function () {
  const rep = await nocb((r) => saySomething("hey", r));
  console.log("[WITH NOCB]");
  console.log(rep);
  console.log("this message should be at end");
})();
