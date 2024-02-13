import { Given, When, And, Then } from "cypress-cucumber-preprocessor/steps"
import HomePage from "../home"

let selector = new HomePage

Given("Open E-Commerce Sites", () => {
    selector.VisitUrl()
})

When("Search products which is start from {string}", (value) => {
    selector.SearchProduct(value)
})

And("Add to Cart {string}", (product) => {
    cy.wait(3000)
    selector.SelectProduct(product)
})

When("Place orders and select country", () => {
    selector.PlaceOrder()
})

Then("Validates the Thank you message", () => {
    cy.contains("Thank you, your order has been placed successfully You'll be redirected to Home page shortly!!").should('be.visible')
})

