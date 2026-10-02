class Solution {
    /**
     * @param {number} numRows
     * @return {number[][]}
     */
    generate(numRows) {
       let res = [[1]]
       for(let i=1;i<numRows;i++){
        let prev = res[i-1]
        let next = []
        next.push(1)
        for(let j=1;j<prev.length;j++){
            let sum = prev[j] + prev[j-1]
            next.push(sum)
        }
        next.push(1)
        res.push(next)
       }
       return res
    }
}
