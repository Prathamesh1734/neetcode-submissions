class Solution {
    /**
     * @param {string} pattern
     * @param {string} s
     * @return {boolean}
     */
    wordPattern(pattern, s) {
        let words = s.split(" ")
        let char = pattern.split("")
        if(char.length !== words.length) return false
        let charMap = new Map()
        let wordsMap = new Map()
        for(let i=0;i<char.length;i++){
            charMap.set(char[i], words[i])
            wordsMap.set(words[i], char[i])
        }
        for(let i=0;i<char.length;i++){
            if(charMap.has(char[i]) && charMap.get(char[i]) != words[i]){
                return false
            }
            if(wordsMap.has(words[i]) && wordsMap.get(words[i]) != char[i]){
                return false
            }
        }
        return true
    }
}
