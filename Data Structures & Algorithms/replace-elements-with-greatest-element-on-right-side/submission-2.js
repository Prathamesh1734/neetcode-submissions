class Solution {
    /**
     * @param {number[]} arr
     * @return {number[]}
     */
    replaceElements(arr) {
        let rightElement = -1;
        let newArr = new Array(arr.length)
        for(let i=arr.length-1;i>=0;i--){
            newArr[i] = rightElement
            rightElement = Math.max(rightElement,arr[i])
        }
        return newArr
    }
}
