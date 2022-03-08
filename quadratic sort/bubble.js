//compares first two items, then next two, ...
//many passes usually needed

//double loop, slowest way
//optimized with noswap variable
const bubbleSort = arr => {
    let noSwaps
    for(let i = arr.length - 1; i > 0; i--){
        noSwaps = true
        for(let j = 0; j < i; j++){
            if(arr[j] > arr[j+1]){
                //SWAP
                let temp = arr[j]
                arr[j] = arr[j+1]
                arr[j+1] = temp
                noSwaps = false
            }
        }
        if(noSwaps) break;
    }
    return arr
}

//time -> o(n^2)
//only 'good' when array is mostly sorted