class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    threeSum(nums) {
        nums.sort((a,b)=>a-b);
        const res = [];
        let ans = this.twoPts(nums,nums[0],1,nums.length-1);
        if(ans){
            res.push(...ans);
        }
        for(let i=1;i<nums.length;i++){
            if(nums[i] !== nums[i-1]){
                ans = this.twoPts(nums,nums[i],i+1,nums.length-1);
                if(ans){
                    res.push(...ans);
                }
                }
        }
        return res;
        
    }
    twoPts(nums,target,l,r){
        const res = [];
        while(l<r){
            const total = target + nums[l] + nums[r];
            if(total === 0){
                res.push([target,nums[l],nums[r]]);
                l++;
                r--;
                while (l < r && nums[l] === nums[l - 1]) l++;
                while (l < r && nums[r] === nums[r + 1]) r--;
            }else if(total<0){
                l++;
            }else{
                r--;
            }
        }
        if(res.length)
            return res;
    }
}
