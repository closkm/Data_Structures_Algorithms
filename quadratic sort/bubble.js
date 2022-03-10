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

/* 
[2,45,21,10,5]
[2,45,21,10,5]
[2,21,45,10,5]
[2,21,10,45,5]
[2,21,10,5,45]
[2,21,10,5,45]
[2,10,21,5,45]
[2,10,5,21,45]break
[2,5,10,21,45]break
*/