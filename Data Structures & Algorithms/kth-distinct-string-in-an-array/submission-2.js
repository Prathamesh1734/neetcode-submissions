class Solution {
    /**
     * @param {string[]} arr
     * @param {number} k
     * @return {string}
     */
    kthDistinct(arr, k) {
        let count = {}

        for(let e of arr){
            if(!(e in count)){
                count[e] = 0
            }
            count[e]++
        }

        for(let e of arr){
            if(count[e] === 1){
                k--
                if(k === 0){
                    return e
                }
            }
        }
        return ""
    }
}
