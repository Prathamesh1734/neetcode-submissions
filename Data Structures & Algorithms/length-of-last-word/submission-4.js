class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLastWord(s) {
        s = s.trim()
        let split = s.split(" ")
        return split[split.length-1].length
    }
}
