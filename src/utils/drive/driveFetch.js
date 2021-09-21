import { axios } from "axios";
import csvtojson from "csvtojson";
import Chance from "chance";

// const { default: axios } = require("axios");
// const csvtojson = require("csvtojson");
// const Chance = require("chance");

const cleanObject = require("../functions/cleanObject");

const sheetId = "2PACX-1vR4JIS02bnIvKd1DffdE23uXVd2LfX3BE4SPnO_fVqbi2Vyhc6kDvQ6bkCsHPg7GNEIPqTtYgnPsJlo";

const tabs = {
  projects: "0",
  news: "1162050956",
  careers: "1664283913",
};

const driveFetch = async (tab, shuffle) => {
  const chanceObj = new Chance();

  const url = `https://docs.google.com/spreadsheets/d/e/${sheetId}/pub?gid=${tab}&single=true&output=csv`;
  const db = await axios.get(url, { headers: { "Cache-Control": "no-store" } }).then((result) => result.data);
  let json = await csvtojson().fromString(db);

  let clean = false;
  json.forEach((item) => {
    if (!clean) {
      json = [];
      clean = true;
    }
    json.push(cleanObject(item));
  });

  if (shuffle) json = chanceObj.shuffle(json);

  return json;
};

export default ({ driveFetch, tabs });
