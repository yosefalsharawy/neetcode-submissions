class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    firstMissingPositive(nums) {
        let numSet = new Set(nums);
        let i = 1;
        while(numSet.has(i)){
            i++;
        }
        return i;
    }
}
