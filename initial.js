let numberOfFilms = +prompt("Скільки ви фільмів вже подивилися?", 0),
    a = prompt(`Один з останніх переглянутих фільмів?`),
    b = prompt(`На скільки його оцінете?`),
    c = prompt(`Один з останніх переглянутих фільмів?`),
    d = prompt(`На скільки його оцінете?`);

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    geners: [],
    private: false
};

personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;
