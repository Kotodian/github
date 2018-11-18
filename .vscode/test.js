function whatIsInAName(collection, source) {
  // What's in a name?
  // Only change code below this line
  var srcKeys=Object.keys(source);
  console.log(srcKeys.length);
  
  // Only change code above this line
  return collection.filter(function(obj){
    return srcKeys.every(function(key){
      return obj.hasOwnProperty(key)&&obj[key]===source[key];
    })
  });
}

console.log(whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" }));