function spinalCase(str) {
  // "It's such a fine line between stupid, and clever."
  // --David St. Hubbins
  var newStr=[];
  str = str.replace(/([a-z])([A-Z])/g,function(match,s1,s2){
    return s1+" "+s2
  });///g表示全局匹配
  console.log(str);
  newStr=str.split(/(?:_| )+/);
  console.log(newStr);
 return newStr.join("-").toLowerCase();
 
}

console.log(spinalCase('lowerAndUppercase'));