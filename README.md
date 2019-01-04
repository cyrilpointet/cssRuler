# cssRuler

A very simple and lightweight library for manipulating css rules without adding inline style

## installation

`npm install css-ruler`

## usage
Import:

`import cssRuler from 'css-ruler'`

Get all stylesheets:

`let mysheets = cssRuler.getStylesheets()`

Get a specific by css selector:

`let myRule = cssRuler.getRule('.classSelector')`

Delete a css rule:

`cssRuler.deleteRule('#IdSelector')`

Edit a exisitng rule:

`let rule = { color: 'red', fontSize : '22px'};
cssRuler.editRule('.mySelector', rule);`

Add a new css rule:

`let newRule = { color: 'red', fontSize : '22px'};
cssRuler.addRule('.mySelector', newRule);`