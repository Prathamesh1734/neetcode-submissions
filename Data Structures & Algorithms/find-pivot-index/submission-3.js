class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    pivotIndex(nums) {
        let total = nums.reduce((acc,curr) => acc+curr,0)
        let leftSum = 0
        for(let i=0;i<nums.length;i++){
            let rightSum = total - leftSum - nums[i]
            if(rightSum == leftSum){
                return i
            }
            leftSum += nums[i]
        }
        return -1
    }       
}
