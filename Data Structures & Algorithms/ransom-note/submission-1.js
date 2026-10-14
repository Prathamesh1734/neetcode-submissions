class Solution {
    /**
     * @param {string} ransomNote
     * @param {string} magazine
     * @return {boolean}
     */
    canConstruct(ransomNote, magazine) {
        let ransomMap = new Map()
        for(let r of ransomNote){
            ransomMap.set(r,(ransomMap.get(r)||0)+1)
        }
        let magMap = new Map()
        for(let m of magazine){
            magMap.set(m,(magMap.get(m)||0)+1)
        }
        for(let [key,count] of ransomMap){
            if(count > (magMap.get(key)||0)){
                return false
            }
        }
        return true
    }
}
