import puppeteer from 'puppeteer-core';
import * as fs from 'fs';

function ignoredDefaultArgs(neededArgs) {
  const defaultArgs = puppeteer.defaultArgs();
  const res = defaultArgs.filter(defaultArg => neededArgs.indexOf(defaultArg) != 0);
  return res;
}

const defaultOptions = {
  headless: false,
  ignoreDefaultArgs: ignoredDefaultArgs(['--no-first-run', '--disable-sync']),
  defaultViewport: null,
  args: [
    '--no-sandbox',
    '--disabled-setupid-sandbox',
  ],
}

export const prepareContext = async function (pathToConfig) {
  const config = JSON.parse(fs.readFileSync(pathToConfig).toString());
  const options = Object.assign({}, defaultOptions, config);

  const context = await puppeteer.launch(options);

  return context;
}
