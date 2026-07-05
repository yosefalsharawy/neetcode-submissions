class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    majorityElement(nums) {
        let map = {};
  let maxNum = 0;
  let result = nums[0];

        for(let i=0;i<nums.length;i++){
            if(map[nums[i]] === undefined){
                map[nums[i]] = 1;
            }else{
                map[nums[i]]++;
            }
            if(map[nums[i]] > maxNum){
                maxNum = map[nums[i]];
                result = nums[i];
            }
        }
    return result;
    }
}
