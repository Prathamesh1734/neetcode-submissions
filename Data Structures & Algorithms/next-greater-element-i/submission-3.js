class Solution {
    /**
     * @param {number[]} nums1
     * @param {number[]} nums2
     * @return {number[]}
     */
    nextGreaterElement(nums1, nums2) {
        // let res = []
        // for(let num of nums1){
        //     let startIndex = nums2.indexOf(num)
        //     let found = false
        //     for(let i=startIndex+1;i<nums2.length;i++){
        //         if(num < nums2[i]){
        //             res.push(nums2[i])
        //             found = true
        //             break
        //         }
        //     }
        //     if(!found) res.push(-1)
        // }
        // return res
        let stack = []
        let map = new Map()
        let res = []
        for(let i=0;i<nums2.length;i++){
            let curr = nums2[i]

            while(stack.length > 0 && curr > stack[stack.length - 1]){
                let waiting = stack.pop()
                map.set(waiting,curr)
            }

            stack.push(curr)
        }

        for(let i=0;i<nums1.length;i++){
            let query = nums1[i]

            if(map.has(query)){
                res.push(map.get(query))
            }else{
                res.push(-1)
            }
        }
        return res
    }
}
