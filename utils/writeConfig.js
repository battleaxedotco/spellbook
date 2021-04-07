const path = require("path");
let UTILS = require("./arcanophile");

async function init() {
  let templateContents = await UTILS.readFile(
    `${path.resolve("./")}/.spellbook/config.js`,
    false
  );
  UTILS.makeFile(
    `${path.resolve(".")}/.spellbook/config.json`,
    JSON.stringify({ template: templateContents })
  );

  console.log("DONE");
}

init();
