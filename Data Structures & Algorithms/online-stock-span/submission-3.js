class StockSpanner {
    constructor() {
        this.stack = [];
        this.s2 = [];
    }

    /**
     * @param {number} price
     * @return {number}
     */
    next(price) {
        this.stack.push(price);
        return this.calcCons(price,this.stack.length-1);
    }

    calcCons(price,idx){
        for(let i = 0;i<this.stack.length;i++){
            this.s2.push(this.stack[i]);
            if(i === idx){
                break;
            }
        }
        let counter = 0;
        for(let i=0;i<this.s2.length;i++){
            if(this.s2[i] <= price){
                counter++;
                if(i ===idx){
                    break;
                }
            }else{
                counter = 0;
            }
        }
        while(this.s2.length){
            this.s2.pop();
        }
        return counter;
    }
}

/**
 * Your StockSpanner object will be instantiated and called as such:
 * var obj = new StockSpanner()
 * var param_1 = obj.next(price)
 */
