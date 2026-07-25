class Solution {
    /**
     * @param {string[]} tokens
     * @return {number}
     */
    evalRPN(tokens) {
        let stack = [];
        for(let i =0;i<tokens.length;i++){
            if(tokens[i] === '+'){
                const val1 = stack.pop();
                const val2 = stack.pop();
                stack.push(val1+val2);
            }else if(tokens[i] === '-'){
                const val1 = stack.pop();
                const val2 = stack.pop();
                stack.push(val2-val1);
            }else if(tokens[i] === '*'){
                const val1 = stack.pop();
                const val2 = stack.pop();
                stack.push(val1*val2);
            }else if(tokens[i] === '/'){
                const val1 = stack.pop();
                const val2 = stack.pop();
                stack.push(Math.trunc(val2 / val1));
            }else{
                stack.push(Number(tokens[i]))
            }
        }
        return stack[stack.length - 1]
    }
}
