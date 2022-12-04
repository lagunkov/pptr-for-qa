import { prepareContext } from './utils/config.js';
import args from './utils/argparser.js';

const PATH_TO_CONFIG = args.config || './config.json';
const START_PAGE = args.page || 'about:blank';


async function launchChrome(startUrl) {
  const context = await prepareContext(PATH_TO_CONFIG);
  const page = await context.newPage();
  // Put your awesome intercepting code for page here

  await page.goto(startUrl);
}


launchChrome(START_PAGE);
