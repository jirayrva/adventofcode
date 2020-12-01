"use strict";

const R = require("ramda");
const input = require("./input");

const findMatch2020 = ([n0, ...nRest]) =>
  R.isEmpty(nRest)
    ? []
    : R.find(R.equals(2020 - n0), nRest) || findMatch2020(nRest);

const logN0N1 = (n) => (console.log(`n0: ${n}, n1: ${2020 - n}`), n);
const multiplyMatch = (n) => console.log(`result is : ${n * (2020 - n)}`);

// >>>> pure functions above this line

const app = R.compose(multiplyMatch, logN0N1, findMatch2020);

// >>>> setup

app(input);
// console.log(findMatch2020(input));
