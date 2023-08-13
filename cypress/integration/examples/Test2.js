/// <reference types="Cypress" />
/// <reference types="cypress-iframe" />
import 'cypress-iframe'
describe('My test 2', function () {

    it('My first test case', function () {
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
        //iframe
        cy.frameLoaded("#courses-iframe")
        // cy.iframe().find("a[href='mentorship']").eq(0).click()
        // cy.iframe().find("h1[class*='pricing-title']").should("have.length","2")
        // child window
        cy.get('#opentab').then(function (e1) {
            const url = e1.prop('href')
            cy.visit(url)
            cy.origin(url, () => {
                cy.get("ul[class='navbar-nav ml-auto'] a[href='about.html']").click()
            })
        })
    })
})