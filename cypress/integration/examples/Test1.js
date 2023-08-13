/// <reference types="Cypress" />
//cypress - Spec
describe('My First test suite', function () {
    it('My First test case', function () {
        cy.visit('https://rahulshettyacademy.com/seleniumPractise/#/')
        cy.get("input[type='search']").type("ca")
        cy.wait(1000)
        console.log('sf')
        cy.get('.products').as('productLocator')
        cy.get("@productLocator").find('.product').should('have.length', 4)
        cy.get("@productLocator").find('.product').eq(2).contains('ADD TO CART').click()
        cy.get("@productLocator").find('.product').each(($el, index, $list) => {
            const textVeg = $el.find('h4.product-name').text()
            if (textVeg.includes('Cashews')) {
                cy.wrap($el).contains('ADD TO CART').click()
            }
        })
        cy.get('.brand').should('have.text','GREENKART')
        cy.get('.brand').then(
            function(logoElements){
                cy.log(logoElements.text())
            }
        )
        cy.get('img[alt="Cart"]').click()
        cy.get('button').contains('PROCEED TO CHECKOUT').click()
        cy.get('button').contains('Place Order').click()
    })
})