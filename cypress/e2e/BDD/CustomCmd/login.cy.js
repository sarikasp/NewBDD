import {Given} from "cypress-cucumber-preprocessor/steps"

Given("Visit Orange HRM sites & login with Custom command", ()=>{
    cy.loginHRM('Admin', 'admin123')
})


Given('Visit Practice Automation Site login with {string} and {string} & Dashboard should be visible', (username, password)=> {
    cy.loginPracAutSite(username, password)
})
