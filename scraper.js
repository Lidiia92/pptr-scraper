// Web Scraper for Books

const puppeteer = require('puppeteer');
const { url } = require('./config');

;(async () => {
	// Open the browser
	const browser = await puppeteer.launch({ headless: false });
    const page = await browser.newPage();
    
    // Setup the browser environment
    await page.setDefaultTimeout(10000);
    await page.setViewport({width: 1200, height: 800})

	//Close the browser
	await browser.close();
})().catch((err) => {
	console.log(err);
	process.exit(1);
});
