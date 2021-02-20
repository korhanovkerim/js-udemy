"use strict";

let numberOfFilms;

function start(){
    numberOfFilms = +prompt("Сколько фильмы вы уже смотрели?",'');   

    while(numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)){
        numberOfFilms = +prompt("Сколько фильмы вы уже смотрели?",'');    
    }
}

// start();


const personalMoviaDb = {
    count: numberOfFilms,
    movies:{
    } ,
    actors: {},
    genres: [],
    privat: false
};



function rememberMyFilms(){
    for(let i=0; i < 2; i++){
        let a = prompt("один из последний фильм?", ''),
            b = prompt("На сколько оцените его?", '');
        if(a != null && b != null && a != "" && b != "" && a.length < 50){
            personalMoviaDb.movies[a] = b;
        }else{
            i--;
        }
            
    }
}
// rememberMyFilms();

function detectPersonalLevel(){
    if(personalMoviaDb.count < 10){
        console.log("Просмотрена давно мало кино");
    } else if(personalMoviaDb.count >10 && personalMoviaDb.count < 30){
        console.log("He is classical cinoman");
    } else{
        console.log("He is cinoman");
    }
}

// detectPersonalLevel();

function showMyDB(){
    if(!personalMoviaDb.privat){
        console.log(personalMoviaDb);
    }
}

showMyDB();

function writeYourGenres(){
    for(let i = 1; i < 4; i++){
        personalMoviaDb.genres[i] = prompt(`Ваш любимый жанр под номером ${i}`);
    }
}
writeYourGenres();
