class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    longestPalindrome(s) {
        let map = new Map()
        for(let e of s){
            map.set(e,(map.get(e)||0)+1)
        }
        let totalLength = 0
        let hasOdd = false
        for(let [key,count] of map){
            if(count % 2 === 0){
                totalLength += count
            }else{
                totalLength += count - 1 
                hasOdd = true
            }
        }
        if(hasOdd) {
            totalLength += 1
        }
        return totalLength
    }
}
