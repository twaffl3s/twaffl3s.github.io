const execSync = require('child_process').execSync;
const fs = require('fs');
const join = require('path').join;
const args = require('process').argv.filter((arg)=>{ 
  if (arg.indexOf('--') >= 0) return arg;
}).map((arg)=> {
  return arg.replace('--', '');
});
const scss_folder = join(__dirname + '/../scss');

console.log('**************************\nCompiling SCSS');
fs.readdirSync(scss_folder).forEach((file) => {
  if(fs.statSync(join(scss_folder, file)).isFile()){
    console.log(`Compiling: ${file}`);
    let output = file.replace('scss', 'css');
    let command = `./node_modules/.bin/node-sass`;
    if(args.indexOf('production') >= 0){
      command += ' --output-style compressed';
      output = `min/${output.replace('css', 'min.css')}`;
    }
    command += ` ${scss_folder}/${file} > ${scss_folder.replace('scss', 'css')}/${output}`;
    execSync(command);
  }
});