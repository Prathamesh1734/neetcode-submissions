class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        let map = new Map()
        let res = []
        for(let num of nums) {
            map.set(num,(map.get(num) || 0)+1)
        }
        let bucket = Array.from({length:nums.length + 1},() => [])
        for(let [key,count] of map){
            bucket[count].push(key)
        }
        for(let i=bucket.length-1;i>=1;i--) {
            for(let num of bucket[i]){
                res.push(num)
                if(res.length === k) return res
            }
        }
    }
}
