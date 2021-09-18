/* eslint-disable no-param-reassign */
/* eslint-disable no-restricted-syntax */
module.exports = (obj) => {
  for (const propName in obj) {
    if (obj[propName] === null || obj[propName] === undefined) {
      delete obj[propName];
    }
  }
  return obj;
};
