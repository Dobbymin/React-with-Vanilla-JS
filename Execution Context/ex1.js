let lamp = true;

function goTo2F() {
  let lamp = false;
  console.log(lamp); // false
}

console.log('first', lamp); // true
goTo2F();
