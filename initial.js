let numberOfFilms;
console.log(numberOfFilms);

function start() {
    numberOfFilms = +prompt("Скільки ви фільмів вже подивилися?", '');
    while (numberOfFilms === '' || numberOfFilms == null || isNaN(numberOfFilms)) {
        numberOfFilms = +prompt("Скільки ви фільмів вже подивилися?", '');
    }
}
function rememberMyFilms(){
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
}

rememberMyFilms();

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    geners: [],
    private: false
};

detectPersonalLevel();

function detectPersonalLevel(){
    if (personalMovieDB.count < 10) {
        console.log('Not enought movies');
    } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
        console.log('You are avarage consumer');
    } else if (personalMovieDB.count >= 30) {
        console.log('You are Star');
    } else {
        console.log('Error');    
    }
}


function showMyDb () {
    if (!personalMovieDB.private) {
        console.log(personalMovieDB);
    } return;
}

function writeYourGenres() {
    for (let i = 0; i < 3; i++) {
        const a = prompt(`Your favorite movie gender ${i+1}?`),
 
        if (a !=null && a !== '') {
            personalMovieDB.geners[i]=a;
            console.log('Done');
        } else {
            console.log('Error');
            i--;
        }
    }
}

