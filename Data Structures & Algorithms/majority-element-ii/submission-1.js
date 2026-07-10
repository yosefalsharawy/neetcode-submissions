class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    majorityElement(nums) {
        let map = {};
	let result = [];
	for (let i = 0; i < nums.length; i++) {
		if (map[nums[i]] === undefined) {
			map[nums[i]] = 1;
		} else {
			map[nums[i]]++;
		}
	}
	for (const num in map) {
		if (map[num] > nums.length / 3) {
			result.push(Number(num));
		}
	}
        return result;
    }
}
