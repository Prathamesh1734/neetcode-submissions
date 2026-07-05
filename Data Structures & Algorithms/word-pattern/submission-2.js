class Solution {
    /**
     * @param {string} pattern
     * @param {string} s
     * @return {boolean}
     */
    wordPattern(pattern, s) {
        let cToW = new Map()
        let wToC = new Map()
        let words = s.split(" ")

        if(pattern.length != words.length) return false
        for(let i=0;i<words.length;i++){
            let c = pattern[i]
            let w = words[i]
            if(cToW.has(c) && cToW.get(c) != w) return false
            if(wToC.has(w) && wToC.get(w) != c) return false
            cToW.set(c,w)
            wToC.set(w,c)
        }
        return true
    }
}
