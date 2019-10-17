function isPalindrome(s) {
  const alphaNumLowerCase = {
    a: 'A',
    b: 'B',
    c: 'C',
    d: 'D',
    e: 'E',
    f: 'F',
    g: 'G',
    h: 'H',
    i: 'I',
    j: 'J',
    k: 'K',
    l: 'L',
    m: 'M',
    n: 'N',
    o: 'O',
    p: 'P',
    q: 'Q',
    r: 'R',
    s: 'S',
    t: 'T',
    u: 'U',
    v: 'V',
    w: 'W',
    x: 'X',
    y: 'Y',
    z: 'Z'
  };
  const len = Math.floor(s.length / 2);
  let i = 0;
  let j = s.length - 1;
  let palindrome = true;
  while (i < j) {
    const x = s[i];
    const y = s[j];
    if(x == " ") {
      i++;
      continue;
    }
    if(y == " ") {
      j--;
      continue
    }
    if (!alphaNumLowerCase[x.toLowerCase()] && !(x >= 0)) {
      i++;
      continue;
    }
    if (!alphaNumLowerCase[y.toLowerCase()] && !(y >= 0)) {
      j--;
      continue;
    }
    if (x.toLowerCase() == y.toLowerCase()) {
      i++;
      j--;
    } else {
      palindrome = false;
      break;
    }
  }
  return palindrome;
}

// function isPalindrome(s) {
//   s = s.toLowerCase().replace(/[\W_]/g, "");
//   let i = 0;
//   let j = s.length - 1;
//   while(j > i) {
//     if(s[i] != s[j]){
//       return false
//     }
//     i++;
//     j--
//   }
//   return true;
// }

console.log(isPalindrome("A man, a plan, a canal: Panama"));

module.exports = isPalindrome;
