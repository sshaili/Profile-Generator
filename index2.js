githubInfo();
async function githubInfo() {
    try {
        // prompt user for github username and preferred color
        const { username, color } = await inquirer.prompt([
            {
                type: "input",
                message: "What is your Github username?",
                name: "username"
            },
            {
                type: "list",
                message: "Choose a color:",
                name: "color",
                choices: [
                    "red",
                    "blue",
                    "yellow",
                    "green",
                    "orange",
                    "violet",
                    "grey"
                ]
            }]);
            // github API call
        const { data } = await axios.get(`https://api.github.com/users/${username}`);

        // replace location string for Google maps search
        let locationURL = data.location.replace(/ /g, "+").replace(/,/g, "%2C");

        // html-pdf package call
        var html = await generateHTML.generateHTML(generateHTML.colors, data, color, locationURL);
        var options = { format: 'Letter' };

        pdf.create(html, options).toFile('./profile.pdf', function (err, res) {
            if (err) return console.log(err);
            console.log(res);
        });

    } catch (err) {
        console.log(err);
    }
}

