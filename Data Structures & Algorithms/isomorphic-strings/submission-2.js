class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isIsomorphic(s, t) {
        let sMap = new Map()
        let tMap = new Map()    

        for(let i=0;i<s.length;i++){
            let c = s[i], e=t[i]
            if((sMap.has(c) && sMap.get(c) !== e) || 
               (tMap.has(e) && tMap.get(e) !== c)){
                return false
            }
            sMap.set(c,e)
            tMap.set(e,c)
        }
        return true
    }
}
