# nocbf

Transform callback function into promise

## Install

```
$ npm install nocbf
```

## Import

In node.js

```js
import nocbf from "nocbf";
```

In the browser

```html
<script src="https://unpkg.com/nocbf@1.0.0/dist/index.js"></script>
```

## Example

```js
function saySomething(message, callback) {
  setTimeout(() => callback(message), 2000);
}

function sayHello(callback) {
  setTimeout(() => callback("Hello World !"), 2000);
}

async function test() {
  const rep = await nocbf((resolve, reject) => saySomething("Hi NOCB !", r));
  const rep2 = await nocbf(sayHello);

  console.log(rep);
  console.log(rep2);
  console.log("end.");
}

test();
//Hi NOCB !
//Hello World !
//end.
```
