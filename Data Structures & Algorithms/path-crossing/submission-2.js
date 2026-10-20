class Solution {
    /**
     * @param {string} path
     * @return {boolean}
     */
    isPathCrossing(path) {
        let x = 0,y = 0
        let set = new Set()
        set.add("0,0")
        for(let p of path){
            switch (p) {
                case "N":
                    y++;
                    break;
                case "E":
                    x++;
                    break;
                case "W":
                    x--;
                    break;
                case "S":
                    y--;
                    break;
            }
            let currPos = `${x},${y}`
            if(set.has(currPos)){
                return true
            }
            set.add(currPos)
        }
        return false
    }
}
