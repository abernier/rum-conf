#!/usr/bin/env node
var argv = require('optimist')
      .usage('Get config value.\nUsage: $0 <key>')

      .demand(1)

      .argv
    ;

var conf = require('..');

var value = conf[argv._[0]] || "";

console.log(value);