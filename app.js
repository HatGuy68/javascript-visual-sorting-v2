function init() {
    speedSlider = document.getElementById("speed");
    sizeSlider = document.getElementById("size");

    arr = Array.from({ length: sizeSlider.value }, () => Math.floor(Math.random() * 40));
    console.log(sizeSlider.value)
    originalArr = [...arr];
    arrCopies = [];

    sizeSlider.oninput = () => run()

    timer = ms => new Promise(res => setTimeout(res, ms))
}

function insertionSort(arr) {
    let n = arr.length,
        i, key, j;
    for (i = 1; i < n; i++) {
        key = arr[i];
        j = i - 1;
        while (j >= 0 && arr[j] > key) {
            arr[j + 1] = arr[j];
            j = j - 1;
            arrCopies.push([...arr]);
        }
        arr[j + 1] = key;
    }
    arrCopies.push([...arr]);
}

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
    console.log(arr, arrCopies);
    insertionSort(arr)
}

run()