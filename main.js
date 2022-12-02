import { prepareContext } from './utils/config.js';

const PATH_TO_CONFIG = './config.json';

async function launchChrome(startUrl = 'about:blank') {
  const context = await prepareContext(PATH_TO_CONFIG);
  const page = await context.newPage();


  await page.goto(startUrl);
}

launchChrome();
