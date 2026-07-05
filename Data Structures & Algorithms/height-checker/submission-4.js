class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    heightChecker(heights) {
        let map = new Array(101).fill(0)
        for(let h of heights){
            map[h]++
        }
        let expected = []
        for(let h=1;h<=100;h++){
            let val = map[h] || 0
            for(let i=0;i<val;i++){
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
