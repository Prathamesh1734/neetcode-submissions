class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestMonotonicSubarray(nums) {
        let maxAsc = 1
        let maxDesc = 1
        let maxLen = 1
        for(let i=1;i<nums.length;i++){
            if(nums[i] > nums[i-1]){
                maxAsc++
                maxDesc = 1
                maxLen = Math.max(maxLen,maxAsc)
            }else if(nums[i] < nums[i-1]){
                maxDesc++
                maxAsc = 1
                maxLen = Math.max(maxLen,maxDesc)
            }else if(nums[i] === nums[i-1]){
                maxAsc = 1
                maxDesc = 1
            }
        }
        return maxLen
    }
}
