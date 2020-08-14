console.log("Reverse Words Starting with a Particular Letter");
function SpReverse(string,c) {
  let a=string.split(' '); 
  let len=a.length;
  for (i=0; i<len; i++) {
    if (a[i].substr(0,1)==c) {
      let newa = a[i].split(''); 
      a[i]=newa.reverse().join(''); 
    }
  }
  return a.join(' '); 
}
console.log(SpReverse("word searches are super fun", "s"));
console.log(SpReverse("first man to walk on the moon", "m"));
console.log(SpReverse("peter piper picked pickled peppers", "p"));





console.log("Hitting the Jackpot");
function test(arr) {
  if (
    arr[0]===arr[1] && arr[1]===arr[2] && arr[2]===arr[3] && arr[3]===arr[0]
  ) {
    return true;
  } else {
    return false;
  }
}
console.log(test(["@","@","@","@"]));
console.log(test(["abc","abc","abc","abc"]));
console.log(test(["SS","SS","SS","SS"]));
console.log(test(["&&","&","&&&","&&&&"]));
console.log(test(["SS","SS","SS","Ss"]));





console.log("Remove Duplicates from an Array");
function rem(array) {
  return array.filter((a,b)=>array.indexOf(a)===b);
}
console.log(rem([1,0,1,0]));
console.log(rem(["The","big","cat"]));
console.log(rem(['John','Taylor','John']));

