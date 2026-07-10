class Solution {
    /**
     * @param {number[][]} grid
     * @return {number[]}
     */
    findMissingAndRepeatedValues(grid) {
        let map = new Map()
        for(let i=0;i<grid.length;i++){
            for(let j=0;j<grid.length;j++){
                let val = grid[i][j]
                map.set(val, (map.get(val) || 0) + 1)
            }
        }
        let twice = 0
        let missing = 0
        let n = grid.length
        for(let i=1;i<=n*n;i++){
            let freq = map.get(i) || 0
            if(freq == 2) twice = i
            if(freq == 0) missing = i
        }
        return [twice,missing]
    }
}
