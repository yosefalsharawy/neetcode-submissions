class Solution {
    /**
     * @param {number[]} nums1
     * @param {number} m
     * @param {number[]} nums2
     * @param {number} n
     * @return {void} Do not return anything, modify nums1 in-place instead.
     */
    merge(nums1, m, nums2, n) {
        let i=0;
        let j=0;
        let ans = [];
        while(i< m && j< n){
            if(nums1[i] <= nums2[j]){
                ans.push(nums1[i]);
                i++;
            }else{
                ans.push(nums2[j]);
                j++;
            }
        }
        while(i<m){
            ans.push(nums1[i++]);
        }
        while(j<n){
            ans.push(nums2[j++]);
        }
        for(let i = 0;i<ans.length;i++){
            nums1[i] = ans[i];
        }
    }
}
