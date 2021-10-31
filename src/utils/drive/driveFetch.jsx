import { axios } from "axios";
import csvtojson from "csvtojson";
import Chance from "chance";

import cleanObject from "../functions/cleanObject";

export default async function driveFetch(tab, shuffle) {
  const chanceObj = new Chance();

  const sheetId = "2PACX-1vR4JIS02bnIvKd1DffdE23uXVd2LfX3BE4SPnO_fVqbi2Vyhc6kDvQ6bkCsHPg7GNEIPqTtYgnPsJlo";
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
}
