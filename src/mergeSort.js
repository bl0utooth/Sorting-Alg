function merge(arr1, arr2) {
    let mergedArray = [];
    let i = 0;
    let j = 0;

    while (i < arr1.length && j < arr2.length) {
        if (arr1[i] < arr2[j]) {
            mergedArray.push(arr1[i]);
            i++;
        } else {
            mergedArray.push(arr2[j])
            j++;
        }
    }

    while (i < arr1.length) {
        mergedArray.push(arr1[i])
        i++;
    }

    while (j < arr2.length) {
        mergedArray.push(arr2[j])
        j++
    }

    return mergedArray
}

function mergeSort(arr) {
    if (arr.length <= 1) {
        return arr
    }

    const mid = Math.floor(arr.length / 2)
    const left = arr.slice(0, mid)
    const right = arr.slice(mid)

    const sortedLeft = mergeSort(left)
    const sortedRight = mergeSort(right)

    return merge(sortedLeft, sortedRight)
}

const unsortedArray = [38, 27, 43, 3, 9, 82, 10];
console.log("Sorted Array:", mergeSort(unsortedArray));