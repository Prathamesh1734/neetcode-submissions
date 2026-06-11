class Solution {
    /**
     * @param {number[]} flowerbed
     * @param {number} n
     * @return {boolean}
     */
    canPlaceFlowers(flowerbed, n) {
        let f = [0,...flowerbed,0]

        for(let i=1;i<f.length;i++){
            if(f[i-1] == 0 && f[i] == 0 && f[i+1] == 0){
                f[i] = 1
                n--
            }
        }
        return n<=0
    }
}
