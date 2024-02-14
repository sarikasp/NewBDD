import { Given, When, And, Then } from "cypress-cucumber-preprocessor/steps"
import HomePage from "../home"

let selector = new HomePage

Given("Open Practice Automation - Sign up page", () => {
    selector.VisitUrl(selector.selector.prcAuto)
    selector.ClickOnBtn(selector.selector.login_singup)
    selector.ValidateText(selector.selector.SignUpTxt, "New User Signup!")
    selector.SignUpUser()
})

When("Fill the infomarton for create new User", () => {

})


Then("Validates the User created message", () => {

})