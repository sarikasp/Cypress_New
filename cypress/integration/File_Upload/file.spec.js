//  npm install --save-dev cypress-file-upload  // install package// check in package.json
// import 'cypress-file-upload'; // support/ command.js

/// <reference types="cypress" />
describe('Example to demonstrate file upload in cypress', function () {

let file = '../../cypress/fixtures/MinSkole_Logo.jpg'  

    it('File Upload using cypress-file-upload npm package', () => {
       cy.visit('https://tus.io/demo.html')
       cy.wait(3000)
       cy.get('[id="js-file-input"]').scrollIntoView()
       cy.wait(2000)
       cy.get('[id="js-file-input"]').attachFile(file)
       cy.wait(5000)
       cy.get('.heading').should('have.text', 'The upload is complete!')
    
    })  
})

// www.igniteui.com/file-upload