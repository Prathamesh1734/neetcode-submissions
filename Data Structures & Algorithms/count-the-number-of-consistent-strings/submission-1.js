class Solution {
    /**
     * @param {string} allowed
     * @param {string[]} words
     * @return {number}
     */
    countConsistentStrings(allowed, words) {
        let set = new Set(allowed)
        let count = 0
        for(let word of words){
            let isValid = true
            for(let char of word){
                if(!(set.has(char))){
                    isValid = false
                    break
                }
            }
            if(isValid) count++
        }
        return count
    }
}
