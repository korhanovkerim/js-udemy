"use strict";

let numberOfFilms = +prompt("Сколько фильмы вы уже смотрели?",'');



const personalMoviaDb = {
    count: numberOfFilms,
    movies:{
    } ,
    actors: {},
    genres: [],
    privat: false
};

let lastMovie = prompt("один из последний фильм?", ''),
     movieStar = prompt("На сколько оцените его?", ''),
    lastMovieTwo = prompt("один из последний фильм?", ''),
    movieStarTwo = prompt("На сколько оцените его?", '');

    personalMoviaDb.movies[lastMovie] = movieStar;
    personalMoviaDb.movies[lastMovieTwo] = movieStarTwo;
console.log(personalMoviaDb);
