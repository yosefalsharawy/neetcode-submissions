class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    majorityElement(nums) {
        let map = {};
        for(let i=0;i<nums.length;i++){
            if(map[nums[i]] === undefined){
                map[nums[i]] = 1;
            }else{
                map[nums[i]]++;
            }
        }
        let maxNum = map[nums[0]];
        let result = nums[0];
        for(const key in map){
            if(map[key] > maxNum){
                maxNum = map[key];
                result = key;
            }
        }
        return result;
    }
}
