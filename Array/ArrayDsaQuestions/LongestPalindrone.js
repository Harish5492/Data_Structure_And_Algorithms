// let string = "babad";
let string = "racecar"

function longestPalindroneLength(string) {
  let set = new Set();
  for (const word of string) {
    if (!set.has(word)) {
      set.add(word);
    } else set.delete(word);
  }
  return set.size > 0 ? string.length - set.size + 1 : set.size;
}


function longestPalindrone(string){
    let start = 0, end = 0;
    for(let i = 0; i < string.length; i++){
        let len1 = expandAroundCenter(string, i, i);
        console.log("len1", len1);
        let len2 = expandAroundCenter(string, i, i+1);
        console.log(len2);
        let len = Math.max(len1, len2);
        console.log({
            end,
            start
        })
        if(len > end - start){
            start = Math.ciel(i - (len - 1) / 2);
            end = Math.floor(i + len / 2);
        }
    }
    return string.slice(start, end + 1);
}
function expandAroundCenter(string, left, right){
    while(left >= 0 && right < string.length && string[left] === string[right]){
        console.log("expanding", left, right);
        left--;
        right++;
    }
    return right - left - 1;
}

console.log(longestPalindroneLength(string));
console.log(longestPalindrone(string));