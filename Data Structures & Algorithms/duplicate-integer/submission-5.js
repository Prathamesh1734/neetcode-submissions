class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        let map = new Map()
        for(let num of nums){
            map.set(num, (map.get(num) || 0) + 1)
        }

        for(let [count, number] of map){
            if(number > 1){
                return true
            }
        }
        return false
    }
}
