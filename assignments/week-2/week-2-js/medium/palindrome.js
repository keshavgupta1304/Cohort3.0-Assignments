/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

function isPalindrome(str) {
  let updatedString=[];
  let iter=0;
  str=str.toLowerCase();
  for(let i=0;i<str.length;i++)
  {
    let charCode=str[i].charCodeAt(0)
    if((charCode>=65 && charCode<=90) || (charCode>=97 && charCode<=122) || (charCode>=48 && charCode<=57))
    {
      updatedString[iter]=str[i];
      iter=iter+1;
    }
  }
  let i=0,j=updatedString.length-1;
  while(i<=j)
  {
    if(updatedString[i]!=updatedString[j]) return false;
    i=i+1;
    j=j-1;
  }
  return true;
}

module.exports = isPalindrome;
