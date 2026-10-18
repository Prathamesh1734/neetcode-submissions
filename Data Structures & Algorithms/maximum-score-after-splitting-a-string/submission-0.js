class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    maxScore(s) {
        let maxScore = 0
        for(let i=1;i<s.length;i++){
            let left = s.substring(0,i)
            let right = s.substring(i)
            let zero = left.split('0').length - 1
            let one = right.split('1').length - 1
            let sum = zero + one
            maxScore = Math.max(maxScore,sum)
        }
        return maxScore
    }
}
