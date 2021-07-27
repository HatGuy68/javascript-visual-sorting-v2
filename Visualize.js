function draw(n, activity) {
    let canvas = document.getElementById('canvas');
    let ctx = canvas.getContext('2d');
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    var barWidth = 10;
    var X = 30;

    for (var i = 0; i < n.length; i++) {
        ctx.fillStyle = '#008000';
        if (i === activity[0]) {
            if (activity[1] === 'set') {
                ctx.fillStyle = '#3e4574';
            } else if (activity[1] === 'get') {
                ctx.fillStyle = '#00a9ff';
            } else if (activity[1] === 'end') {
                ctx.fillStyle = '#008000';
            }
        }
        var h = n[i];
        ctx.fillRect(X, canvas.height - h - 10, barWidth, h);

        X += 15;
    }
}

async function animate(copies, activities) {

    let timer = ms => new Promise(res => setTimeout(res, ms))

    let i;
    console.log(copies)

    for (i = 0; i < copies.length; i++) {
        draw(copies[i], activities[i]);
        await timer(100);
    }
    draw(copies[i - 1], 'end')
}

function reset() {
    let canvas = document.getElementById('canvas');
    let ctx = canvas.getContext('2d');
    ctx.clearRect(0, 0, canvas.width, canvas.height);
}

export { animate, reset }

/* 

function init() {
    canvas = document.getElementById('canvas');
    ctx = canvas.getContext('2d');
    full_copies = [
        [19, 28, 37, 26, 18],
        [19, 28, 37, 26, 18],
        [19, 28, 37, 26, 18],
        [19, 28, 37, 26, 18],
        [19, 28, 37, 26, 18],
        [19, 28, 37, 26, 18],
        [19, 28, 37, 26, 18],
        [19, 28, 37, 26, 18],
        [19, 28, 37, 26, 18],
        [19, 28, 26, 26, 18],
        [19, 28, 26, 37, 18],
        [19, 28, 26, 37, 18],
        [19, 28, 26, 37, 18],
        [19, 28, 26, 37, 18],
        [19, 28, 26, 37, 18],
        [19, 26, 26, 37, 18],
        [19, 26, 28, 37, 18],
        [19, 26, 28, 37, 18],
        [19, 26, 28, 37, 18],
        [19, 26, 28, 37, 18],
        [19, 26, 28, 37, 18],
        [19, 26, 28, 37, 18],
        [19, 26, 28, 37, 18],
        [19, 26, 28, 18, 18],
        [19, 26, 28, 18, 37],
        [19, 26, 28, 18, 37],
        [19, 26, 28, 18, 37],
        [19, 26, 28, 18, 37],
        [19, 26, 28, 18, 37],
        [19, 26, 18, 18, 37],
        [19, 26, 18, 28, 37],
        [19, 26, 18, 28, 37],
        [19, 26, 18, 28, 37],
        [19, 26, 18, 28, 37],
        [19, 26, 18, 28, 37],
        [19, 18, 18, 28, 37],
        [19, 18, 26, 28, 37],
        [19, 18, 26, 28, 37],
        [19, 18, 26, 28, 37],
        [19, 18, 26, 28, 37],
        [19, 18, 26, 28, 37],
        [18, 18, 26, 28, 37]
    ]

    activities = [
        [0, "get"],
        [1, "get"],
        [1, "get"],
        [2, "get"],
        [2, "get"],
        [3, "get"],
        [2, "get"],
        [3, "get"],
        [2, "set"],
        [3, "set"],
        [1, "get"],
        [2, "get"],
        [1, "get"],
        [2, "get"],
        [1, "set"],
        [2, "set"],
        [0, "get"],
        [1, "get"],
        [3, "get"],
        [4, "get"],
        [3, "get"],
        [4, "get"],
        [3, "set"],
        [4, "set"],
        [2, "get"],
        [3, "get"],
        [2, "get"],
        [3, "get"],
        [2, "set"],
        [3, "set"],
        [1, "get"],
        [2, "get"],
        [1, "get"],
        [2, "get"],
        [1, "set"],
        [2, "set"],
        [0, "get"],
        [1, "get"],
        [0, "get"],
        [1, "get"],
        [0, "set"],
        [1, "set"]
    ]
    animate(full_copies)
}

arr = [
    18, 19, 26, 28, 37
]



init()

*/