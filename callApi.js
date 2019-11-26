const inquirer = require("inquirer");
const axios = require("axios"); // import axio npm library to call the api's from github
const fs = require("fs"); // import fs npm library to write file
const path = require("path"); // import path npm library to read relative paths
const puppeteer = require('puppeteer'); // import puppeteer npm library to convert html to pdf

const askQuestions = require("./askQuestion"); // import function from askQuestions.js file
const generateHTML = require("./generateHTML"); // import function from generateHTL.js file


async function callApi(username,color){
    const queryURLusername = `https://api.github.com/users/${username}`;
    const queryURLstarred = `https://api.github.com/users/${username}/starred`;

    const res1 = await axios.get(queryURLusername);
    const res2 = await axios.get(queryURLstarred);

    await generateHTML(username,color,res1,res2);

    const createPDF = async (color,generateHTML) => {
        const browser = await puppeteer.launch();
        const page = await browser.newPage();
        const option = {
            path: `${username}.pdf`,
        }

    const contentHtml = await fs.readFileSync(path.resolve(_dirname, `${username}.html`)).toString('utf-8');
    await page.setContent(contentHtml);
    await page.waitForSelector('main');

    await page.pdf(options);
    await page.screenshot({ path: 'screenshot.png', fullPage: true });

    await page.close();
    await browser.close();
    }

    createPDF();
};

module.exports = callApi;