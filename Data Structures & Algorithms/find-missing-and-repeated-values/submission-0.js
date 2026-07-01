class Solution {
    /**
     * @param {number[][]} grid
     * @return {number[]}
     */
    findMissingAndRepeatedValues(grid) {
        let map = new Map()
        let n = grid.length

        for(let i=0;i<n;i++){
            for(let j=0;j<n;j++){
                let val = grid[i][j]
                map[val] = (map[val] || 0) + 1
            }
        }

        let twice = 0
        let missing = 0

        for(let i=1;i<=n*n;i++){
            let freq = map[i] || 0
            if(freq == 0){
                missing = i
            }
            if(freq == 2){
                twice = i
            }
        }

        return [twice,missing]
    }
}
