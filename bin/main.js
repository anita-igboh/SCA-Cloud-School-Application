import chalk from 'chalk';
import fs from 'fs';
import ncp from 'ncp';
import path from 'path';

import promisify from 'util';


const boxen = require("boxen");
const yargs = require("yargs");
const axios = require("axios");


const title = chalk.white.bold("SCA Cloud School Application");

const boxenOptions = {
    padding: 1,
    margin: 1,
    borderStyle: "round",
    borderColor: "green",
    backgroundColor: "#555555",
    fontSize: "40px"
};

const msgBox = boxen(title, boxenOptions);




// OUTPUTS.. //
console.log(os.type()); // "Windows_NT"
console.log(os.release()); // "10.0.14393"
console.log(os.platform()); // "win32"
//  console.log(msgBox);
