class Solution {
    /**
     * @param {string[]} details
     * @return {number}
     */
    countSeniors(details) {
        let count = 0
        for(let detail of details){
            if(detail.slice(11,13) > 60){
                count++
            }
        }
        return count
    }
}
