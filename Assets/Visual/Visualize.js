function draw(n, activity) {
    let canvas = document.getElementById('canvas');
    let ctx = canvas.getContext('2d');
    let WIDTH = canvas.width = Math.min(screen.width / 1.2, 640);
    let HEIGHT = canvas.height = 360;
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    var barWidth = Math.min(30, WIDTH / 15);
    var offset = (WIDTH - (barWidth * (Math.floor(sizeSlider.value) + 2))) / 2;
    console.log(WIDTH, (sizeSlider.value + 1));

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
        ctx.fillRect(offset, canvas.height - h - 10, barWidth, h);

        offset += barWidth + 5;
    }
}

async function animate(copies, activities) {

    let timer = ms => new Promise(res => setTimeout(res, ms))

    let i;

    for (i = 0; i < copies.length; i++) {
        draw(copies[i], activities[i]);
        await timer(100);
    }
    draw(copies[i - 1], 'end')
}

function reset() {
    let canvas = document.getElementById('canvas');
    let ctx = canvas.getContext('2d');
    let WIDTH = canvas.width = Math.min(screen.width / 1.2, 640);
    let HEIGHT = canvas.height = 360;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
}

export { animate, reset }