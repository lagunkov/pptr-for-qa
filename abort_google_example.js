import { prepareContext } from './utils/config.js';
import args from './utils/argparser.js';

const PATH_TO_CONFIG = args.config || './config.json';
const START_PAGE = args.page || 'about:blank';

async function launchChrome(startUrl) {
  const context = await prepareContext(PATH_TO_CONFIG);
  const page = await context.newPage();

  await page.setRequestInterception(true);

  page.on('request', (req) => {
    let reqUrl = req.url();
    let interceptedString = 'google';

    //abort requests that contains 'google' in url after 5s delay
    if (reqUrl.indexOf(interceptedString) != -1) {
      setTimeout(() => { req.abort(); }, 5000);
      console.log(`BLOCKED: ${reqUrl}`);
    } else {
      req.continue();
    }
  });

  await page.goto(startUrl);
}

launchChrome(START_PAGE);
