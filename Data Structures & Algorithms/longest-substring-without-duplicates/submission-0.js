class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
        const set = new Set();
        let l = 0;
        let result = 0;
        for(let i =0;i<s.length;i++){
            while(set.has(s[i])){
                set.delete(s[l]);
                l++;
            }
            set.add(s[i]);
            result = Math.max(result, i - l + 1);
        }
        return result;
    }
}
