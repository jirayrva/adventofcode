"use strict";

const R = require("ramda");
const input = require("./input");
const { find3Match, log, logArray } = require("./functions");

const find3Match2020 = find3Match(2020);

// >>>> pure functions above this line

const app = R.compose(R.product, logArray, find3Match2020);

// >>>> setup above this line, only execution below here

log(app(input));
