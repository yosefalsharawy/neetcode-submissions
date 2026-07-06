class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    sortArray(nums) { mergeSort(nums,0,nums.length-1);
    return nums;}
}

function mergeSort(array,left,right){
    if(left>=right) return;

    const midIndex = Math.floor((left + right) / 2);
    mergeSort(array, left, midIndex);
    mergeSort(array, midIndex + 1, right);
    merge(array, left, midIndex, right);
}

function merge(array,left,mid,right){
    const leftPart = array.slice(left, mid + 1);
    const rightPart = array.slice(mid + 1, right + 1);

    let pointerL = 0;
    let pointerR = 0;
    let index = left;
    while(pointerL<leftPart.length && pointerR<rightPart.length){
        if(leftPart[pointerL] <= rightPart[pointerR]){
            array[index] = leftPart[pointerL];
            index++;
            pointerL++;
        }else{
            array[index] = rightPart[pointerR];
            index++;
            pointerR++;
        }
    }

    while(pointerL<leftPart.length){
            array[index] = leftPart[pointerL];
            index++;
            pointerL++;
    }
    while(pointerR<rightPart.length){
            array[index] = rightPart[pointerR];
            index++;
            pointerR++;
    }
}
