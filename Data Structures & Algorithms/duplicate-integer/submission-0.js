class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
    //     for(let num=0;num<nums.length-1;num++){
    //         for(let j=num+1;j<nums.length;j++){
    //             if(nums[num] === nums[j]){
    //                 return true;
    //             }
    //         }
    //     }
    //         return false;

        let set = new Set();

        for(let num of nums){
            if(set.has(num)){
                return true;
            }
            set.add(num);
        }
        return false;
     }
}
