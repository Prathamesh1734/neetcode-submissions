class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    maxScore(s) {
        let maxScore = 0
        let zero = 0
        let one = 0
        for(let e of s){
            if(e === "1"){
                one++
            }
        }
        for(let i=0;i<s.length-1;i++){
            if(s[i] === "0"){
                zero++
            }else{
                one--
            }
            maxScore = Math.max(maxScore,zero+one)
        }
        return maxScore
    }
}
