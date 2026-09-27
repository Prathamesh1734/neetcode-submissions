class Solution {
    /**
     * @param {number[]} nums1
     * @param {number[]} nums2
     * @return {number[]}
     */
    nextGreaterElement(nums1, nums2) {
        let res = []
        for(let num of nums1){
            let startIndex = nums2.indexOf(num)
            let found = false
            for(let i=startIndex+1;i<nums2.length;i++){
                if(num < nums2[i]){
                    res.push(nums2[i])
                    found = true
                    break
                }
            }
            if(!found) res.push(-1)
        }
        return res
    }
}
