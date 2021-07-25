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