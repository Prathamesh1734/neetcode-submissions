class Solution {
    /**
     * @param {number[]} arr
     * @return {number[]}
     */
    replaceElements(arr) {
        let newArr = new Array(arr.length);
        let rightElement = -1;
        for(let i=arr.length-1;i>=0;i--){
            newArr[i] = rightElement;
            rightElement = Math.max(rightElement,arr[i])
        }
        return newArr
    }
}
