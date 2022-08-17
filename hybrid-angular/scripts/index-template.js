const indexScript = [...document.scripts].find(script => script.src.indexOf('hybrid-angular/index.js'))
const publicPath = indexScript.src.substring(0, indexScript.src.indexOf('index.js'))

function loadScript(file) {
  return Promise((resolve, reject) => {
    const script = document.createElement('script')
    script.src = publicPath + file;
    script.type = 'module';
    document.body.appendChild(script);
    script.onload = resolve
    script.onerror = reject
  })
}

