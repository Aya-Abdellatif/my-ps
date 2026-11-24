/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    const stack = new Array();

    for (const p of s) {
        if (p === '(' || p === '{' || p === '[') {
            stack.push(p);
        } else {
            if(stack.length === 0) return false;

            if((p === ')' && stack[stack.length - 1] !== '(') ||
            (p === '}' && stack[stack.length - 1] !== '{') ||
            (p === ']' && stack[stack.length - 1] !== '[')){
                return false;
            }

            stack.pop();
                
        }
    }

    return stack.length === 0;
};


// Time O(n)
// Space O(n)