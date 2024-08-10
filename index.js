const inquirer = require("inquirer");

inquirer.prompt([
  {
    title: "What shape would you like to draw?",
    type: "list",
    name: "shape",
    choices: ["Square", "Circle", "Triangle"],
  },
  {
    title: "What should be the size of the shape?",
    type: "number",
    name: "size",
    default: 100,
  },
  {
    title: "What should be the color of the shape?",
    type: "input",
    name: "color",
    default: "red",
  },
  {
    title: "What should be the background color of the shape?",
    type: "input",
    name: "bgColor",
    default: "white",
  },
  {
    title: "What should be the border radius of the shape?",
    type: "number",
    name: "borderRadius",
    default: 0,
  },
  {
    title: "What should be the border width of the shape?",
    type: "number",
    name: "borderWidth",
    default: 0,
  },
  {
    title: "What should be the border color of the shape?",
    type: "input",
    name: "borderColor",
    default: "black",
  },
  {
    title: "What should be the text inside the shape?",
    type: "input",
    name: "text",
    default: "",
  },
  {
    title: "What should be the text color of the shape?",
    type: "input",
    name: "textColor",
    default: "black",
  },
]);
