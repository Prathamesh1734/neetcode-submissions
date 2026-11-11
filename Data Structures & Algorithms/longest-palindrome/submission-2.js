class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    longestPalindrome(s) {
        let map = new Map()
        for(let e of s){
            map.set(e,(map.get(e) || 0)+1)
        }
        let hasOdd = false
        let totalScore = 0
        for(let [key,count] of map){
            if(count % 2 === 0){
                totalScore += count
            }else{
                hasOdd = true
                totalScore += count - 1
            }
        }
        if(hasOdd) {
            totalScore += 1
        }
        return totalScore
    }
}
