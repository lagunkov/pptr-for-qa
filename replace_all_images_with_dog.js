import { prepareContext } from './utils/config.js';
import args from './utils/argparser.js';
import * as fs from 'fs';

const PATH_TO_CONFIG = args.config || './config.json';
const START_PAGE = args.page || 'about:blank';

async function launchChrome(startUrl) {
  const context = await prepareContext(PATH_TO_CONFIG);
  const page = await context.newPage();
  await page.setRequestInterception(true);

  page.on('request', (req) => {
    let reqUrl = req.url();
    if (req.headers().accept && req.headers().accept.indexOf('image/*') != -1) {
    //if (reqUrl.endsWith('.jpg') || reqUrl.endsWith('.jpeg')) {
      req.respond({
        status: 200,
        contentType: 'img/jpeg',
        body: fs.readFileSync('./files/square_foxterrier.jpeg')
      });
    } else req.continue();
  });

  await page.goto(startUrl);
}


launchChrome(START_PAGE);
