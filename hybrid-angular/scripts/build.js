const fs = require('fs');
const path = require('path');

const distDir = path.join(__dirname, '../dist/hybrid-angular');

const files = fs.readdirSync(distDir);
const entryFiles = files.filter(file =>
  (file.startsWith('main.') ||
  file.startsWith('polyfills.') ||
  file.startsWith('runtime.')) && file.endsWith('.js')
)

const template = fs.readFileSync(path.join(__dirname, 'index-template.js'), {encoding: 'utf-8'});

const indexScript = `${template}${JSON.stringify(entryFiles, null, 2)}.map( loadScript );`

fs.writeFileSync(`${distDir}/index.js`, indexScript, {encoding: 'utf-8'});

