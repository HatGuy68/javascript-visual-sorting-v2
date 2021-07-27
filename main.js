import TrackedArray from "./TrackedArray.js";
import { animate, draw } from "./Visualize.js";
import insertionSort from "./insertionSort.js";

function init() {
    let canvas = document.getElementById('canvas');
    let ctx = canvas.getContext('2d');

    let speedSlider = document.getElementById("speed");
    let sizeSlider = document.getElementById("size");

    let arrContainer = document.getElementById("list");
    let sortButton = document.getElementById("sortButton");

    let arr = new TrackedArray(generateRandomArray(sizeSlider.value));

    sizeSlider.oninput = () => init()
    arrContainer.innerHTML = arr.arr

    insertionSort(arr)

    sortButton.addEventListener('click', () => {
        callRender(arr)
    })

}

function generateRandomArray(size) {
    // return [8,0,7,12,20,13,11,31,34,2] // for quickSort
    return Array.from({ length: size }, () => Math.floor(Math.random() * 40))
}

let callRender = function(arr) {
    animate(arr.full_copies, arr.getActivity())
}

init()