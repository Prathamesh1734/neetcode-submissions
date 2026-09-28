class Solution {
    /**
     * @param {number[]} flowerbed
     * @param {number} n
     * @return {boolean}
     */
    canPlaceFlowers(flowerbed, n) {
        for(let i=0;i<flowerbed.length;i++){
            let leftEmpty = i === 0 || flowerbed[i-1] === 0
            let rightEmpty = i === flowerbed.length - 1|| flowerbed[i+1] === 0
            if(flowerbed[i] == 0 && leftEmpty && rightEmpty){
                n--
                flowerbed[i] = 1
            }
            if(n<=0) return true
        }
        return false
    }
}
