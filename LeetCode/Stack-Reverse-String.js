//Overall: O(n) under the usual algorithmic assumption that appending a character to a string is O(1) amortized. (rope strings optimization postpone concatenation)
//There is one important JavaScript detail: strings are immutable. Creating a new string with += may involve copying the existing characters.

  // Time	O(n) under the usual assumption; potentially O(n²) due to string concatenation
// Space	O(n)

function reverseString(string) {
    const stack = new Stack();
    let reversedString = "";
 
    for (const c of string) {
        stack.push(c);
    }
 
    while (!stack.isEmpty()) {
        reversedString += stack.pop();
    }
 
    return reversedString;
}

// =================================================================

/*

// Array insead of string concatenation
// Time: O(n)
// Space: O(n)

function reverseString(string) {
    const stack = new Stack();

    for (const ch of string) {
        stack.push(ch);
    }

    const reversed = [];

    while (!stack.isEmpty()) {
        reversed.push(stack.pop());
    }

    return reversed.join("");
}

*/

// ===================================================================

/*

// JavaScript built-in methods
// Time: O(n)
// Space: O(n)

function reverseString(string) {
    return string.split("").reverse().join("");
}

*/
