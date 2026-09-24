class Solution {
    /**
     * @param {string} pattern
     * @param {string} s
     * @return {boolean}
     */
    wordPattern(pattern, s) {
        let words = s.split(" ")
        if(pattern.length !== words.length) return false
        let charMap = new Map()
        let wordsMap = new Map()
        for(let i=0;i<pattern.length;i++){
            if(charMap.has(pattern[i]) && charMap.get(pattern[i]) != words[i]) return false
            if(wordsMap.has(words[i]) && wordsMap.get(words[i]) != pattern[i]) return false
            charMap.set(pattern[i],words[i])
            wordsMap.set(words[i],pattern[i])
        }
        return true
    }
}
