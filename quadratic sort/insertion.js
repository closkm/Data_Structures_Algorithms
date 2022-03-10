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
/*
[2,30,21,15,17]currentval > arr[j] fails 2nd loop
[2,30,30,15,17]moves arr[j] up one
[2,21,30,15,17]2nd loop fails to run again comparing cv of 21 to arr[j]-> 2, j is currently 0 so index 1 is replaced with cv which is 21
[2,21,30,15,17]
[2,21,30,30,17]
[2,21,21,30,17]
[2,15,21,30,17]
...
*/