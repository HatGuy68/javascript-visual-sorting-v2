function init() {
    speedSlider = document.getElementById("speed");
    sizeSlider = document.getElementById("size");

    arr = generateRandomArray(sizeSlider.value);
    originalArr = [...arr];
    arrCopies = [];

    sizeSlider.oninput = () => run()

    timer = ms => new Promise(res => setTimeout(res, ms))
}

function generateRandomArray(size) {
    // return [8,0,7,12,20,13,11,31,34,2] // for quickSort
    return Array.from({ length: size }, () => Math.floor(Math.random() * 40))
}

/////////////////////////////////////////
///////////// Insertion Sort ////////////
/////////////////////////////////////////

function insertionSort(arr) {
    let n = arr.length,
        i = 1,
        j;
    while (i < n) {
        j = i;
        while ((j > 0) && (arr[j - 1] > arr[j])) {
            tmp = arr[j - 1]
            arr[j - 1] = arr[j];
            arr[j] = tmp;
            arrCopies.push([...arr]);
            j -= 1;
        }
        i += 1
    }
    arrCopies.push([...arr]);
}
/////////////////////////////////////////

/////////////////////////////////////////
/////////////// Quick Sort //////////////
/////////////////////////////////////////

function quickSort(arr, lo, hi) {

    arrCopies.push([...arr]);
    if (lo < hi) {
        p = partition(arr, lo, hi)
        quicksort(arr, lo, p - 1)
        quicksort(arr, p + 1, hi)
    }

}

function partition(arr, lo, hi) {

    pivot = arr[hi]
    i = lo
    for (j = lo; j < hi; j++) {
        if (arr[j] < pivot) {
            tmp = arr[i]
            arr[i] = arr[j];
            arr[j] = tmp;
            i++
        }
    }
    tmp = arr[i]
    arr[i] = arr[hi];
    arr[hi] = tmp;
    return i
}
/////////////////////////////////////////

/////////////////////////////////////////
/////////////// Merge Sort //////////////
/////////////////////////////////////////

function mergeSort(arr) {

    arrCopies.push([...arr]);
    var len = arr.length;

    if (len === 1) { return; }

    var mid = Math.floor(len / 2),
        left = arr.slice(0, mid),
        right = arr.slice(mid);

    mergeSort(left);
    mergeSort(right);
    merge(left, right, arr);
}

function merge(left, right, arr) {
    var a = 0;

    while (left.length && right.length) {
        arr[a++] = (right[0] < left[0]) ? right.shift() : left.shift();
    }
    while (left.length) {
        arr[a++] = left.shift();
    }
    while (right.length) {
        arr[a++] = right.shift();
    }
}
/////////////////////////////////////////

function callRender() {
    render(arrCopies)
}

async function render(arrCopies) {
    document.getElementById("main").innerHTML = originalArr;
    for (i = 0; i < arrCopies.length; i++) {
        document.getElementById("demo").innerHTML = arrCopies[i].join(',');
        await timer(500 / speedSlider.value);
    }
}

function run() {
    init()
    mergeSort(arr, 0, arr.length - 1)
    console.log(arr, arrCopies);
}

run()