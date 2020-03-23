// Please do not change the name of this function
const needleInHaystack = (haystack, needle) => {
  const needleLocations = [];

  const checkObject = (object, needle, needleLocations, route = "") => {
    for (let key in object) {
      if (typeof object[key] === "string") {
        const regex = RegExp(needle.toLowerCase(), "g");

        if (regex.test(object[key].toLowerCase())) {
          needleLocations.push(route + `${key}`);
        } else {
          ("");
        }
      } else {
        checkObject(object[key], needle, needleLocations, route + `${key}.`);
      }
    }
    return needleLocations;
  };

  return checkObject(haystack, needle, []).sort();
};

module.exports = { needleInHaystack };
