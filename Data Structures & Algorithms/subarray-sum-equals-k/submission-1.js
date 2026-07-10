class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number}
     */
    subarraySum(nums, k) {
        let result = 0;
        let curSum = 0;
        const prefixSum = new Map();
        prefixSum.set(0,1);  // to represent the empty prefix
        for(let i=0;i<nums.length;i++){
            curSum += nums[i];
            let diff = curSum - k;
            result += prefixSum.get(diff) || 0;  // if the diff exists we will increment it
            prefixSum.set(curSum,(prefixSum.get(curSum) || 0) + 1)
        }
        return result;
    }
}
