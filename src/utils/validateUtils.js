const isObjectLike = (obj) => {
  return typeof obj === "object" && obj !== null;
};

const isFunction = (varia) => {
  return utils.toType(varia) === "function";
};

const isEmail = (email) => {
  var re = /^(?:[a-z0-9!#$%&amp;'+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&amp;'+/=?^_`{|}~-]+)|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])")@(?:(?:[a-z0-9](?:[a-z0-9-][a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-][a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])$/;
  if (utils.isStringLike(email) && re.test(email)) {
    return true;
  }
  return false;
};

const isPhone = (phone) => {
  var re = /^(\+|)(234|0)(7|8|9)(0|1)\d{8}$/;
  if (utils.isStringLike(phone) && re.test(phone)) {
    return true;
  }

  return false;
};

const isArrayLike = (string) => {
  return string.constructor == Array || string instanceof Array;
};

const isStringLike = (str) => {
  if (str && typeof str.valueOf() === "string") {
    return true;
  }
  return false;
};
