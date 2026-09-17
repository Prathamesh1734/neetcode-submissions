class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLastWord(s) {
        let i = s.length - 1
        let length = 0
        while(s[i] == " "){
            i--
        }
        while(s[i] != " " && i >= 0){
            length++
            i--
        }
        return length
    }
}
