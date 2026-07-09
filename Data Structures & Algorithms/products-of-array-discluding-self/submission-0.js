class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        let prefix = Array(nums.length + 2).fill(1);
	let postfix = Array(nums.length + 2).fill(1);
	let answer = Array(nums.length + 2).fill(1);
	for (let i = 1; i <= nums.length; i++) {
		prefix[i] *= nums[i - 1] * prefix[i - 1];
	}
	postfix[nums.length] = nums[nums.length - 1];
	for (let i = nums.length - 1; i > 0; i--) {
		postfix[i] *= nums[i - 1] * postfix[i + 1];
	}
  	for (let i = 1; i <= nums.length; i++) {
		answer[i] = prefix[i - 1] * postfix[i + 1];
	}
	return answer.splice(1, nums.length)
    }
}
