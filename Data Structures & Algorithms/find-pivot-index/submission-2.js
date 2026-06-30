class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    pivotIndex(nums) {
        let left = 0
        let total = nums.reduce((acc,curr)=>acc+curr,0)
        for(let i=0;i<nums.length;i++){
            let right = total - nums[i] - left
            if(right === left){
                return i
            }
            left += nums[i]
        }
        return -1
    }
}
