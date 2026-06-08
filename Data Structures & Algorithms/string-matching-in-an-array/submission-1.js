class Solution {
    /**
     * @param {string[]} words
     * @return {string[]}
     */
    stringMatching(words) {
        words.sort((a,b)=>a.length - b.length)
        let arr = []

        for(let i=0;i<words.length;i++){
            for(let j=i+1;j<words.length;j++){
                if(words[j].includes(words[i])){
                    arr.push(words[i])
                    break
                }
            }
        }
        return arr
    }
}
