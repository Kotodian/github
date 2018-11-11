function splitify(str) {
  // Add your code below this line
  
  //return str.split(/\b([a-z][A-Z])\b/);
  return str.split(/[^a-zA-Z0-9]+/);
  // Add your code above this line
}
console.log(splitify("Hello World,I-am code"));