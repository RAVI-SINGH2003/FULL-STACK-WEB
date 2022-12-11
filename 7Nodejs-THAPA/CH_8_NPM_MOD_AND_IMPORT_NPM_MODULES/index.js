// step1: Initialse npm in root folder CH_8_NPM_MOD
// for that go in terminal go to  CH_8_NPM_MOD folder
//use npm init fill details after that you will get a package.json file

//NPM = node package manager
//package.json contains the info about the dependencies you are using
//extra information about dependencies in package.json can be found in package-lock.json

//----------------------- importing chalk module/dependency -----------
//now import chalk module/dependency from npm website using 
//command npm i chalk in terminal in root folder  CH_8_NPM_MOD
// const chalk = require('chalk')

// console.log(chalk.blue('Hello world!'));
// console.log(chalk.blue.underline.bold.italic("Hello world"))
// console.log(chalk.blue.underline.inverse("Hello world"))
// console.log(chalk.green.underline.inverse("success"))
// console.log(chalk.red.underline.inverse("false"))

//-------------------------- importing validator module /dependency-----------------------

// npm i validator in terminal in root folder to import/install validator dependency/module

// const validator = require('validator')
// const email1=  validator.isEmail('ravi@singh.com');
// const email2=  validator.isEmail('ravisingh.com');
// console.log(email1 ? chalk.green.inverse(email1): chalk.red.inverse(email1));
// console.log(email2 ? chalk.green.inverse(email2): chalk.red.inverse(email2));

//NOTE :
//chalk and validator npm modules are  locally installed 
//means they cannot be used outside CH_8_NPM_MOD_AND_IMPORT_NPM_MODULES folder
