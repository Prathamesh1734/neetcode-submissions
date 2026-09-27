class Solution {
    /**
     * @param {number[]} flowerbed
     * @param {number} n
     * @return {boolean}
     */
    canPlaceFlowers(flowerbed, n) {
        for(let i=0;i<flowerbed.length;i++){
            let emptyLeft = i === 0 || flowerbed[i - 1] === 0
            let emptyRight = i === flowerbed.length - 1 || flowerbed[i + 1] === 0

            if(flowerbed[i] == 0 && emptyLeft && emptyRight){
                n--
                flowerbed[i] = 1
            }

            if(n <= 0) return true
        }
        return false
    }
}
