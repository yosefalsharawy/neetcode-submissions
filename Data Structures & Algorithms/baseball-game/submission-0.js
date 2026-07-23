class Solution {
    /**
     * @param {string[]} operations
     * @return {number}
     */
    calPoints(operations) {
        let array = [];
        let j=0;
        for(let i = 0;i<operations.length;i++){
            if(operations[i] === '+'){
                array[j] = array[j-1] + array[j-2];
                j++; 
            }else if(operations[i]==='C'){
                array.pop();
                j--;
            }else if(operations[i] === 'D'){
                array[j] = array[j-1] * 2;
                j++;
            }else {
                array.push(Number(operations[i]));
                j++;
            }
        }
        return array.reduce((acc, num) => acc + num, 0);
    }
}
