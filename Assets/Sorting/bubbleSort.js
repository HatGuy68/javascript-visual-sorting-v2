export default function bubbleSort(arr) {
    let n = arr.length(),
        i = 0,
        j, tmp;
    for (i; i < n; i++) {
        let swapped = false;
        for (j = 0; j < n - i - 1; j++) {
            if (arr.get(j) > arr.get(j + 1)) {
                arr.swap(j, j + 1);
                swapped = true;
            }
        }
        if (swapped == false) {
            break;
        }
    }
}


//     for i in range(n):
//         swapped = False

//         # Last i elements are already
//         #  in place
//         for j in range(0, n-i-1):

//             # traverse the array from 0 to
//             # n-i-1. Swap if the element 
//             # found is greater than the
//             # next element
//             if arr[j] > arr[j+1] :
//                 arr[j], arr[j+1] = arr[j+1], arr[j]
//                 swapped = True

//         # IF no two elements were swapped
//         # by inner loop, then break
//         if swapped == False:
//             break