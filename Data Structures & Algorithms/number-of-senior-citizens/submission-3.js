class Solution {
    /**
     * @param {string[]} details
     * @return {number}
     */
    countSeniors(details) {
       let count = 0
       for(let person of details){
        let age = person.slice(11,13)
        if(age > 60){
            count++
        }
       }
       return count
    }
}
