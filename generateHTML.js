const fs = require("fs"); // import fs npm library to write file
const util = require("util"); // import util npm library to write file
const writeFileAsync = util.promisify(fs.writeFile);

const callApi = require('./callApi'); // import function from callApi.js file

const colors = {
    red: {
        fontShadow: "#42201E",
        headerBackground: "#829BB0",
        wrapperBackground: "#C2271F",
        borderColor: "#C1CC35"
    },
    blue: {
        fontShadow: "#242B42",
        headerBackground: "#F4F1B8",
        wrapperBackground: "#2F51C2",
        borderColor: "#CC6245"
    },
    yellow: {
        fontShadow: "#6B6741",
        headerBackground: "#D8F5FA",
        wrapperBackground: "#EBDA49",
        borderColor: "#B82765"
    },
    green: {
        fontShadow: "#384735",
        headerBackground: "#F4F1B8",
        wrapperBackground: "#6AC757",
        borderColor: "#7570D0"
    },
    orange: {
        fontShadow: "#805F3C",
        headerBackground: "#D8F3B4",
        wrapperBackground: "#FF972B",
        borderColor: "#45E161"
    },
    violet: {
        fontShadow: "#3A2A52",
        headerBackground: "#EDCDC5",
        wrapperBackground: "#8637FF",
        borderColor: "#FFB252"
    },
    grey: {
        fontShadow: "#595959",
        headerBackground: "#D1CFC7",
        wrapperBackground: "#BFBFBF",
        borderColor: "#6E6C69"
    }
}


function generateHTML(username,color,res1,res2) {
 
    return writeFileAsync(`${username}.html`,`<!DOCTYPE html>
    <html lang="en">
    
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <title>Document</title>
        <script src="https://kit.fontawesome.com/55233fae23.js" crossorigin="anonymous"></script>
    
        <style>
            @page {
                margin: 0;
            }
    
            html,
            body,
                {
                margin: 0;
                padding: 0;
                height: 100%;
            }
    
            body {
                background-color: #F2F1EE;
                color: ${colors[color].fontShadow};
                -webkit-print-color-adjust: exact !important;
            }
    
            #header-background {
                background-color: ${colors[color].headerBackground};
                height: 350px;
                margin: 0;
            }
    
            #footer-background {
                background-color: ${colors[color].headerBackground};
                height: 200px;
                margin: 0;
            }

            #wrapper {
                width: 90%;
                background-color: ${colors[color].wrapperBackground};
                margin: auto;
                margin-top: -300px;
                border-radius: 20px;
                padding-bottom: 10px;
            }
    
            #profile-pic {
                width: 250px;
                height: 250px;
                border: 7px solid;
                border-color: ${colors[color].borderColor};
                border-radius: 50%;
                box-shadow: 3px 4px 20px ${colors[color].fontShadow};
                margin: auto;
                object-fit: cover;
                position: relative;
                top: -30px;
            }
    
            h1 {
                text-align: center;
                font-family: 'Poppins', sans-serif;
                font-weight: bolder;
            }
    
            h2,
            h3 {
                text-align: center;
                font-family: 'Roboto', sans-serif;
                font-weight: lighter;
            }
    
            #name {
                font-size: 2.5em;
                margin-top: 0;
            }
    
            .git-btn {
                width: 300px;
                display: inline-block;
                padding: 20px;
                background-color: ${colors[color].wrapperBackground};
                margin: 0 10px 20px 10px;
                border-radius: 20px;
            }

            #git-buttons {
                margin-left: 67px;
            }

            .buttons {
                margin: 5px auto;
            }

            #message {
                padding: 20px;
            }

            a:link, a:visited {
                color: ${colors[color].fontShadow};
                text-decoration: none;
            }

            @media print { 
                body { 
                    height: 3300px;
                    zoom: .7;
                } 
            }
        </style>
    </head>
    
    <body>
        <div id="header-background"></div>
        <div id="wrapper">
            <h1><img id="profile-pic" src=${res1.avatar_url} alt="profile-pic"></h1>
            <h1 id="name">Hi! My name is ${res1.name}</h1>
            ${res1.company != null ? `<h3>Currently @ ${res1.company}</h3>` : ``}
            <h2>
            ${res1.location != null ? `<a href="https://www.google.com/maps/search/?api=1&query=${locationURL}">
            <i class="fas fa-map-marked-alt"><span>&nbsp;</span></i>${res1.location}</a>
            <span>&emsp;</span>` : `""`}
            <a href="${res1.html_url}"><i class="fab fa-github"><span>&nbsp;</span></i>GitHub</a>
            ${res1.blog != "" ? `<span>&emsp;</span>
            <a href="${res1.blog}"><i class="fas fa-globe"><span>&nbsp;</span></i>Website</a>` : ``}
            </h2>
        </div>
        <div id="message">
            <h1>${res1.bio != null ? `${res1.bio}` : ``}</h1>        
        </div>
        <div id="git-buttons">
            <div class="github-buttons">
                <div class="git-btn" id="repos">
                    <h2 class="buttons">Public Repositories</h2>
                    <h2 class="buttons">${res1.public_repos}</h2>
                </div>
                <div class="git-btn" id="stars">
                    <h2 class="buttons">Github Stars</h2>
                    <h2 class="buttons">${res1.public_gists}</h2>
                </div>
            </div>
            <div class="github-buttons">
                <div class="git-btn" id="followers">
                    <h2 class="buttons">Followers</h2>
                    <h2 class="buttons">${res1.followers}</h2>
                </div>
                <div class="git-btn" id="following">
                    <h2 class="buttons">Following</h2>
                    <h2 class="buttons">${res1.following}</h2>
                </div>
            </div>
        </div>
        <div id="footer-background"></div>
    
    </body>
    
    </html>`)
}
// generateHTML(colors);
module.exports = generateHTML;