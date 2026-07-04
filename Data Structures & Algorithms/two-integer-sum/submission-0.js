class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        let map = {};
        let value;
        for(let i=0; i<nums.length;i++){
            value = target - nums[i];
            if(map[value] !== undefined){
                return [i,map[value]];
            }
            map[nums[i]] = i;
            
        }
        return true
    }
}
