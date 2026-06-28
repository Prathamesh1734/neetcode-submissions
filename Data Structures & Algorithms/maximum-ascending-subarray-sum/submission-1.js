class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    maxAscendingSum(nums) {
        let currentSum = nums[0]
        let result = nums[0]
        for(let i=1;i<nums.length;i++){
            if(nums[i-1] < nums[i]){
                currentSum += nums[i]
                result = Math.max(result,currentSum)
            }else{
                currentSum = nums[i]
            }
        }
        return result
    }
}
