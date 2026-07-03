class Solution {
    /**
     * @param {number[]} flowerbed
     * @param {number} n
     * @return {boolean}
     */
    canPlaceFlowers(flowerbed, n) {
        let res = [0,...flowerbed,0]
        for(let i=1;i<res.length-1;i++){
            if(res[i-1] === 0 && res[i] === 0 && res[i+1] === 0){
                res[i] = 1
                n--
            }
        }
        return n <= 0
        
    }
}
