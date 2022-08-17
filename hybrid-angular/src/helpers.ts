export const APPLICATION_ID = 'hybrid-angular'

const scriptsFilter = (script: HTMLScriptElement): boolean => {
  return script.src.indexOf(APPLICATION_ID) !== -1;
}

declare let __webpack_public_path__: string;
export const enableDynamicPublicPath = (): void => {
  const scriptsArr = Array.from(document.scripts);
  const src = scriptsArr.find(scriptsFilter)?.src
  if (src) {
    const publicPath = src.substring(0, src.indexOf(APPLICATION_ID));
    __webpack_public_path__ = `${publicPath}${APPLICATION_ID}/`
  }
}
