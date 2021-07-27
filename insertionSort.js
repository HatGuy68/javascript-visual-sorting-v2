export default function insertionSort(arr) {
    let n = arr.length(),
        i = 1,
        j, tmp;
    while (i < n) {
        j = i;
        while ((j > 0) && (arr.get(j - 1) > arr.get(j))) {
            tmp = arr.get(j - 1)
            arr.set(j - 1, arr.get(j));
            arr.set(j, tmp);
            j -= 1;
        }
        i += 1
    }
}