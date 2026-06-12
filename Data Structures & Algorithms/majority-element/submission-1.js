class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    majorityElement(nums) {
        let n = nums.length
        let floor = Math.floor(n/2)
        for(let num of nums){
            let count = nums.reduce((acc,curr)=>acc + (curr == num ? 1 : 0),0)
            if(count > floor){
                return num
            }
        }
        return -1
    }
}
