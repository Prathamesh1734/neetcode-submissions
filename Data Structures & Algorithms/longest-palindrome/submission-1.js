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
        let hadOdd = false
        let totalCount = 0
        for(let [key,count] of map){
            if(count % 2 === 0){
                totalCount += count
            }else{
                totalCount += count - 1
                hadOdd = true
            }
        }
        if(hadOdd){
            totalCount += 1
        }
        return totalCount
    }
}
