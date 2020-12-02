"use strict";

const R = require("ramda");
const input = require("./input");
const { log } = require("../common/functions");
const { arrayToObj } = require("./functions");

const parseRow = R.compose(arrayToObj, R.match(/(\d+)-(\d+) (\w): (\w+)/));

const isValidPassword = ({ password, policy }) => {
  const pwdChars = [...password];
  const count = pwdChars.filter(R.equals(policy.ch)).length;
  return policy.min <= count && count <= policy.max;
};

const app = R.compose(R.length, R.filter(isValidPassword), R.map(parseRow));

// execute
log(app(input));
