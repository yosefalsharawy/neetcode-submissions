class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        let map = {};
        let result = [];
        for(let i=0;i<nums.length;i++){
            if(map[nums[i]] === undefined){
                map[nums[i]] = 1;
            }else{
                map[nums[i]]++;
            }
        }
        // to convert the map into an array
        let arr = Object.entries(map);
        arr.sort((a,b)=> b[1] - a[1]);
        let i=0;
        while(k--){
            result.push(arr[i][0]);
            i++;
        }
        return result;
    }
}
