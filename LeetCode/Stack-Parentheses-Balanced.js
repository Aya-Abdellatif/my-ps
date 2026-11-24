// time: O(n)
// space: O(n)

function isBalancedParentheses(parentheses) {
    const stack = new Stack();

    for (const p of parentheses) {
        if (p === '(') {
            stack.push(p);
        } else if (p === ')') {
            if (stack.isEmpty() || stack.pop() !== '(') {
                return false;
            }
        }
    }

    return stack.isEmpty();
}
