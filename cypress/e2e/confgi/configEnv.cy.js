describe("Environment COnfuguration", () => {

    it("Testing with different config file", () => {
        cy.visit("")
        cy.log("Printing the username: "
        + Cypress.env('username'))
    })
})




// cy.visit("https://www.uat1.amzon.com")
// cy.visit("https://www.uat3.google.com")

// First Way
// npx cypress open --config-file stag.config.js
// npx cypress open --config-file prod.config.js



// Second Way
// package.json

// Third Way
// create env file