import {Given, When, And, Then} from "cypress-cucumber-preprocessor/steps"

Given("Visit Orange HRM site", ()=>{
    cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
    cy.wait(3000)
})

When("Enter Username and Password", ()=>{
    cy.get('[name="username"]').type("Admin")
    cy.get('[name="password"]').type('admin123')
})

And("Click on login button", ()=>{
    cy.get('[type="submit"]').click()
})


Then("Validate the {string}", (title)=>{
    cy.get('.oxd-text.oxd-text--h6').should('have.text', title)
})

When("Enter invalid Username and Password", ()=>{
    cy.wait(3000)
    cy.get('[name="username"]').type("Admin123")
    cy.get('[name="password"]').type('admin')
})


Then("Validate the Error", ()=>{
    cy.get('.oxd-alert-content-text').should('have.text', "Invalid credentials")
})


