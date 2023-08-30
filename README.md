## Table of Contents

- [Description](#description)
- [Structure](#structure)
- [Prerequisites](#prerequisites)
- [Installation](#installation)

## Description

The test is constructed using Cypress. The primary objective of this test is to validate the flow of the saving expense feature. The test represents the following steps: 
- opening the application, 
- accessing a modal dialog containing a form, 
- populating the form, 
- saving the entered information, 
- validating the saved data.

## Structure
```
── cypress
   ├── e2e
   │   └── AddExpenseSpec
   │       ├── AddExpenseSpec.cy.js
   │       └── AddExpenseSpec.utils.js 
   ├── fixtures
   │   ├── expenseDataSet.json
   │   └── samplePdf.pdf
   └── support
       ├── commands.js
       ├── e2e.js
       ├── selectors
       │   ├── index.js
       │   └── Selectors.js
       └── utils
           ├── datepicker.js
           └── helper.js

```


## Prerequisites

To run the project, you will need some additional packages to get smooth experience with launching the tests.
```
npm or yarn
``` 

## Installation

1. Clone the repo
   ```sh
   git clone https://github.com/baldiq/rec-task-worksuite
   ```
2. Install NPM packages
   ```sh
   npm install
   ```
   or yarn

   ```sh
   yarn install
   ```
3. Enter the project directory and run command
   ```sh
   ./node_modules/cypress/bin/cypress open
   ```



