class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
    let result = new Array(nums.length + 1).fill(0);
	let map = {};
	for (let i = 0; i < nums.length; i++) {
		if (map[nums[i]] === undefined) {
			map[nums[i]] = 1;
		} else {
			map[nums[i]]++;
		}
	}
	let arr = Object.entries(map);

	//bucket sort
	for (let i = 0; i < arr.length; i++) {
		let freq = arr[i][1];
		let num = Number(arr[i][0]);

		if (!result[freq]) {
			result[freq] = [];
		}

		result[freq].push(num);
	}

	let finalResult = [];
	for (let i = result.length - 1; i >= 0 && k > 0; i--) {
		if (result[i]) {
			finalResult.push(...result[i]);
			k -= result[i].length;
		}
	}
    return finalResult;
  }
}
