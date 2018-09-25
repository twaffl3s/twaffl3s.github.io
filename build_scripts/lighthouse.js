const execSync = require('child_process').execSync;
const resolve = require('path').resolve;

execSync('./node_modules/.bin/lighthouse http://127.0.0.1:4001/ --output=json --output-path=./report.json --quiet --chrome-flags="--headless"');

const output = require(resolve('./report.json'));
console.log(output);