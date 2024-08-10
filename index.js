const inquirer = require('inquirer');

// Your code for creating SVG logos goes here

// Example usage of inquirer
inquirer.prompt([


const questions = [
    {
type: 'input',
name: 'text',
message: 'Enter the text for the logo:',
    },



    
    .then((answers) => {
        // Handle user input
        console.log(answers);



        // Your code for creating SVG logos goes here
        const svg = `
        <svg width="${answers.size}" height="${answers.size}" xmlns="http://www.w3.org/2000/svg">
        <rect width="${answers.size}" height="${answers.size}" fill="${answers.color}" rx="${answers.borderRadius}" ry="${answers.borderRadius}" stroke="${answers.borderColor}" stroke-width="${answers.borderWidth}"/>
        <text x="50%" y="50%" dominant-baseline="middle" text-anchor="${answers.textAlign}" fill="${answers.textColor}" font-size="${answers.fontSize}" font-family="${answers.fontFamily}" text-decoration="${answers.textDecoration}" text-transform="${answers.textTransform}" style="text-shadow: ${answers.textShadowColor} ${answers.textShadowBlur}px ${answers.textShadowBlur}px ${answers.textShadowBlur}px;">${answers.text}</text>
        </svg>
        `;
        console.log(svg);


    })
    .catch((error) => {
        // Handle errors
        console.log(error);
    });