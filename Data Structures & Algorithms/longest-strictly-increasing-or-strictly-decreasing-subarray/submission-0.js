class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestMonotonicSubarray(nums) {
        let current = 1
        let res = 1
        let increasing = 0

        for(let i=1;i<nums.length;i++){
            if(nums[i-1] < nums[i]){
                if(increasing > 0){
                    current++
                }else{
                    current=2
                    increasing=1
                }
            }else if(nums[i-1] > nums[i]){
                if(increasing < 0){
                    current++
                }else{
                    current=2
                    increasing=-1
                }
            }else{
                current = 1
                increasing = 0
            }
            res = Math.max(res,current)
        }
        return res
    }
}
