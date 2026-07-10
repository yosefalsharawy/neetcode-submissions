class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    firstMissingPositive(nums) {
        const n = nums.length;

        for(let i=0; i<n;i++){
            if(nums[i] <0){
                nums[i] = 0;
            }
        }

        for(let i=0;i<n;i++){
            let value = Math.abs(nums[i]);
            if(value>=1 && value<= n){
                if(nums[value - 1] > 0){
                    nums[value -1] *= -1;
                } else if(nums[value - 1] === 0){
                nums[value - 1] = -1 * (n + 1); 
            }             
            }
        }

        for(let i = 1;i<=n;i++){
            if(nums[i-1]>=0){
                return i;
            }
        }
        return n+1;
    }
}
