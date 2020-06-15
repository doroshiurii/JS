let numberOfFilms = +prompt("Скільки ви фільмів вже подивилися?", 0),
    lastMovie = prompt(`Один з останніх переглянутих фільмів?`),
    movieScore = prompt(`На скільки його оцінете?`);


const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    geners: [],
    private: false
}

personalMovieDB.movies[lastMovie] = movieScore;
