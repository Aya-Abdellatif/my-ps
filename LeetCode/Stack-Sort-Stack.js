function sortStack(stack) {
    const additionalStack = new Stack();
 
    while (!stack.isEmpty()) {
        const temp = stack.pop();
 
        while (!additionalStack.isEmpty() && additionalStack.peek() > temp) {
            stack.push(additionalStack.pop());
        }
 
        additionalStack.push(temp);
    }
 
    while (!additionalStack.isEmpty()) {
        stack.push(additionalStack.pop());
    }
}

/*
Complexity	      Result	Reason
Time (Worst)	    O(n²)	  Nested loops and repeated element movements
Time (Best) 	    O(n)	  Inner loop doesn't need to move elements
Auxiliary Space 	O(n)	  Additional sortedStack

*/
