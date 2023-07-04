import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import 'cypress-mochawesome-reporter/register';

Given("I am on the Sogeti Leasing Solutions site", () => {
    cy.visit('http://testobjectv2.westeurope.cloudapp.azure.com/')
});

When("I log in on the Sogeti Leasing Solutions site", () => {
    cy.get('a[title="My Account"]').click()
    cy.contains('Login').click()
    cy.get('#input-email').type('ahmad.al-azizi@sogeti.com')
    cy.get('#input-password').type('Ab1234@')
    cy.get('[type="submit"]').click()

});

Then("I should be able to place an order for a new car", () => {
    cy.contains('Dog').click()
    cy.contains('Very Small Dogs').click()
    cy.contains('Continental Toy Spaniel').click({ force: true })
    cy.get('#button-cart').click()
    cy.get('[class="alert alert-success alert-dismissible"]').should('be.visible')

    cy.get('#cart').click()
    cy.contains('View Cart').click()
    cy.contains('Checkout').click()

    cy.get('#button-payment-address').should('be.visible').click()
    cy.get('#button-shipping-address').should('be.visible').click()
    cy.get('[name="comment"]').type('Doorbell is broken, please knock when delivering')
    cy.get('#button-shipping-method').click()
    cy.get('[name="agree"]').should('be.visible').click()
    cy.get('#button-payment-method').click()
    cy.get('#button-confirm').should('be.visible').click()
    cy.contains('Your order has been placed!').should('be.visible')
    cy.contains('Continue').click()
});