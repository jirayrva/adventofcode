"use strict";

const R = require("ramda");
const input = require("./input");
const { findMatch, log } = require("./functions");

const findMatch2020 = findMatch(2020);

const logN0N1 = ([n0, n1]) => (log(`n0: ${n0}, n1: ${n1}`), [n0, n1]);

const multiplyN0N1 = ([n0, n1]) => R.multiply(n0, n1);

// >>>> pure functions above this line

const app = R.compose(log, multiplyN0N1, logN0N1, findMatch2020);

// >>>> setup above this line, only execution below here

app(input);
