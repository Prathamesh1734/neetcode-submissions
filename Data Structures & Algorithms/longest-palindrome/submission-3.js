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
        let total = 0
        for(let [key,count] of map) {
            if(count % 2 === 0) {
                total += count
            }else {
                total += count -1 
                hasOdd = true
            }
        }
        if(hasOdd) {
            total += 1
        }
        return total
    }
}
