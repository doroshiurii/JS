'use strict';

const personalMovieDB = {
    count: 0,
    movies: {},
    actors: {},
    geners: [],
    private: false,
    detectPersonalLevel: function(){
        if (personalMovieDB.count < 10) {
            console.log('Not enought movies');
        } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
            console.log('You are avarage consumer');
        } else if (personalMovieDB.count >= 30) {
            console.log('You are Star');
        } else {
            console.log('Error');    
        }
    },
    showMyDb: () => {
        if (!personalMovieDB.private) {
            console.log(personalMovieDB);
        } return;
    },
    writeYourGenres: () => {
        for (let i = 0; i < 3; i++) {
            const a = prompt(`Your favorite movie gender ${i+1}?`);
     
            if (a !== null || a !== '') {
                personalMovieDB.geners[i]=a;
                console.log('Done');
            } else {
                console.log('Error');
                i--;
            }
        }
        personalMovieDB.geners.forEach((item, i) => {
            console.log(`Улюблений жанр #${i+1} - це ${item}`);
        });
    },
    start: () => {
        personalMovieDB.count = +prompt("Скільки ви фільмів вже подивилися?", '');
        while (personalMovieDB.count === '' || personalMovieDB.count == null || isNaN(personalMovieDB.count)) {
            personalMovieDB.count = +prompt("Скільки ви фільмів вже подивилися?", '');
        }
    },
    rememberMyFilms: () => {
        for (let i = 0; i < 2; i++) {
            const a = prompt(`Один з останніх переглянутих фільмів?`),
            b = prompt(`На скільки його оцінете?`);
        
            if (a !=null && b !=null && a !== '' && b !== '' && a.length < 50) {
                personalMovieDB.movies[a]=b;
                console.log('Done');
            } else {
                console.log('Error');
                i--;
            }
        }
    },
    toggleVisibleVyDB: () => {
       if (personalMovieDB.private){
        personalMovieDB.private = false;
       } else {
           personalMovieDB.private = true;
       }
    }
};