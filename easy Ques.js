console.log("Count Instances of a Character in a String");
function charCo(c,string) 
{
 var count=0;
 for (var pos=0; pos<string.length; pos++) 
 {
    if (c==string.charAt(pos)) 
      {
           count+=1;
      }
  }
  return count;
}

console.log(charCo("a","edabit"));
console.log(charCo("c","Chamber of secrets"));
console.log(charCo("b","big fat bubble"));




console.log("Add up the Numbers from a Single Number");
function add(n) {
    var sum=0;
    for (var i=1; i<=n; i++) {
      sum+=i;
    }
    return sum;
  }
  
console.log(add(4));
console.log(add(13));
console.log(add(600));





console.log("Replace Vowel with Another Character");
function replaceVo(string) 
{
 
 for (var pos=0; pos<string.length; pos++) 
 {
    if (string.charAt(pos)=='a') 
    {
        string = string.replace(string.charAt(pos), 1);      
    }
    if (string.charAt(pos)=='e') 
    {
        string = string.replace(string.charAt(pos), 2);      
    }
    if (string.charAt(pos)=='i') 
    {
        string = string.replace(string.charAt(pos), 3);      
    }
    if (string.charAt(pos)=='o') 
    {
        string = string.replace(string.charAt(pos), 4);      
    }
    if (string.charAt(pos)=='u') 
    {
        string = string.replace(string.charAt(pos), 5);      
    }                               
  }
  return string;
}

console.log(replaceVo("karachi"));
console.log(replaceVo("chembur"));
console.log(replaceVo("khandbari"));
