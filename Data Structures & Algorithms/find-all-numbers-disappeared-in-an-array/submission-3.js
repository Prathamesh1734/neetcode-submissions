class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    findDisappearedNumbers(nums) {
        let set = new Set()
        for(let i=1;i<=nums.length;i++){
            set.add(i)
        }

        for(let num of nums){
            set.delete(num)
        }
        return Array.from(set)
    }
}
