class Solution {
    /**
     * @param {number[]} numbers
     * @param {number} target
     * @return {number[]}
     */
    twoSum(numbers, target) {
        let i = 0;
        for(let j = numbers.length;j>= i+1;){
            if(target === numbers[i] + numbers[j] ){
                return [i+1,j+1];
            }else if(target >= numbers[i] + numbers[j]){
                i++;
            }else{
                j--;
            }
        }
    }
}
