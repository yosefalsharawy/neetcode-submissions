class Solution {
    /**
     * @param {string} word1
     * @param {string} word2
     * @return {string}
     */
    mergeAlternately(word1, word2) {
        let l1 = 0;
        let l2 = 0;
        let flag1 = true;
        let flag2 = false;
        let s = '';
        while(l1!== word1.length && l2 !== word2.length){
            if(flag1){
                s += word1[l1];
                flag2 = true;
                flag1 = false;
                l1++;
            }else if(flag2){
                s += word2[l2];
                flag2 = false;
                flag1 = true;
                l2++;
            }
        }
        while(l1!== word1.length){
            s += word1[l1];
            l1++;
        }
        while(l2!== word2.length){
            s += word2[l2];
            l2++;
        }
        return s;
    }
}
