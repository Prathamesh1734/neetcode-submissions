class Solution {
    /**
     * @param {number[]} nums1
     * @param {number[]} nums2
     * @return {number[]}
     */
    nextGreaterElement(nums1, nums2) {
        let res = []
        for(let num of nums1){
            let nextGreater = -1
            for(let i=nums2.length-1;i>=0;i--){
                if(nums2[i] > num){
                    nextGreater = nums2[i]
                }else if(nums2[i] === num){
                    break
                }
            }
            res.push(nextGreater)
        }
        return res
    }
}
