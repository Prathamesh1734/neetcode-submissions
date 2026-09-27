class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    majorityElement(nums) {
        // let len = nums.length / 2
        // let map = new Map()
        // for(let num of nums){
        //     map.set(num,(map.get(num) || 0) + 1)
        // }

        // for(let [key,count] of map){
        //     if(count > len){
        //         return key
        //     }
        // }
        let candidate = 0
        let count = 0
        for(let num of nums){
            if(count == 0){
                candidate = num
            }

            if(num === candidate){
                count++ 
            }else{
                count--
            }
        }
        return candidate
    }
}
