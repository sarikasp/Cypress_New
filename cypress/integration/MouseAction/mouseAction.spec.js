/// <reference types="cypress" />
describe('Example to demonstrate mouse action in cypress', function () {
    
        it('Web Driver University', () => {
            cy.visit('https://www.webdriveruniversity.com/')
            cy.get('#actions').invoke('removeAttr', 'target').click()
            cy.get('#draggable').trigger('mousedown', {which: 1})     
            cy.get('#droppable').trigger('mousemove').trigger('mouseup', {force:true})
            cy.get('#droppable >p >b').should('have.text', 'Dropped!')
            cy.get('#droppable >p ').then((el)=>{
                expect(el).to.have.css("background-color", "rgb(244, 89, 80)")
            })
            cy.get('#droppable >p ').should('have.css', "background-color", "rgb(244, 89, 80)")
         
        })  
    })
