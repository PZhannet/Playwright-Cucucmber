const { When, Then, Given } = require('@cucumber/cucumber')
const { LoginPage } = require('../page/loginPage')
let loginPage = new LoginPage()

Given('I Visit the Home page', {timeout: 10 * 5000}, async () => {
    await loginPage.navigate()
})

When('I enter username', {timeout: 10 * 5000},  async () => {
    await loginPage.enterUsername()
})
When('I enter Password', {timeout: 10 * 5000}, async () => {
    await loginPage.enterPassword()
})
When('I click on Login button', {timeout: 10 * 5000}, async () => {
    await loginPage.clickOnLoginButton()
})
Then('I verify the name in greeting', {timeout: 60 * 10000}, async () => {
    await loginPage.verifyDashboard()
})

Then('I verify the error message as {string}', async (message) =>  {
    await loginPage.verifyErrorMessage(message)
});