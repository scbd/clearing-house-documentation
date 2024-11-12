import abs, { recordTypes as absRecordTypes } from "./abs";
import bch, { recordTypes as bchRecordTypes } from "./bch";
import chm, {recordTypes as chmRecordTypes } from "./chm";

export default {
  "/": [],
  "/abs/": abs,
  "/bch/": bch,
  "/chm/": chm,
};

export const recordTypes = {
  abs: absRecordTypes,
  bch: bchRecordTypes,
  chm: chmRecordTypes
};
