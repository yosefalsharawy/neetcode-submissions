class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
         let result = "";

        // create a string in the shape of [stringLength | # delimiter | string]
        for (let s of strs) {
         result += s.length + "#" + s;
        }
        return result;
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        // 5#Hello5#World
        let result = [];
        let i = 0;
        

        while(i< str.length){

        let j = i;

        while(str[j]!=='#'){ 
            j++;
        }
        let length = Number(str.slice(i,j)); //which will take 5 only here
        result.push(str.slice(j+1,j+1+length));
        i = j + 1+ length;
        }
        
        return result;
    }
}
