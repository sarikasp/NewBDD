import { Given, When } from "cypress-cucumber-preprocessor/steps"



Given("Enter the data in fields which are Inside the Shadow DOM: 1st way", () => {
  cy.visit('https://www.lambdatest.com/selenium-playground/shadow-dom')
//   cy.get('[name="username"]').type('Lambda Test')
  cy.get('shadow-signup-form').shadow().find('[name="username"]').type('Lambda Test')
  cy.get('shadow-signup-form').shadow().find('[name="email"]').type('LambdaTest@test.com')
  cy.get('shadow-signup-form').shadow().find('[name="password"]').type('LambdaTest@12')
  cy.get('shadow-signup-form').shadow().find('[name="confirm_password"]').type('LambdaTest@12')
  cy.get('shadow-signup-form').shadow().find('.btn-primary').click()
})


When("Enter the data in fields which are Inside the Shadow DOM: 2nd way", () => {
    cy.visit('https://www.lambdatest.com/selenium-playground/shadow-dom')
    cy.get('[name="username"]').type('Lambda Test')
    cy.get('.col-8').eq(2).find('[name="email"]').type('LambdaTest@test.com')
    cy.get('[name="password"]').type('LambdaTest@12')
    cy.get('[name="confirm_password"]').type('LambdaTest@12')
    cy.get('.btn-primary').click()
})

