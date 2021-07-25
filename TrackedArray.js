class TrackedArray {
    constructor(arr) {
        this.arr = [...arr];
        this.indices = [];
        this.values = [];
        this.access_type = [];
        this.full_copies = [];
    }

    // zip = (...rows) => [...rows[0]].map((_, c) => rows.map(row => row[c]))

    reset() {
        this.indices = [];
        this.values = [];
        this.access_type = [];
        this.full_copies = [];
    }

    track(key, access_type) {
        this.indices.push(key);
        this.values.push(this.arr[key]);
        this.access_type.push(access_type);
        this.full_copies.push([...this.arr]);
    }

    // getActivity(index = 'null') {
    //     if (index === 'null') {
    //         return this.zip(this.indices, this.access_type)
    //     } else {
    //         return [this.indices[index], this.access_type[index]]
    //     }
    // }

    get(key) {
        this.track(key, 'get');
        return this.arr[key]
    }

    set(key, value) {
        this.track(key, 'set');
        this.arr[key] = value;
    }

    length() {
        return this.arr.length;
    }
}

function insertionSort(arr) {
    let n = arr.length(),
        i = 1,
        j;
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

function init() {
    arr = new TrackedArray(Array.from({ length: 15 }, () => Math.floor(Math.random() * 40)))
    insertionSort(arr)
    console.log(arr)
    console.log(arr.full_copies)
}

init()