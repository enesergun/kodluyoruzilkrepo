function mergeSort(arr) {
    const half =  arr.length / 2;

    if (arr.length < 2) {
        return arr
    };

    const left = arr.splice(0, half);
    return merge(mergeSort(left), mergeSort(arr));
}


function merge(left, right) {
    console.log(left, "left");
    console.log(right, "right");
    let array = [];

    while (left.length && right.length) {
        if (left[0] < right[0]) {
            array.push(left.shift());
        } else {
            array.push(right.shift());
        }

    }
    return [...array, ...left, ...right];
}



console.log(mergeSort([16,21,11,8,12,22]));