class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    majorityElement(nums) {
        // brute force
        // let n = nums.length
        // let floor = Math.floor(n/2)
        // for(let num of nums){
        //     let count = nums.reduce((acc,curr)=>acc + (curr == num ? 1 : 0),0)
        //     if(count > floor){
        //         return num
        //     }
        // }
        // return -1

        // sorting
        // nums.sort()
        // return nums[Math.floor(nums.length/2)]

        // optimized
        let map = new Map()
        let res = 0
        let count = 0
        for(let num of nums){
            map.set(num,(map.get(num) || 0)+1)
            if(map.get(num) > count){
                res = num
                count = map.get(num)
            }
        }
        return res
    }
}
