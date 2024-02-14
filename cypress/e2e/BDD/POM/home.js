class HomePage{

    selector = {

        // Rahul Shetty
       EcommUrl: "https://rahulshettyacademy.com/seleniumPractise/#/",  
       searchProductBox : ".search-keyword",
       searchBtn : '[class="search-button"]',
       productLst : 'h4[class="product-name"]',
       addToCartBtn : '[class="product-action"] button',
      cart : 'img[alt="Cart"]',
      proceedToChkBtn : '[class="action-block"] >  button',
      countryLst : 'select',
      checkBox :'.chkAgree',
      proceedBtn: 'button',


      // Practice Automation
      prcAuto: "https://automationexercise.com/",
      login_singup: 'a[href="/login"]',
      SignUpTxt: ".signup-form> h2",
      signUpName: 'input[name="name"]',
      signUpEMail: 'input[data-qa="signup-email"]',
      signUpBtn: 'button[data-qa="signup-button"]'

    }


    VisitUrl(url){
        cy.visit(url)
    }

    SearchProduct(value){
        cy.get(this.selector.searchProductBox).type(value)
        cy.get(this.selector.searchBtn).click()
    }

    SelectProduct(product){
        cy.get(this.selector.productLst).each((el,i)=>{
            cy.log(el.text())
            let vegitable = el.text().replace(' - 1 Kg', ' ').trim() 
            if (vegitable == product) {
                cy.get(this.selector.addToCartBtn).eq(i).click({ force: true })
            }
        })
    }

    PlaceOrder(){
        cy.get(this.selector.cart).click()
        cy.get(this.selector.proceedToChkBtn).first().click()
        cy.contains('Place Order').click()
        cy.get(this.selector.countryLst).select('India')
        cy.get(this.selector.checkBox).click()
        cy.get(this.selector.proceedBtn).click()
    }

    ClickOnBtn(btn){
        cy.get(btn).click()
    }

    ValidateText(element, value){
        cy.get(element).should('have.text', value)
    }

    SignUpUser(){
        cy.get(this.selector.signUpName).type('Sarika')
        cy.get(this.selector.signUpEMail).type('Sarika.Minskole@test.com')
        cy.get(this.selector.signUpBtn).click()
        cy.contains('Enter Account Information').should('be.visible')
    }

}
export default HomePage