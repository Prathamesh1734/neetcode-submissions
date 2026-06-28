class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestMonotonicSubarray(nums) {
        let current = 1 // keep track of current subarray
        let result = 1 // max subarray & input is never going to be empty so initialized to 1
        let increasing = 0 // to track the state of subarray

        for(let i=1;i<nums.length;i++){
            if(nums[i-1] < nums[i]){
                if(increasing > 0){
                    current++
                }else{
                    current = 2
                    increasing = 1
                }
            }else if(nums[i-1] > nums[i]){
                if(increasing < 0){
                    current++
                }else{
                    current = 2
                    increasing = -1
                }
            }else{
                current = 1
                increasing = 0
            }
            result = Math.max(result,current)
        }

        return result
    }
}
