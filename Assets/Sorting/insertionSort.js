export default function insertionSort(arr) {
    let n = arr.length(),
        i = 1,
        j, tmp;
    while (i < n) {
        j = i;
        while ((j > 0) && (arr.get(j - 1) > arr.get(j))) {
            arr.swap(j - 1, j);
            j -= 1;
        }
        i += 1
    }
}