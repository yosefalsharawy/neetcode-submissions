class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
    let numSet = new Set(nums);
	let longestNum = 0;
	for (const num of numSet) {
		let number = num;
		if (!numSet.has(num - 1)) {
			let length = 1;

			while (numSet.has(number + 1)) {
				length++;
				number++;
			}
			if (length > longestNum) {
				longestNum = length;
			}
		}
	}
    return longestNum;
        }
}
