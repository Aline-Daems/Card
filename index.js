#!/usr/bin/env node

const boxen = require('boxen');
const chalk = require('chalk');


const data = {
    name: chalk.white("Daems Aline"),
    
    work: chalk.magenta("Unicorn Rider"),
    
    npm: chalk.magenta("https://npmjs.com/") + chalk.red("~aline-daems"),
    github: chalk.magenta("https://github.com/") + chalk.red("aline-daems"),
    linkedin: chalk.magenta("https://linkedin.com/in/") + chalk.red("aline-daems-liege"),
    labelWork: chalk.white.bold("       Work:"),
    labelTwitter: chalk.white.bold("    Twitter:"),
    labelNpm: chalk.white.bold("        npm:"),
    labelGitHub: chalk.white.bold("     GitHub:"),
    labelLinkedIn: chalk.white.bold("   LinkedIn:"),
};

const NEWLINE = "\n";
const EMPTYLINE = "";

console.log(
    chalk.gray(
        boxen(
            [
                `${data.name}`,
                EMPTYLINE,
                `${data.labelWork} ${data.work}`,
                EMPTYLINE,
                `${data.labelNpm} ${data.npm}`,
                `${data.labelGitHub} ${data.github}`,
                `${data.labelLinkedIn} ${data.linkedin}`,
                EMPTYLINE,
            ].join(NEWLINE),
            {
                padding: 1,
                margin: 1,
                borderStyle: "classic",
                backgroundColor: "#bd9dab",
            },
        ),
    ),
);