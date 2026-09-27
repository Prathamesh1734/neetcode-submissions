class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    majorityElement(nums) {
        let len = nums.length / 2
        let map = new Map()
        for(let num of nums){
            map.set(num,(map.get(num) || 0) + 1)
        }

        for(let [key,count] of map){
            if(count > len){
                return key
            }
        }
    }
}
