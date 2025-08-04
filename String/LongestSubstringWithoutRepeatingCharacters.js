// Example 1:

// Input: s = "abcabcbb"
// Output: 3
// Explanation: The answer is "abc", with the length of 3.
// Example 2:

// Input: s = "bbbbb"
// Output: 1
// Explanation: The answer is "b", with the length of 1.
// Example 3:

// Input: s = "pwwkew"
// Output: 3
// Explanation: The answer is "wke", with the length of 3.
// Notice that the answer must be a substring, "pwke" is a subsequence and not a substring.

function lengthOfLongestSubstring(s) {
  let maxLen = 0;               // Stores the maximum length found so far
  let map = new Map();          // Stores character → last seen index
  let start = 0;                // Left side of the current window

  for (let end = 0; end < s.length; end++) {
    let char = s[end];          // Current character

    if (map.has(char)) {
      // Character repeated → move the start to one past last occurrence
      start = Math.max(map.get(char) + 1, start);
    }

    map.set(char, end);         // Update last seen index of current char
    maxLen = Math.max(maxLen, end - start + 1); // Update max length
  }

  return maxLen;
}

console.log(lengthOfLongestSubstring("abcabcbb")); // Output: 3
