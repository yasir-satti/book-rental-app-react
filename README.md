# Book Rental Service app using React

1. Registration screen

Implementation
Unit tests (Jest)
E2E testing with testCafe, selenium and Cypress

2. Login screen
3. Page for browse available books for rental
4. Rent book(es) page
5. Delivery address page
6. Payment page
7. Rentals return page
8. Customer service page

# Testing tools

## Cypress

Steps:

a) for installation run command
$ npm i -D cypress @testing-library/cypress eslint-plugin-cypress

b) add this to commands.js under cypress/support folder
import '@testing-library/cypress/add-commands'

c) Create file .eslintre.json under cypress folder and add this
{
    "extends": ["plugin:cypress/recommended"]
}

d) create cypress.json under src and add
{
    "baseUrl": "http://localhost:3000"
}

e) under cypress/fixtures & cypress/inegration remove all sample files

f) in .gitignore under #testing add
/cypress/videos
/cypress/screenshots

g) run cypress sever
$ npm run cypress

h) on cypress server click on test name to run

** cypress commands
https://docs.cypress.io/api/commands/get

## TestCafe

Steps:

a) For installation run command
$ npm i testcafe -g --save-dev

b) to run test 
$ testcafe {browser_name} {test filename}
example
$ testcafe chrome todo.spec.js

## Selenium

Steps:

a) to isntall run ( https://medium.com/dailyjs/how-to-setup-selenium-on-node-environment-ee33023da72d )
$ npm install selenium-webdriver

b) download the latest broweser drivers you want to test (chrome, firefox, ..etc) for your operating system

c) add the drivers' location to your system PATH variable 

d) run a test 
$ node {test filename}
example
$ node todo_selenium_test.js
