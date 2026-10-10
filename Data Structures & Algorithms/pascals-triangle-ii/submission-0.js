class Solution {
    /**
     * @param {number} rowIndex
     * @return {number[]}
     */
    getRow(rowIndex) {
        let prevRow = [1]
        for(let i=0;i<rowIndex;i++){
            let newRow = [1]
            for(let j=1;j<prevRow.length;j++){
                newRow.push(prevRow[j] + prevRow[j-1])
            }
            newRow.push(1)
            prevRow = newRow
        }
        return prevRow
    }
}
