const inquirer = require("inquirer");
const fs = require("fs");
const { type } = require("os");

inquirer.prompt([
    {
      type: "input",
      name: "logoText",
      message: "Enter your logo text:",
    },
    {
      type: "input",
      name: "logoColor",
      message: "Enter the color for your logo:",
    },
    {
      type: "input",
      name: "logoSize",
      message: "Enter the size for your logo (in pixels):",

    },
    {
        type: "list",
        name: "shape",
        message: "Choose a shape to draw:",
        choices: ["Circle", "Square", "Triangle"],


    }
  ])
