function secondBubbleSort(arr){
    let count = 0;
    for(let i = 0; i < arr.length; i++){
        for(let j = 0; j < arr.length-i-1; j++){ // Corrected inner loop condition
            count++;
            if(arr[j] > arr[j+1]){
                let temp = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = temp;
            }
        }
    }
    console.log("TOTAL COUNT:", count);
    return arr;
}

// Example call to the function
const arr = [5, 3, 8, 4, 2];
console.log("Sorted Array:", secondBubbleSort(arr));

