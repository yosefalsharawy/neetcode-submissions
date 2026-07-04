class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        if (s.length !== t.length) {
		return false;
	    }
        let mapS = {};
        let mapT = {};
        for(let i = 0;i<s.length;i++){
            if(mapS[s[i]] === undefined)
                mapS[s[i]] = 1
            mapS[s[i]]++;
        }
        for(let i = 0;i<t.length;i++){
            if(mapT[t[i]] === undefined)
               mapT[t[i]] = 1
            mapT[t[i]]++;
        }
        for(const key in mapT){
            if(mapS[key] !== mapT[key]){
                return false;
            }
        }
    
        return true;   
    }
}
