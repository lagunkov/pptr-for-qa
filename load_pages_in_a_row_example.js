import { prepareContext } from './utils/config.js';
import args from './utils/argparser.js';

const PATH_TO_CONFIG = args.config || './config.json';
const START_PAGE = args.page || 'about:blank';

const pageUrls = [
  'https://example.com',
  'https://google.com',
  'https://github.com'
];

async function launchChrome(startUrl) {
  const context = await prepareContext(PATH_TO_CONFIG, { headless: true });
  const page = await context.newPage();

  await page.setCacheEnabled(false);

  for (let i = 0; i < pageUrls.length; ++i) {
    const start = Date.now();
    await page.goto(pageUrls[i], { waitUntil: 'domcontentloaded' });
    const elapsed = (Date.now() - start);
    console.log(`Page ${pageUrls[i]} dom content loaded in ${elapsed / 1000}s`);
  }
  await context.close();
}


launchChrome(START_PAGE);
