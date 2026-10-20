class Solution {
    /**
     * @param {string} path
     * @return {boolean}
     */
    isPathCrossing(path) {
        let x = 0, y = 0
        let set = new Set()
        set.add("0,0")
        for(let p of path){
            if(p === "N"){
                y++
            }else if(p === "E"){
                x++
            }else if(p === "W"){
                x--
            }else if(p === "S"){
                y--
            }
            let currentPos = `${x},${y}`
            if(set.has(currentPos)){
                return true
            }
            set.add(currentPos)
        }
        return false
    }
}
