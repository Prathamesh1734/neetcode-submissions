class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    check(nums) {
       let counter = 0
       for(let i=0;i<nums.length;i++){
        if(nums[i] > nums[(i+1) % nums.length]){
            counter++
        }
       }
       if(counter > 1){
        return false
       }
       return true
    }
}
