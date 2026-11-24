enqueue(value) {
        while (!this.stack1.isEmpty()) {
            this.stack2.push(this.stack1.pop());
        }
        this.stack1.push(value);
        while (!this.stack2.isEmpty()) {
            this.stack1.push(this.stack2.pop());
        }
}

// time: O(n)
// --------------------------

dequeue() {
    if (this.isEmpty()) {
        return null;
    }

    return this.stack1.pop();
}

// time: O(1)
