class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    divideArray(nums) {
        let map = new Map()
        for(let num of nums){
            map.set(num,(map.get(num) || 0) + 1)
        }
        for(let [key,count] of map){
            if(count % 2 !== 0){
                return false
            }
        }
        return true
    }
}
