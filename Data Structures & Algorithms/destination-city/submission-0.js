class Solution {
    /**
     * @param {string[]} words
     * @return {string}
     */
    destCity(paths) {
        let set = new Set()
        for(let i=0;i<paths.length;i++){
            set.add(paths[i][0])
        }
        for(let p of paths){
            let dest = p[1]
            if(!set.has(dest)){
                return dest
            }
        }
        return paths[0][1]
    }
}
