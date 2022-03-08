//builds up the sort by gradually creating a larger left portion
//which is always sorted

const insertionSort = arr => {
    for(let i = 1; i < arr.length; i++){
        let currentVal = arr[i]
        for(let j = i - 1; j >= 0 && arr[j] > currentVal; j--){
            arr[j+1] = arr[j]
        }
        arr[j+1] = currentVal
    }
    return arr;
}

//time -> o(n^2) space -> o(1)