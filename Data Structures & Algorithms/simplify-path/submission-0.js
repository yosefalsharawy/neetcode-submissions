class Solution {
    /**
     * @param {string} path
     * @return {string}
     */
    simplifyPath(path) {
        const stack = [];
        let current = '';

        for(let c of path + '/'){
            if(c === '/'){
                if(current === '..'){
                    if(stack.length){
                        stack.pop();
                    }
                }else if(current !== '' && current !== '.'){
                    stack.push(current);
                }
                current = '';
            }else{
                current += c;
            }
        }
        return '/' + stack.join('/');
    }
}
