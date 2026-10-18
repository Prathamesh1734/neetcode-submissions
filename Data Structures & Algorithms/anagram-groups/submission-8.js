class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        let map = new Map()
        for(let str of strs){
            let sorted = str.split('').sort().join('')
            map.set(sorted,map.get(sorted) || [])
            map.get(sorted).push(str)
        }
        return Array.from(map.values())
    }
}
