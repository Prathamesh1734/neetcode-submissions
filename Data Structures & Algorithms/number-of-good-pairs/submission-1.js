class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    numIdenticalPairs(nums) {
       let goodPairs = 0
       let map = new Map()
       for(let num of nums){
        if(map.has(num)){
            goodPairs += map.get(num)
        }
        map.set(num,(map.get(num) || 0) + 1)
       }
       return goodPairs
    }
}
