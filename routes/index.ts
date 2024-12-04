import abs, { recordTypes as absRecordTypes } from "./abs";
import bch, { recordTypes as bchRecordTypes } from "./bch";
import chm, {recordTypes as chmRecordTypes } from "./chm";
import ort, {recordTypes as ortRecordTypes } from "./ort";

export default {
  "/": [],
  "/abs/": abs,
  "/bch/": bch,
  "/chm/": chm,
  "/ort/": ort
};

export const recordTypes = {
  abs: absRecordTypes,
  bch: bchRecordTypes,
  chm: chmRecordTypes,
  ort: ortRecordTypes
};
