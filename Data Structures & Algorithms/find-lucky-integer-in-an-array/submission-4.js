class Solution {
    /**
     * @param {number[]} arr
     * @return {number}
     */
    findLucky(arr) {
        let map = new Map()
        for(let num of arr){
            map.set(num, (map.get(num) || 0) + 1)   
        }
        
        let largest = -1
        for(let [key,value] of map.entries()){
            if(key == value){
                largest = Math.max(largest,key)
            }
        }
        return largest
    }
}
