
const { Builder, By } = require('selenium-webdriver');

async function testWebsite() {
    let driver = await new Builder().forBrowser('chrome').build();

    try {
        await driver.get('http://localhost:3000');

        let heading = await driver.findElement(By.tagName('h1'));
        let headingText = await heading.getText();

        let date = await driver.findElement(By.id('date'));
        let dateText = await date.getText();

        if (headingText.includes('Welcome') &&
            dateText.includes('Current Date')) {
            console.log("TEST PASSED: Welcome webpage is working!");
        } else {
            console.log("TEST FAILED");
        }

    } finally {
        await driver.quit();
    }
}

testWebsite();
