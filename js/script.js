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



    for(let i=0; i < 2; i++){
        let a = prompt("один из последний фильм?", ''),
            b = prompt("На сколько оцените его?", '');
        if(a != null && b != null && a != "" && b != "" && a.length < 50){
            personalMoviaDb.movies[a] = b;
        }else{
            i--;
        }
            
    }
if(personalMoviaDb.count < 10){
    console.log("Просмотрена давно мало кино");
} else if(personalMoviaDb.count >10 && personalMoviaDb.count < 30){
    console.log("He is classical cinoman");
} else{
    console.log("He is cinoman");
}

console.log(personalMoviaDb);
