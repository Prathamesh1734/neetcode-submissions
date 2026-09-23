class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    heightChecker(heights) {
        let copy = [...heights].sort((a,b)=>a-b)
        let counter = 0
        for(let i=0;i<heights.length;i++){
            if(copy[i] != heights[i]) counter++
        }
        return counter
    }
}
