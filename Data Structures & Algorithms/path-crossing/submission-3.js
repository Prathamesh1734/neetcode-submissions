class Solution {
    /**
     * @param {string} path
     * @return {boolean}
     */
    isPathCrossing(path) {
        let set = new Set()
        set.add("0,0")
        let x=0,y=0
        for(let p of path){
            switch(p){
                case "N":
                    y++
                    break
                case "E":
                    x++
                    break
                case "W":
                    x--
                    break
                case "S":
                    y--
                    break
            }
            let curr = `${x},${y}`
            if(set.has(curr)){
                return true
            }
            set.add(curr)
        }
        return false
    }
}
