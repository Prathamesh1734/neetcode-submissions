class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    heightChecker(heights) {
        let count = new Array(101).fill(0)
        for(let height of heights){
            count[height]++
        }
        let expected = []
        for(let h=1;h<=100;h++){
            let c = count[h]
            for(let i=0;i<c;i++){
                expected.push(h)
            }
        }
        let res = 0
        for(let i=0;i<heights.length;i++){
            if(heights[i] != expected[i]){
                res++
            }
        }
        return res
    }
}
