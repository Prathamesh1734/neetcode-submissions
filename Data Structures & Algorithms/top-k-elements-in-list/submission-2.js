class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        let freq = {}
        for(let num of nums){
            freq[num] = (freq[num] || 0) +1
        }

        const arr = Object.entries(freq).map(([num,fr])=>[fr,parseInt(num)])
        arr.sort((a,b)=>b[0]-a[0])
        return arr.slice(0,k).map((pair)=>pair[1])
    }
}
