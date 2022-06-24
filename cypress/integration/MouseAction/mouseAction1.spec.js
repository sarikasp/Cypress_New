/// <reference types="cypress" />
describe('Example to demonstrate mouse action in cypress', function () {

     beforeEach(()=>{
        cy.visit('https://www.lambdatest.com/selenium-playground/')
     }) 
    

    it('Lambda Test - 1', () => {
        cy.contains('Drag & Drop Sliders').scrollIntoView().click()
        cy.get('[id="rangeSuccess"]').should('have.text', '15')
        cy.get('input[type="range"]').eq(2).invoke('val', 95).trigger('move') // change input box value
        cy.get('#rangeSuccess').invoke('val', 95).then((el) => {
            expect(el.text()).to.eqls('95')   // change ui value
        })
    })


    it('Lambda Test - 2', () => {
        cy.contains('Drag & Drop Sliders').scrollIntoView().click()
        cy.get('[id="rangeDanger"]').should('have.text', '30')
        cy.get('input[type="range"]').last().invoke('val', 90).trigger('move') // change input box value
        cy.get('#rangeDanger').invoke('val', 90).then((el) => {
            expect(el.text()).to.eqls('90')   // change ui value
        })
    })


    it('Lambda Test - 3', () => {
        cy.get('.list-disc').last().find(':nth-child(1) > .text-black').click()
        cy.get('#draggable').trigger('mousedown', {which: 1}, {force:true})
        cy.get('#droppable').trigger('mousemove').trigger('mouseup', {force:true})
        cy.get('#droppable p').should('have.text', 'Dropped!')
    })


})



