import {Given,When,And} from "@badeball/cypress-cucumber-preprocessor"

Given("I open Ecommerce page",() =>{
    cy.visit('https://rahulshettyacademy.com/seleniumPractise/#/');
});

When('I search for',(dataTable) =>{
    cy.get("input[type='search']").type(dataTable.rawTable[1][0])
    cy.wait(1000)
})

When('I add cashews',()=>{
    cy.get("@productLocator").find('.product').each(($el, index, $list) => {
        const textVeg = $el.find('h4.product-name').text()
        if (textVeg.includes('Cashews')) {
            cy.wrap($el).contains('ADD TO CART').click()
        }
    })
})

When('I place Order',() =>{
    cy.get('img[alt="Cart"]').click()
    cy.get('button').contains('PROCEED TO CHECKOUT').click()
    cy.get('button').contains('Place Order').click()    
})