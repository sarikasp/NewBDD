// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
Cypress.Commands.add('login', (email, userData) => { 
    cy.get('[data-qa="login-email"]').type(email)
    cy.get('[data-qa="login-password"]').type(userData.password)
    cy.get('[data-qa="login-button"]').click()
    cy.get('h1> span').first().should('have.text', 'Automation')
 })


 Cypress.Commands.add('loginHRM', (username, password) => { 
    cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
    cy.get('[name="username"]').type(username)
    cy.get('[name="password"]').type(password)
    cy.get('[type="submit"]').click()
    cy.get('.oxd-text--h6').should('have.text', 'Dashboard')
 })

 Cypress.Commands.add('loginPracAutSite', (username, password) => { 
    cy.visit("https://practice.automationtesting.in/my-account/")
    cy.get('#username').type(username)
    cy.get('#password').type(password)
    cy.get('[name="login"]').click()
    let user =  username.split('@')[0]
    cy.get('p strong').should('have.text', user)
 })


 

// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })