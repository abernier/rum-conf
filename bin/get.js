#!/usr/bin/env node
var argv = require('optimist')
      .usage('Get config value.\nUsage: $0 [Options]')
      
      .demand('key')

      .argv
    ;

var conf = require('..');

var value = conf[argv.key] || "";

console.log(value);