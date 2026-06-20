class Solution {
    /**
     * @param {string[]} details
     * @return {number}
     */
    countSeniors(details) {
        let passengers = 0
        for(let detail of details){
            let age = Number(detail.slice(11,13))
            if(age>60){
                passengers++
            }
        }
        return passengers
    }
}
