class Solution {
    /**
     * @param {string} num
     * @return {string}
     */
    largestGoodInteger(num) {
        let res = ""
        for(let i=0;i<num.length - 2;i++){
            if(num[i] === num[i+1] && num[i] === num[i+2]){
                let substr = num[i] + num[i+1] + num[i+2]
                if(substr > res) res = substr
            }
        }
        return res
    }
}
