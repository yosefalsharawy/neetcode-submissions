class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        let leftP = 0; // for buying
        let rightP = 1; // for selling
        let maxProfit = 0;
        while(rightP <prices.length){
            if(prices[leftP]<prices[rightP]){
                maxProfit = Math.max(maxProfit,prices[rightP]-prices[leftP])
            }else{
                leftP = rightP;
            }
            rightP++;
        }
        return maxProfit;
    }
}
