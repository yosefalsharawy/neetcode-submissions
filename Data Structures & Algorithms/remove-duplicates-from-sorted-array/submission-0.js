class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    removeDuplicates(nums) {
        const set = new Set(nums);
        let i = 0;
        for(let num of set){
            nums[i] = num;
            i++; 
        }
        return i;
    }
}
