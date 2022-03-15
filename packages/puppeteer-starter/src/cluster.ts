import { Page } from 'puppeteer';
import { Cluster } from 'puppeteer-cluster';
import path from 'path';

(async () => {
  const cluster = await Cluster.launch({
    concurrency: Cluster.CONCURRENCY_CONTEXT,
    maxConcurrency: 6,
  });

  await cluster.task(
    async ({ page, data: url }: { page: Page; data: string }) => {
      await page.goto(url);

      const imgPath = url.replace(/[^a-zA-Z]/g, '_') + '.png';
      const savePath = path.resolve(__dirname, '../dist', imgPath);

      await page.screenshot({ path: savePath });
      console.log(`Screenshot of ${url} saved: ${savePath}`);
    }
  );

  cluster.queue('http://www.google.com/');
  cluster.queue('http://www.wikipedia.org/');
  cluster.queue('https://github.com/');

  await cluster.idle();
  await cluster.close();
})();
