class Solution {
    /**
     * @param {string} ransomNote
     * @param {string} magazine
     * @return {boolean}
     */
    canConstruct(ransomNote, magazine) {
        let ransomMap = new Map()
        for(let w of ransomNote){
            ransomMap.set(w,(ransomMap.get(w)||0)+1)
        }
        
        let magMap = new Map()
        for(let w of magazine){
            magMap.set(w,(magMap.get(w)||0)+1)
        }
        for(let [key,count] of ransomMap){
            if((magMap.get(key)||0) < count){
                return false
            }
        }
        return true
    }
}
