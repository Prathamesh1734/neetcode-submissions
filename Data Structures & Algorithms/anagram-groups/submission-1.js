class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        let map = {};

        for(let s of strs){
            let sortedS = s.split("").sort().join("")
            if(!map[sortedS]){
                map[sortedS] = []
            }
            map[sortedS].push(s)
        }
        return Object.values(map)
    }
}
