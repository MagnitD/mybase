"use strict";

const nuberOfFilms = +prompt('Сколько фильмов Вы уже посмотрели?', '');
const PersonalMovieDB = {
cont: nuberOfFilms,
movies: {},
actors: {},
genres: [],
privat: false

};

const a = prompt('Один из последних просмотренных фильмов?', ''),
b = prompt('На сколько оцените его?',  ''),
c = prompt('Один из последних просмотренных фильмов?', ''),
d = prompt('На сколько оцените его?',  '');


PersonalMovieDB.movies[a] = b;
PersonalMovieDB.movies[c] = d;

console.log(PersonalMovieDB);