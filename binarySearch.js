
// Binary Search, array must be sorted
const binarySearch = (array, num) => {
    let start = 0
    let end = array.length - 1
    let middle = Math.floor((start + end)/2)
    while(arr[middle] !== num && start <= end){
        if(arr[middle] < num){
            start = middle + 1 //add or subtract one because it is redunant to search same middle value that is not the target number
        }else{
            end = middle - 1
        }
        middle = Math.floor((start + end)/2)
    }
    if(arr[middle] === num) return middle
    return -1
}


// Binary Search condensed
const binarySearch = (array, num) => {
    let start = 0
    let end = array.length - 1
    let middle = Math.floor((start + end)/2)
    while(arr[middle] !== num && start <= end){
        if(arr[middle] < num)start = middle + 1 
            else end = middle - 1
            middle = Math.floor((start + end)/2)
    }
    return arr[middle] === num ? middle : -1;
}

//Time and Space Complexity:
//Time: O(log n) Space: O(1)