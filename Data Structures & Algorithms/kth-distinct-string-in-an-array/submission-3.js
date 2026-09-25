class Solution {
    /**
     * @param {string[]} arr
     * @param {number} k
     * @return {string}
     */
    kthDistinct(arr, k) {
        let map = new Map()
        for(let i=0;i<arr.length;i++){
            map.set(arr[i], (map.get(arr[i]) || 0) + 1)
        }
        for(let [key,count] of map){
            if(count > 1){
                map.delete(key)
            }
        }
        console.log(map)
        let kthElement = Array.from(map.keys())[k-1]
        console.log(kthElement)
        if(!kthElement){
            return ""
        }
        return kthElement
    }
}
