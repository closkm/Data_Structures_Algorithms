//keeps splitting array in half until smaller arrays are only 1 item long
//then merge them together while sorting

//both arrays must be sorted the same way for this to work
//MERGING ARRAYS
const merge = (arr1, arr2) => {
    let results = [];
    let i = 0;
    let j = 0;

    while(i < arr1.length && j < arr2.length){
        if(arr2[j] > arr1[i]){
            results.push(arr1[i]);
            i++
        } else {
            results.push(arr2[j])
            j++
        }
    }
    //both of these bottom while loops grab leftover of the array that still has more #'s
    while(i < arr1.length){
        results.push(arr1[i])
            i++
    }
    while(j < arr2.length){
        results.push(arr2[j])
            j++
    }
    return results;
}

const mergeSort = arr => {
    if(arr.length <= 1) return arr;
    let mid = Math.floor(arr.length/2);
    let left = margerSort(arr.slice(0, mid));
    let right = mergeSort(arr.slice(mid));
    return merge(left, right)
}

//Time -> o(n log n) space -> o(n)