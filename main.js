import TrackedArray from "./Assets/Visual/TrackedArray.js";
import { animate, reset } from "./Assets/Visual/Visualize.js";
import insertionSort from "./Assets/Sorting/insertionSort.js";
import bubbleSort from "./Assets/Sorting/bubbleSort.js";

function init() {

    let speedSlider = document.getElementById("speed");
    window.sizeSlider = document.getElementById("size");


    let arrContainer = document.getElementById("list");
    let sortButton = document.getElementById("sortButton");

    window.arr = new TrackedArray(generateRandomArray(sizeSlider.value));

    reset();

    sizeSlider.oninput = () => init();
    arrContainer.innerHTML = arr.arr;

    if (sorter == 'insertion') {
        insertionSort(arr);
    } else if (sorter == 'bubble') {
        bubbleSort(arr);
    }

}

function generateRandomArray(size) {
    // return [8,0,7,12,20,13,11,31,34,2] // for quickSort
    return Array.from({ length: size }, () => Math.floor(Math.random() * 40));
}

window.callRender = function(arr) {
    console.log(arr);
    animate(arr.full_copies, arr.getActivity());
}

window.setSorter = function(str) {
    window.sorter = str;
    init();
}

window.sorter = 'insertion';
init()