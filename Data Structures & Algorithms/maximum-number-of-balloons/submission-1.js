class Solution {
    /**
     * @param {string} text
     * @return {number}
     */
    maxNumberOfBalloons(text) {
        let map = new Map()
        for(let t of text){
            map.set(t,(map.get(t) || 0) + 1)
        }
        let word = "balloon"
        let bMap = new Map()
        for(let w of word){
            bMap.set(w,(bMap.get(w) || 0) + 1)
        }

        let res = text.length
        for(let w of word){
            res = Math.min(res, Math.floor((map.get(w) || 0) / (bMap.get(w))))
        }
        return res
    }
}
