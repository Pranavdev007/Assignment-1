console.log('Get Real Type');
function real(value) {
  let arr=Object.prototype.toString.call(value);
  let type=arr.split(' ');
  let typeStr='';

  for (i=0; i<type[1].length; i++) {
    if (type[1].charAt(i)!==']') typeStr+=type[1].charAt(i);
  }

  return typeStr.toLocaleLowerCase();
}
console.log(real(1));
console.log(real('a'));
console.log(real(true));
console.log(real([]));
console.log(real(null));






console.log('Numbers in Strings');
function numberinStr(string) {
  let finArray=[];
  for (j=0; j<string.length; j++) {
    arr=string[j].split('');

    for (k=0; k<arr.length; k++) {
      if (
        arr[k]=='1' || arr[k]=='2' || arr[k]=='3' ||arr[k]=='4' ||arr[k]=='5' ||arr[k]=='6' ||arr[k]=='7' ||arr[k]=='8' ||arr[k]=='9' ||arr[k]=='0') {
        finArray.push(arr.join(''));
        break;
      }
    }
  }
  return finArray;
}
console.log(numberinStr(['1a','a','2b','b']));
console.log(numberinStr(['abc','abc10']));
console.log(numberinStr(['abc','ab10c','ab10c','bcd']));
console.log(numberinStr(['this is a test','test1']));
