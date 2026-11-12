class Solution {
    /**
     * @param {string} ransomNote
     * @param {string} magazine
     * @return {boolean}
     */
    canConstruct(ransomNote, magazine) {
        let rMap = new Map()
        for(let r of ransomNote){
            rMap.set(r,(rMap.get(r)||0)+1)
        }
        let mMap = new Map()
        for(let m of magazine){
            mMap.set(m,(mMap.get(m)||0)+1)
        }
        for(let [key,count] of rMap){
            if(count > (mMap.get(key) || 0)){
                return false
            }
        }
        return true
    }
}
