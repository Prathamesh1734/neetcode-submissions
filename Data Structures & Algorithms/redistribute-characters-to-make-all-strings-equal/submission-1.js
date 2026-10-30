class Solution {
    /**
     * @param {string[]} words
     * @return {boolean}
     */
    makeEqual(words) {
        let map = new Map()
        for(let w of words){
            for(let e of w){
                map.set(e,(map.get(e)||0)+1)
            }
        }
        for(let [key,count] of map){
            if(count % words.length !== 0){
                return false
            }
        }
        return true
    }
}
