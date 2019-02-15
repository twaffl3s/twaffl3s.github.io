const fs = require('fs');
const join = require('path').join;
const css_folder = join(__dirname + '/../css/min');

console.log('**************************\nCopying Production CSS');
fs.readdirSync(css_folder).forEach((file) => {
  if(fs.statSync(join(css_folder, file)).isFile() && file.indexOf('.min.css') >= 0){
    console.log(`Copying: ${file}`);
    fs.copyFileSync(join(css_folder, file), `${css_folder.replace('css/min', '_includes')}/${file}`);
  }
});