const inquirer = require('inquirer');

// Your code for creating SVG logos goes here

// Example usage of inquirer
inquirer.prompt([


        /* Your inquirer prompts go here */{
title: 'What shape would you like to draw?',
type: 'list',
name: 'shape',
choices: ['Square', 'Circle', 'Triangle']
        },{
        title: 'What should be the size of the shape?',
        type: 'number',
        name: 'size',
        default: 100
        },{
        title: 'What should be the color of the shape?',
        type: 'input',
        name: 'color',
        default: 'red'
        },{
        title: 'What should be the background color of the shape?',
        type: 'input',
        name: 'bgColor',
        default: 'white'
        },{
        title: 'What should be the border radius of the shape?',
        type: 'number',
        name: 'borderRadius',
        default: 0
        },{

        title: 'What should be the border width of the shape?',
        type: 'number',
        name: 'borderWidth',
        default: 0
        },{
        title: 'What should be the border color of the shape?',
        type: 'input',
        name: 'borderColor',
        default: 'black'
        },{
        title: 'What should be the text inside the shape?',
        type: 'input',
        name: 'text',
        default: ''
        },{
        title: 'What should be the text color of the shape?',
        type: 'input',
        name: 'textColor',
        default: 'black'
        },{
        title: 'What should be the font size of the text?',
        type: 'number',
        name: 'fontSize',
        default: 16
        },{
        title: 'What should be the font family of the text?',
        type: 'input',
        name: 'fontFamily',
        default: 'Arial'
        },{
        title: 'What should be the text alignment?',
        type: 'list',
        name: 'textAlign',
        choices: ['left', 'center', 'right'],
        default: 'center'
        },{
        title: 'What should be the text decoration?',
        type: 'list',
        name: 'textDecoration',
        choices: ['none', 'underline', 'overline', 'line-through'], 
        default: 'none'
        },{
        title: 'What should be the text transform?',                
        type: 'list',
        name: 'textTransform',
        choices: ['none', 'uppercase', 'lowercase', 'capitalize'],
        default: 'none'
        },{
        title: 'What should be the text shadow color?',
        type: 'input',
        name: 'textShadowColor',
        default: 'transparent'
        },{
        title: 'What should be the text shadow blur?',
        type: 'number',
        name: 'textShadowBlur',
        default: 0
        },{
        title: 'What should be the text shadow offset x?',
        type: 'number'  },

    ])

    





    
    .then((answers) => {
        // Handle user input
        console.log(answers);



        // Your code for creating SVG logos goes here
        const svg = `
        <svg width="${answers.size}" height="${answers.size}" xmlns="http://www.w3.org/2000/svg">
        <rect width="${answers.size}" height="${answers.size}" fill="${answers.bgColor}"/>
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