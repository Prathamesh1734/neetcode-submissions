class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    maxDifference(s) {
        let count = new Array(26).fill(0)
        for(let c of s){
            count[c.charCodeAt(0) - 'a'.charCodeAt(0)]++
        }

        let oddMax=0
        let evenMin=s.length
        for(let c of count){
            if(c & 1){
                oddMax = Math.max(oddMax,c)
            }else if(c > 0){
                evenMin = Math.min(evenMin,c)
            }
        }
        return oddMax - evenMin
    } 
}