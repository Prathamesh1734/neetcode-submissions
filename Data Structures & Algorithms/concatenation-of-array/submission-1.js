class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    getConcatenation(nums) {
        // let newArr = [...nums];
        // return nums.concat(newArr);

        let newArr = new Array(nums.length);
        for(let i=0;i<nums.length;i++){
            newArr[i]= newArr[i+nums.length] = nums[i]
        }
        return newArr
    }
}
