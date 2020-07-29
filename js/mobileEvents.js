'use strict';

// touchstart
// touchmove
// touchend
// touchcancel
// touchenter
// touchleave

document.addEventListener('DOMContentLoaded', () => {

const box = document.querySelector(".box");
console.log(box);

box.addEventListener("touchstart", (event) => {
    event.preventDefault();
    console.log("start");
    console.log(event.touches);
});

box.addEventListener("touchmove", (event) => {
    event.preventDefault();
    console.log(event.targetTouches[0].clientX);
});

box.addEventListener("touchend", (event) => {
    event.preventDefault();
    console.log("End");
});


});

// touches
// targetTouches
// chengedTouches