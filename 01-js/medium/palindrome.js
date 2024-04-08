/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

function isPalindrome(str) {
  str = str.toLowerCase();
  let i = 0;
  let j = str.length-1;
  let puncstr = ",.?!-\\"
  while(i<j){
    if(str[i]==" " || str[j]==" "|| puncstr.includes(str[i]) || puncstr.includes(str[j])){
      return true;
    }
    if(str[i]!=str[j]){
    return false
    }
    i++;
    j--;
  }
  return true;
}
console.log(isPalindrome('Able, was I ere I saw Elba!'))
module.exports = isPalindrome;
