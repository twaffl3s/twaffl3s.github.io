const fs = require('fs');
const path = require('path');
const css_folder = path.join(__dirname + '/../css/min');

console.log('**************************\nCopying Production CSS');
fs.readdirSync(css_folder).forEach((file) => {
  if(fs.statSync(path.join(css_folder, file)).isFile() && file.indexOf('.min.css') >= 0){
    console.log(`Copying: ${file}`);
    fs.copyFileSync(path.join(css_folder, file), `${css_folder.replace('css/min', '_includes')}/${file}`);
  }
});