class Solution {
    /**
     * @param {number[]} nums
     * @return {void} Do not return anything, modify nums in-place instead.
     */
    sortColors(nums) {
        let count0 = 0;
        let count1 = 0;
        let count2 = 0;
        for(const num of nums){
            if(num === 0)
            count0++;
            else if(num === 1)
            count1++;
            else
            count2++;
        }
        let index =0;
        while(count0--){
            nums[index] = 0;
            index++;
        }
        while(count1--){
            nums[index] = 1;
            index++;
        }
        while(count2--){
            nums[index] = 2;
            index++;
        }
    }
}
