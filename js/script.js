"use strict";

const personalMoviaDb = {
    count: 0,
    movies:{ 
    } ,
    actors: {},
    genres: [],
    privat: false,
    start: function(){
    personalMoviaDb.count = +prompt("Сколько фильмы вы уже смотрели?",'');   
    while(personalMoviaDb.count == '' || personalMoviaDb.count == null || isNaN(personalMoviaDb.count)){
        personalMoviaDb.count = +prompt("Сколько фильмы вы уже смотрели?",'');    
    }
    },
    rememberMyFilms: function(){
        for(let i=0; i < 2; i++){
            let a = prompt("один из последний фильм?", ''),
                b = prompt("На сколько оцените его?", '');
            if(a != null && b != null && a != "" && b != "" && a.length < 50){
                personalMoviaDb.movies[a] = b;
            }else{
                i--;
            }
                
        }
    },
    detectPersonalLevel: function(){
        if(personalMoviaDb.count < 10){
            console.log("Просмотрена давно мало кино");
        } else if(personalMoviaDb.count >10 && personalMoviaDb.count < 30){
            console.log("He is classical cinoman");
        } else{
            console.log("He is cinoman");
        }
    },
    showMyDB: function(){
        if(!personalMoviaDb.privat){
            console.log(personalMoviaDb);
        }
    },
    toggleVisibleMyDb: function(){
        if(personalMoviaDb) {
            personalMoviaDb.privat = false;
        } else{
            personalMoviaDb.privat = true;
        }
    },
    writeYourGenres: function(){
        for(let i = 1; i < 4; i++){
            let genreList;
            genreList = prompt(`Ваш любимый жанр под номером ${i}`);
            if(genreList != null && genreList != ""){
                personalMoviaDb.genres[i] = genreList;
            } else{
                i--;
            }
        }
        personalMoviaDb.genres.forEach(function(item) {
            console.log(item);
        });
    }
};