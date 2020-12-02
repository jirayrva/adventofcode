"use strict";

const R = require("ramda");

const findMatch = (target) => ([n0, ...nRest]) =>
  R.isEmpty(nRest)
    ? []
    : R.find(R.equals(target - n0), nRest)
    ? [n0, target - n0]
    : findMatch(target)(nRest);

const find3Match = (target) => ([n0, ...nRest]) => {
  if (R.length(nRest) < 2) {
    return [];
  }

  const [n1, n2] = findMatch(target - n0)(nRest);
  return n2 ? [n0, n1, n2] : find3Match(target)(nRest);
};

const log = R.tap(console.log);

const mapIndexed = R.addIndex(R.map);

const logArray = R.tap(
  R.compose(
    log,
    mapIndexed((x, i) => `n${i}: ${x}`)
  )
);

module.exports = {
  findMatch,
  find3Match,
  log,
  logArray,
};
