"use strict";

const R = require("ramda");
const input = require("./input");
const { log } = require("../common/functions");
const { arrayToObj } = require("./functions");

const parseRow = R.compose(arrayToObj, R.match(/(\d+)-(\d+) (\w): (\w+)/));

const isValidPassword = ({ password, policy }) =>
  (password.charAt(policy.min - 1) === policy.ch &&
    password.charAt(policy.max - 1) !== policy.ch) ||
  (password.charAt(policy.min - 1) !== policy.ch &&
    password.charAt(policy.max - 1) === policy.ch);

const app = R.compose(R.length, R.filter(isValidPassword), R.map(parseRow));

// execute
log(app(input));
