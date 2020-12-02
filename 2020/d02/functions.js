"use strict";

const R = require("ramda");

const parseRow = (row) => {
  const [policyString, password] = R.split(":")(row).map(R.trim);
  const [minMaxString, ch] = R.split(" ")(policyString).map(R.trim);
  const [min, max] = R.split("-")(minMaxString).map(R.trim);
  return {
    password,
    policy: {
      ch,
      min,
      max,
    },
  };
};

module.exports = { parseRow };
