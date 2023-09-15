const { expect } = require('@playwright/test')
const path = require('path');
require('dotenv').config({
    path: path.join(__dirname, '../.env'),
});
class LoginPage {
    async navigate() {
        await global.page.goto(process.env.WEB_URL)
    }
    async enterUsername() {
        await global.page.locator('#username').waitFor({ status: 'visible' })
        await global.page.locator('#username').fill(process.env.WEB_USERNAME)
    }
    async enterPassword() {
        await global.page.locator('#password').fill(process.env.WEB_PASSWORD)
    }
    async clickOnLoginButton() {
        await global.page.locator('[data-name="login-button"]').click()
    }
    async verifyDashboard() {
        await global.page.locator('h2[class="greet"]').waitFor({status: 'visible' })
        await global.page.locator('h2[class="greet"]>[title]').waitFor({status: 'visible'})
        const nameGreeting = await global.page.locator('h2[class="greet"]>[title]')
        expect(await nameGreeting.innerText()).toBe(process.env.WEB_USERNAME)
    }
    async verifyErrorMessage(text){
        await global.page.locator('#login-alert').waitFor({status: 'visible' })
        const errorMessage = global.page.locator('#login-alert')
        expect(await errorMessage.innerText()).toBe(text)
    }
}
module.exports = { LoginPage }