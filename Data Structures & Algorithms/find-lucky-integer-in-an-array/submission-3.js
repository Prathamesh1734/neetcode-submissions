class Solution {
    /**
     * @param {number[]} arr
     * @return {number}
     */
    findLucky(arr) {
        let largest = -1
        let map = new Map()
        for(let num of arr){
            map.set(num, (map.get(num) || 0) + 1)   
        }
        console.log(map)
        for(let [key,value] of map){
            if(key == value){
                largest = Math.max(largest,key)
            }
        }
        return largest
    }
}
