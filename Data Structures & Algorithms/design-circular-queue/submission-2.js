class MyCircularQueue {
    /**
     * @param {number} k
     */
    constructor(k) {
        this.array = [];
        this.capacity = k;
    }

    /**
     * @param {number} value
     * @return {boolean}
     */
    enQueue(value) {
        if(this.array.length === this.capacity){
            return false;
        }
        this.array.push(value);
        return true;
    }

    /**
     * @return {boolean}
     */
    deQueue() {
        if(!this.array.length){
            return false;
        }
        this.array.shift();
        return true;
    }

    /**
     * @return {number}
     */
    Front() {
        if(!this.array.length){
            return -1;
        }
        return this.array[0];
    }

    /**
     * @return {number}
     */
    Rear() {
        if(!this.array.length){
            return -1;
        }
        return this.array[this.array.length-1];
    }

    /**
     * @return {boolean}
     */
    isEmpty() {
        if(!this.array.length){
            return true;
        }
        return false;
    }

    /**
     * @return {boolean}
     */
    isFull() {
        if(this.array.length === this.capacity){
            return true;
        }
        return false;
    }
}

/**
 * Your MyCircularQueue object will be instantiated and called as such:
 * var obj = new MyCircularQueue(k)
 * var param_1 = obj.enQueue(value)
 * var param_2 = obj.deQueue()
 * var param_3 = obj.Front()
 * var param_4 = obj.Rear()
 * var param_5 = obj.isEmpty()
 * var param_6 = obj.isFull()
 */
