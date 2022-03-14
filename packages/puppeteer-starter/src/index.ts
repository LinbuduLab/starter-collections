import puppeteer from 'puppeteer';
import path from 'path';

(async () => {
  const browser = await puppeteer.launch({
    headless: true,
  });
  const page = await browser.newPage();
  await page.goto('https://github.com/');
  await page.screenshot({
    path: path.resolve(__dirname, '../dist/example.png'),
  });

  await browser.close();
})();
