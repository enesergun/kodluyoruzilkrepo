const insertionSort = (arr) => {
    for (let i = 1; i < arr.length; i++) {
        let key = arr[i];
        let j = i -1;
        while( j >= 0 && arr[j] > key) {
            arr[j+1] = arr[j];
            j--;
        }
        arr[j+1] = key;
        console.log(arr);
    }
    return arr;
}


console.log(insertionSort([22,27,16,2,18,6]));

// O(n) = 36
// 18 sayısı average case kapsamına girer.