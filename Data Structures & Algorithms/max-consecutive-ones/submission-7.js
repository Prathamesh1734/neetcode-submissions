class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    findMaxConsecutiveOnes(nums) {
        let count=0
        let res=0
        for(let num of nums){
            if(num !== 1){
                count=0
            }else{
                count++
            }
            res = Math.max(res,count)
        }
        return res
    }
}
