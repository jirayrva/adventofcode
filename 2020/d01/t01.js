"use strict";

const R = require("ramda");
const input = require("./input");
const { findMatch, log, logArray } = require("./functions");

const findMatch2020 = findMatch(2020);

// >>>> pure functions above this line

const app = R.compose(R.product, logArray, findMatch2020);

// >>>> setup above this line, only execution below here

log(app(input));
