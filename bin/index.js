#!/usr/bin/env node

require = require('esm')(module, /*, option */);
require('../cli').cli(process.argv);  