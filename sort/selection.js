//similar to bubble sort, but places small values into position first
// finds minimum, then places it at the start, so on

const selectionSort = arr => {
    for(let i = 0; i<arr.length; i++){
        let min = i
        for(let j = i + 1; j<arr.length; j++){
            if(arr[j] < arr[min]){
                min = j;
            }
        }
        if(i !== min){
            let temp = arr[i];
            arr[i] = arr[min];
            arr[min] = temp;
        }
    }
    return arr
}

//some new destructering syntax
const selectionSort = arr => {
    const swap = (arr, ind1, ind2) => {
        return [arr[ind1], arr[ind2]] = [arr[ind2], arr[ind1]]
    };
    for(let i = 0; i<arr.length; i++){
        let min = i
        for(let j = i + 1; j<arr.length; j++){
            if(arr[j] < arr[min]){
                min = j;
            }
        }
        if(i !== min) swap(arr, i, min)
    }
    return arr
}

//time -> o(n^2)
//potentially better than bubble sort if you need to minimize number of swaps
//you need to make, only make one swap at the end of each loop here
//Not Very Common for this to occur ^^^^^^