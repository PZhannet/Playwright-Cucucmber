const { Before, After, Status } = require('@cucumber/cucumber')
const page = require('@playwright/test')

Before(async () => {
    let browser = await page.chromium.launch({ headless: true })
    global.browser = browser
    const context = await browser.newContext()
    global.page = await context.newPage()
})

After(async  function ({pickle, result }) {
    if (result?.status == Status.FAILED) {
        const img = await global.page.screenshot({ path: `test-results/screenshots/${pickle.name}.png`, type: "png" })
        await this.attach(
            img, "image/png"
        );    
    }
    await global. browser.close()
})