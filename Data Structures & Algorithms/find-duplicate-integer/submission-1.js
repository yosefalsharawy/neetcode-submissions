class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    findDuplicate(nums) {
        for(let i=0;i<nums.length;i++){
            let val = Math.abs(nums[i]);  // 3 
            if(nums[val-1] < 0){
                return val;
            }else{
                nums[val-1] = nums[val-1] * -1;
            }
        }
    }
}
