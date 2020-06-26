// Web Scraper for Books

const puppeteer = require('puppeteer');
const random_useragent = require('random-useragent');
const { url } = require('./config');

;(async () => {
	// Open the browser
	const browser = await puppeteer.launch({ headless: false });
    const page = await browser.newPage();
    
    // Setup the browser environment
    await page.setDefaultTimeout(10000);
    await page.setViewport({width: 1200, height: 800})
    await page.setUserAgent(random_useragent.getRandom())

    // Get data from bookstore
    const name_selector = ".product_main > h1";
    const price_selector = ".price_color";
    await page.goto(url)
    await page.waitForSelector(name_selector);
    await page.waitForSelector(price_selector);

    const name = await page.$eval(name_selector, e => e.innerHTML);
    const price = await page.$eval(price_selector, e => e.innerHTML);

    const nameTrim = name.trim();
    const priceTrim = price.trim();

    console.log(nameTrim, priceTrim);
    
	//Close the browser
	await browser.close();
})().catch((err) => {
	console.log(err);
	process.exit(1);
});
