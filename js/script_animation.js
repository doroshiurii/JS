const btn = document.querySelector(".btn");
let timerIdInterval,
    i = 0;  

function myAnimation() {
    const elem = document.querySelector('.box');
    let pos = 0;

    const id = setInterval(frame, 150);

    function frame() {
        if (pos == 300) {
            clearInterval(id);
        } else {
            pos++;
            elem.style.top = pos + "px";
            elem.style.left = pos + "px";
        }
    }
}

btn.addEventListener('click', myAnimation);

// btn.addEventListener('click', () => {
//     //const timerId = setTimeout(logger, 2000);
//     timerIdInterval = setInterval(logger, 500);
//     console.log(timerIdInterval + "uuu");
// });

// const timerId = setTimeout(function () {
//     console.log('Hello');
// }, 2000);

// function logger () {
//     if (i === 3) {
//         clearInterval(timerIdInterval);
//     }
//     console.log('text');
//     i++;
// }

// const id = setTimeout(function log() {
//     console.log("hi");
//     id = setTimeout(log, 500);
// }, 500);