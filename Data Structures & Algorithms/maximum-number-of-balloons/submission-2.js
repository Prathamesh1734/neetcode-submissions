class Solution {
    /**
     * @param {string} text
     * @return {number}
     */
    maxNumberOfBalloons(text) {
        let word = "balloon"
        let wordMap = new Map()
        let textMap = new Map()
        for(let i=0;i<word.length;i++){
            wordMap.set(word[i], (wordMap.get(word[i]) || 0) + 1)
        }
        for(let i=0;i<text.length;i++){
            textMap.set(text[i], (textMap.get(text[i]) || 0) + 1)
        }
        let maxInstance = text.length
        for(let w of word){
            maxInstance = Math.min(maxInstance, Math.floor((textMap.get(w) || 0) / wordMap.get(w)))
        }
        return maxInstance
    }
}
