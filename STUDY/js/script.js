'use strict';

document.addEventListener("DOMContentLoaded", () => {

const   adv = document.querySelectorAll('.promo__adv > *'),
        descr = document.querySelector(".promo__genre").textContent = "Drama",
        background = document.querySelector("div.promo__bg").style.cssText = "background: url('../img/bg.jpg'); ",
        movieList = document.querySelector('.promo__interactive-list'),
        addForm = document.querySelector('form.add'),
        addInput = addForm.querySelector(".adding__input"),
        checkbox = addForm.querySelector('[type="checkbox"]');

const movieDB = {
    movies: [
        "Logan",
        "JUSTICE LEAGUE",
        "La-la Land",
        "Shazam",
        "Scott Pilgrim vs. the World"
    ],
    moviesSort: () => {
        movieDB.movies.sort();
    }
};

const deleteAdv = (arr) => {
    arr.forEach(item => item.remove());
};

const intItem = document.querySelectorAll(".promo__interactive-list > *").forEach((int, i) => {
    int.textContent = `${i+1}: ${movieDB.movies[i]}`;
});

addForm.addEventListener('submit', (event) => {
    event.preventDefault();

    let newFilm = addInput.value,
        favorite = checkbox.checked;

    if(newFilm) {
        if (newFilm.length > 21){
            newFilm = `${newFilm.substring(0, 22)}...`;
        }

        if (favorite) {
            console.log("Додано до улюблених");
        }

        movieDB.movies.push(newFilm);
        movieDB.moviesSort();
        createMovieLIst(movieDB.movies, movieList);
    }
    event.target.reset();
}
);

function createMovieLIst(films, parent) {
    parent.innerHTML = "";
    movieDB.movies.sort();
    films.forEach((film, i) => {
        parent.innerHTML += `
            <li class="promo__interactive-item">${i + 1} ${film}
                <div class="delete"></div>
            </li>
        `;
    });
    document.querySelectorAll('.delete').forEach((btn, i) => {
        btn.addEventListener('click', () => {
            btn.parentElement.remove();
            movieDB.movies.splice(i, 1);
            createMovieLIst(movieDB.movies, movieList);
        });
    });
}

createMovieLIst(movieDB.movies, movieList);
movieDB.moviesSort();
deleteAdv(adv);

});