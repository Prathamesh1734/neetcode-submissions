class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    maxAscendingSum(nums) {
        let res = nums[0]
        let curr = nums[0]
        for(let i=1;i<nums.length;i++){
            if(nums[i-1] < nums[i]){
                curr += nums[i]
                res = Math.max(res,curr)
            }else{
                curr = nums[i]
            }
        }
        return res
    }
}
