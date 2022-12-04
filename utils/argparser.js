import { ArgumentParser } from 'argparse';

const parser = new ArgumentParser({
  description: 'Soft for running puppeteer easy'
});
parser.add_argument('-c', '--config', { help: 'Path to config file' });
parser.add_argument('-p', '--page', { help: 'Start page, default "about:blank"' });

const args =  parser.parse_args();

export default args;
