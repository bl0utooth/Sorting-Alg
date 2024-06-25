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
            j++
        }
    }

    while (i < arr1.length) {
        mergedArray.push(arr1[i]);
        i++
    }

    while (j < arr2.length) {
        mergedArray.push(arr2[j]);
        j++
    }

    return mergedArray
}

const sortedArray1 = [1, 3, 5, 7];
const sortedArray2 = [2, 4, 6, 8];

console.log("Merged Array:", merge(sortedArray1, sortedArray2));