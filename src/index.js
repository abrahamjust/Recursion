const { default: merge } = require("webpack-merge");

function fibs(num) {
    let arr = [];

    for(let i = 0; i < num; i++) {
        if(i < 2) {
            arr.push(i);
        } else {
            arr.push(arr[i-1] + arr[i-2]);
        }
    }
    return arr;
}

function fibsRec(num) {
    if(num == 1) {
        return [0];
    }
    if(num == 2) {
        return [0, 1];
    }
    // gets the first numbers [0, 1] first, then does 0+1 = 1. Then that array is returned. Now, arr.length-1 and arr.length-2 for the level above the num-1 = 2, 
    // becomes [0, 1, 0+1] = [0, 1, 1] and this happens till the uppermost level is reached.
    let arr = fibsRec(num-1);
    arr.push(arr[arr.length-1] + arr[arr.length-2]);
    return arr
}


function mergeSort(arr) {
    if (arr.length <= 1) {
        return arr;
    }

    let mid = Math.floor(arr.length / 2);
    let left = mergeSort(arr.slice(0, mid));
    let right = mergeSort(arr.slice(mid));

    let sorted = [];
    let i = 0, j = 0;
    for(i = 0, j = 0; i < left.length && j < right.length; ) {
        if(left[i] < right[j]) {
            sorted.push(left[i]);
            i++;
        } else if(left[i] > right[j]) {
            sorted.push(right[j]);
            j++;
        } else {
            sorted.push(left[i]);
            sorted.push(right[j]);
            i++;
            j++;
        }
    }
    if(i == left.length) {
        while(j < right.length) {
            sorted.push(right[j]);
            j++;
        }
    } else if(j == right.length) {
        while(i < left.length) {
            sorted.push(left[i]);
            i++;
        }
    }
    return sorted;
}

