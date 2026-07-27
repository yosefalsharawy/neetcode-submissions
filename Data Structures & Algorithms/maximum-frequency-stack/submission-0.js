class FreqStack {
    constructor() {
        this.count = new Map();
        this.stack = [];
    }

    /**
     * @param {number} val
     * @return {void}
     */
    push(val) {
        this.stack.push(val);
        this.count.set(val,(this.count.get(val) || 0) + 1);
    }

    /**
     * @return {number}
     */
    pop() {
        const maxCount = Math.max(...this.count.values());
        let i = this.stack.length - 1;
        while(this.count.get(this.stack[i]) !== maxCount){
            i--;
        }
        const value = this.stack.splice(i,1)[0];
        this.count.set(value,this.count.get(value) - 1 );
        return value;
    }
}

/**
 * Your FreqStack object will be instantiated and called as such:
 * var obj = new FreqStack()
 * obj.push(val)
 * var param_2 = obj.pop()
 */
