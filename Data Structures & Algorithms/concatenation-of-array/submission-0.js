class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    getConcatenation(nums) {
        let newArr = [...nums];
        return nums.concat(newArr);
    }
}
