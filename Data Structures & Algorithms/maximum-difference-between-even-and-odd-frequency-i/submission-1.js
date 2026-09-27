class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    maxDifference(s) {
        let map = new Map()
        for(let i=0;i<s.length;i++){
            map.set(s[i], (map.get(s[i]) || 0) + 1)
        }
        console.log(map)
        let maxOdd = -Infinity
        let minEven = Infinity
        for(let [key,count] of map){
            if(count % 2 !== 0){
                maxOdd = Math.max(maxOdd,count)
            }
            if(count % 2 === 0){
                minEven = Math.min(minEven,count)
            }
        }
        let diff = maxOdd - minEven
        return diff
    }
}
