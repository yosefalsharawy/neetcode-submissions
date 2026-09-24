class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        let result = '';
        //5#Hello5#World
        for(const str of strs){
            result += str.length + '#' + str;
        }        
        return result;
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        //5#Hello5#World
        let i = 0;
        let result = [];
        while(i<str.length){
            let j = i;
            while(str[j] !='#'){
                j++;
            }
            let len = Number(str.slice(i,j)); //5
            result.push(str.slice(j+1 , j+1+len));
            i = j + 1 + len;
        }
        return result;

    }
}
