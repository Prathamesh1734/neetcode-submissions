class Solution {
    /**
     * @param {number[][]} grid
     * @return {number[]}
     */
    findMissingAndRepeatedValues(grid) {
        let n = grid.length
        let map = new Map()

        for(let i=0;i<n;i++){
            for(let j=0;j<n;j++){
                let val = grid[i][j]
                map[val] = (map[val] || 0) + 1
            }
        }

        let missing = 0, twice = 0
        for(let num=1;num<=n*n;num++){
            let freq = map[num] || 0
            if(freq === 0) missing = num
            if(freq === 2) twice = num
        }

        return [twice,missing]
    }
}
