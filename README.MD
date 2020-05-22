# Function to add two mathematical expressions

## Description 
I have decided to create a function which as an input accept the string and transform it into dual dimension array, 
then into map, whose key is a power of particular 'x', value is a number of 'x' . 
The function can be easily modified to skip the transform stage and accept an arrays or maps as an input.

#### input string example:
```
'-2x2-3'
```
#### array example:
```
[ [ -2, 2 ], [ 3, 0 ] ]
```
each element has two sub-elements, the first one is a number of "x", 
and the second one is the power of "x"

## Download

using 
```
git clone https://github.com/gukeskl/Expressions.git
```
command, clone the repo from github
or
download repo directly from github

## Project setup
using 
```
npm install
```
command, you will install all necessary packages


### Running 
If you want to use it, at the begining of the your file, you have to add line to import this function: 
```
const addExpressions = require('path')
```
'path' have to link it, with the addExpresions.js file

### Testing

To run the test you have to be in project folder, and run 
```
mocha
```
command in terminal
