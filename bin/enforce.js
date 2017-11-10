#!/usr/bin/env node
'use strict';
var Path = require('path');
var Semver = require('semver');
var version = process.versions.node;
var packageJson = Path.join(process.cwd(), 'package.json');
var pkg;

try {
  pkg = require(packageJson);
} catch (err) {
  console.error(err.message);
  process.exit(1);
}

var requirement = pkg.engines && pkg.engines.node;

if (typeof requirement !== 'string') {
  console.error('no engines.node field found in package.json');
}

if (!Semver.satisfies(version, requirement)) {
  var msg = process.argv[2] ||
            'module unsupported on node ' + version +
            '. requires ' + requirement;

  console.error(msg);
  process.exit(1);
}
