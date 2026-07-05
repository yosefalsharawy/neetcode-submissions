class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        let group = {};
        for(const word of strs){
            const key = word.split('').sort().join('');
            if(!group[key]){
                group[key] = [];
            }
            group[key].push(word)
        }
        return Object.values(group)
    }
}
