class Solution {
    /**
     * @param {string[]} arr
     * @param {number} k
     * @return {string}
     */
    kthDistinct(arr, k) {
        let map = {}
        for(let e of arr){
            if(!(e in map)){
                map[e] = 0
            }
            map[e]++
        }

        for(let e of arr){
            if(map[e] === 1){
                k--
                if(k === 0){
                    return e
                }
            }
        }

        return ""
    }
}
