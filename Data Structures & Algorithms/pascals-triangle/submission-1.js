class Solution {
    /**
     * @param {number} numRows
     * @return {number[][]}
     */
    generate(numRows) {
        let res = [[1]]
        for(let i=1;i<numRows;i++){
            let prevRow = res[i-1]
            let newRow = []
            newRow.push(1)
            for(let j=1;j<prevRow.length;j++){
                let sum = prevRow[j] + prevRow[j-1]
                newRow.push(sum)
            }
            newRow.push(1)
            res.push(newRow)
        }
        return res
    }
}
