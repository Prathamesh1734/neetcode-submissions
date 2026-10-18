class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    maxScore(s) {
        let maxScore = 0
        let zerosOnLeft = 0
        let onesOnRight = 0
        for(let i=0;i<s.length;i++){
            if(s[i]=== '1') onesOnRight++
        }
        for(let i=0;i<s.length-1;i++){
            if(s[i] === '0'){
                zerosOnLeft++
            }else{
                onesOnRight--
            }
            maxScore = Math.max(maxScore,zerosOnLeft+onesOnRight)
        }
        return maxScore
    }
}
