let canvas = document.getElementById("canvas");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
let ctx = canvas.getContext("2d")
let arr = []

function shuffle() {
    for(let i = 0; i < 1600; i++) {
        arr.push(Math.random() * 800)
    }
}
shuffle()

function paintArray() {
    clear()
    arr.forEach((val, i) => {

        ctx.fillStyle = "#FFFFFF";
        ctx.fillRect(1+(i*1), 0, 1, val)
    })
}
paintArray()

function sort() {
    for(let i = 0; i < arr.length - 1; i++) {
        setTimeout(() => {
            for(let j = 0; j < arr.length - 1; j++) {
                let left = arr[j];
                let right = arr[j+1];

                if(left > right) {
                    arr[j+1] = left;
                    arr[j] = right;
                }
            }
            paintArray()
        }, 1000)
    }
}

sort()

paintArray()

function clear() {
    canvas.width = canvas.width
}