"use strict";

const R = require("ramda");
const input = require("./input");
const { log } = require("../common/functions");
const { parseRow } = require("./functions");

const isValidPassword = ({ password, policy }) =>
  (password.charAt(policy.min - 1) === policy.ch &&
    password.charAt(policy.max - 1) !== policy.ch) ||
  (password.charAt(policy.min - 1) !== policy.ch &&
    password.charAt(policy.max - 1) === policy.ch);

// >>>> pure functions above this line

// console.log(JSON.stringify(parseRow("16-18 h: hhhhhhhhhhhhhhhhhh"), null, 2));

const app = (rows) => rows.map(parseRow).filter(isValidPassword).length;

// >>>> setup above this line, only execution below here

log(app(input));
