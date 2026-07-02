class Solution {
    /**
     * @param {string} text
     * @return {number}
     */
    maxNumberOfBalloons(text) {
        let word = "balloon"
        let map = {}
        let countText = new Map()
        for(let w of word){
            map[w] = (map[w] || 0) + 1 
        }
        for(let char of text){
            //creating map using built in method
            let currentCount = countText.get(char) || 0
            countText.set(char,currentCount + 1)
        }

        let res = text.length
        for(let w of word){
            res = Math.min(res, Math.floor((countText.get(w) || 0) / map[w]))
        }
        return res
    }
}
