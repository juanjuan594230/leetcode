class Stack {
    constructor() {
        this.space = [];
    }

    push(val) {
        this.space.push(val);
    }

    pop() {
        this.space.pop();
    }

    peek() {
        return this.space[-1]
    }

    getSize() {
        return this.space.length;
    }

    isEmpty() {
        return !this.space.length;
    }

}