class Solution {
    /**
     * @param {string[]} words
     * @param {string} chars
     * @return {number}
     */
    countCharacters(words, chars) {
        let map = new Map()
        let totalScore = 0
        for(let char of chars){
            map.set(char,(map.get(char) || 0)+1)
        }
        for(let word of words){
            let wordMap = new Map()
            let isValid = true
            for(let char of word){
                wordMap.set(char, (wordMap.get(char) || 0) + 1)
            }
            for(let [key,count] of wordMap){
                if(count > (map.get(key) || 0)){
                    isValid = false
                    break
                }
            }
            if(isValid){
                totalScore += word.length
            }
        }
        return totalScore
    }
}
