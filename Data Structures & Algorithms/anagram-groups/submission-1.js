class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        const arr = [];
        const group = {};
        for(const word of strs){
            const key = word.split('').sort().join('');
            if(group[key] === undefined){
                group[key] = [];
            }
            group[key].push(word);
        }
        for(const key in group){
            arr.push(group[key]);
        }
        return arr;
    }
}
