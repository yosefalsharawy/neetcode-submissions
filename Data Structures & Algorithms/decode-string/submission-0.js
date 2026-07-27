class Solution {
    /**
     * @param {string} s
     * @return {string}
     */
    decodeString(s) {
        const stack = [];

        for(let c of s){
            if(c !== ']'){
                stack.push(c);
            }else{
                let str = '';
                while(stack[stack.length - 1] !== '['){
                    str = stack.pop() + str;  // to get in the right order
                }
                stack.pop();
                let counter = '';

                while(stack.length && !isNaN(stack[stack.length - 1])){
                    counter = stack.pop() + counter;
                }
                let num = Number(counter);
                while(num--){
                    stack.push(str);
                }
            }
        }
        return stack.join('')

    }
}
