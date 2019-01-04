# css-ruler

A very simple and lightweight library for manipulating css rules without adding inline style

## Installation

`npm install css-ruler`

## Import:

`import cssRuler from 'css-ruler'`

## Usage

#### Get all stylesheets:

`let mysheets = cssRuler.getStylesheets()`

#### Get a specific rule by css selector:

`let myRule = cssRuler.getRule('.classSelector')`

#### Delete a css rule:

`cssRuler.deleteRule('#IdSelector')`

#### Edit a exisitng rule:

`let rule = { color: 'red', fontSize : '22px'};
cssRuler.editRule('.mySelector', rule);`

#### Add a new css rule:

`let newRule = { color: 'red', fontSize : '22px'};
cssRuler.addRule('.mySelector', newRule);`