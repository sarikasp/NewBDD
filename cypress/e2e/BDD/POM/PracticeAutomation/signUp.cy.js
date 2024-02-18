import { Given, When, And, Then } from "cypress-cucumber-preprocessor/steps"
import HomePage from "../home"

let selector = new HomePage

let email =`${(Math.random()) * 20}Sarika.Minskole@test.com` 

let userData = undefined 
before(function(){
    cy.fixture('data').then(function(user){
        userData = user
    })
})


Given("Open Practice Automation - Sign up page", () => {
    selector.VisitUrl(selector.selector.prcAuto)
    selector.ClickOnBtn(selector.selector.login_singup)
    selector.ValidateText(selector.selector.SignUpTxt, "New User Signup!")
    selector.SignUpUser(userData.sarika.firstName,email)
})

When("Fill the infomarton for create new User", () => {
    selector.CreateUser(userData.sumit)
})


Then("Validates the User created message", () => {
    selector.ClickOnBtn(selector.selector.login_singup)
    selector.ClickOnBtn(selector.selector.login_singup)
    selector.login(email, userData.sarika)
    
})
