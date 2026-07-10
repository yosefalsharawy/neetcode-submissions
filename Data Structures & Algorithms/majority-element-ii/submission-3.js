class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    majorityElement(nums) {
        let counter = new Map();
        
        for(const num of nums){
            counter.set(num,(counter.get(num)||0) + 1)
            if(counter.size>2){
                let newCounter = new Map();

                for(const [key,value] of counter.entries()){
                    if(value>1){
                        newCounter.set(key,value - 1);
                    }
                } 
                counter = newCounter;
            }
        }
        let result = [];
        for(const [key] of counter.entries()){
            const freq = nums.filter(num => num === key).length;
            if(freq > Math.floor(nums.length / 3)){
                result.push(key)
            }
        }
        return result;
    }
}
