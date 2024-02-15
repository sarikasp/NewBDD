import { Given, When, And, Then } from "cypress-cucumber-preprocessor/steps"
import HomePage from "../home"

let selector = new HomePage

let email =`${(Math.random()) * 20}Sarika.Minskole@test.com` 

Given("Open Practice Automation - Sign up page", () => {
    selector.VisitUrl(selector.selector.prcAuto)
    selector.ClickOnBtn(selector.selector.login_singup)
    selector.ValidateText(selector.selector.SignUpTxt, "New User Signup!")
    selector.SignUpUser(email)
})

When("Fill the infomarton for create new User", () => {
    selector.CreateUser()
})


Then("Validates the User created message", () => {

})
