class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    findMaxConsecutiveOnes(nums) {
        // let arr = [0]
        // let count=0
        // for(let num of nums){
        //     if(num == 1){
        //         count++
        //         arr.push(count)
        //     }else{
        //         count=0
        //     }
        // }
        // return arr.sort((a,b)=>b-a)[0]
        let count=0
        let result=0
        for(let num of nums){
            count = num === 1 ? count + 1 : 0
            result = Math.max(result,count)
        }
        return result
    }
}