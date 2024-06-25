function bubbleSort(arr) {
    for(let i = 0; i < arr.length; i++) {
        for(let j = 0; j < arr.length; j++) {
            if(arr[i] > arr[i+1]){
                let temp = arr[i];
                arr[i] = arr[i+1]
                arr[i+1] = temp;
            }
            console.log(arr)
        }
    }
}

function secondBubbleSort(arr){
    let count = 0;
    for(let i = 0; i < arr.length; i++){
        for(let j = 0; j < arr.length-i; j++){
            count++
            if(arr[j] > arr[j+1]){
                let temp = arr[j];
                arr[j] = arr[j+1]
                arr[j+1] = temp
            }
        }
    }
    console.log("TOTAL COUNT:", count)
    return arr
}

const arr = [5, 3, 8, 4, 2];
console.log("Sorted Array:", secondBubbleSort(arr));