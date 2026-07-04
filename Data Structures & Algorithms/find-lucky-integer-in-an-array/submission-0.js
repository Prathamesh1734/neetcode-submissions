class Solution {
    /**
     * @param {number[]} arr
     * @return {number}
     */
    findLucky(arr) {
        let map = new Map()
        for(let e of arr){
            // map[e] = (map[e] || 0) + 1
            map.set(e,(map.get(e) || 0) + 1)
        }
        let res = -1
        for(let [num,count] of map.entries()) {
            if(num === count){
                res = Math.max(res,num)
            }
        }
        return res
    }
}
