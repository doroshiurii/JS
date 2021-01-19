'use strict';

var elements = document.querySelectorAll(".promo__menu-item"),
    elementContainer = document.querySelector(".promo__menu-list");

elementContainer.addEventListener('click', () => {
     elements.forEach( (item) => {
        console.log(item.classList);
        item.classList.remove("promo__menu-item_active");
     });
     
 });



// const actionAs = document.querySelector('.promo__menu-item_active');

// let i = 0;
// let b = 0;

// const deleteElement = (event) => {

//     event.target.innerHTML = `
//     <li><a class="promo__menu-item" href="#">DDDD</a></li>
// `;
// //event.target.remove();
//     i++;
//     if (i == 1) {
//         actionAs.removeEventListener('click', deleteElement);
//         console.log("Removed");
//         console.log(i);
//     }
// };

// actionAs.addEventListener('click', (event) => {
//     event.preventDefault();
//     console.log(event);
// });

// actionAs.addEventListener('mouseenter', () => {
//     console.log("Hover");
// });

// actionAs.addEventListener('click', deleteElement);