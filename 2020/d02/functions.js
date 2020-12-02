"use strict";

const arrayToObj = ([_, min, max, ch, password]) => ({
  password,
  policy: {
    min,
    max,
    ch,
  },
});

module.exports = { arrayToObj };
