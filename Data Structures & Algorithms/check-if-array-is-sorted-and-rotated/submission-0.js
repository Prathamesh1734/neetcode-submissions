class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    check(nums) {
        let N = nums.length
        let c = 1
        for(let i=1;i<2*N;i++){
            if(nums[(i-1)%N] <= nums[i%N]){
                c++
            }else{
                c = 1
            }
            if(c == N) return true
        }
        return N == 1
    }
}
