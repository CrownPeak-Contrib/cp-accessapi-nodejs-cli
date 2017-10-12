#!/usr/bin/env node

var program = require('commander');

process.stdout.write("\n");
process.stdout.write("Crownpeak CLI starting.\n");

program
  .version('0.1.0')
  .command('init', 'initialize a config for using the AccessAPI')
  .command('update', 'update an asset')
  .command('list','list contents of a folder')
  .command('route', 'routing and publishing')
  .parse(process.argv);