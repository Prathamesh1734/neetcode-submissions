class Solution {
    /**
     * @param {number} numRows
     * @return {number[][]}
     */
    generate(numRows) {
        let ans = []
        for(let i=0;i<numRows;i++){
            let r = [1]
            let value = 1
            for(let j=1;j<=i;j++){
                value = (value * (i-j+1)/j)
                r.push(value)
            }
            ans.push(r)
        }
        return ans
    }
}
