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
      signUpBtn: 'button[data-qa="signup-button"]',
      mrsBtn: '#id_gender2',
      password: '#password',
      days: '#days',
      months: '#months',
      years: '#years',
      newsletter : '#newsletter',
      optin: '#optin',
      first_Name:'#first_name',
      last_Name: '#last_name',
      company: '#company',
      address: '#address1',
      country: '#country',
      state: '#state',
      city:'#city',
      zipcode: '#zipcode',
      mobileNo: '#mobile_number',
      createBtn: '[data-qa="create-account"]',
      createAcMsg: '.title b'
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

    SignUpUser(email){
        cy.get(this.selector.signUpName).type('Sarika')
        cy.get(this.selector.signUpEMail).type(email)
        cy.get(this.selector.signUpBtn).click()
        cy.contains('Enter Account Information').should('be.visible')
    }

    CreateUser(){
        cy.get(this.selector.mrsBtn).click()
        cy.get(this.selector.password).type('@Minskole12')
        cy.get(this.selector.days).select(9)
        cy.get(this.selector.months).select('8')
        cy.get(this.selector.years).select('1998')
        cy.get(this.selector.newsletter).check()
        cy.get(this.selector.optin).click()
        cy.get(this.selector.first_Name).type('Sarika')
        cy.get(this.selector.last_Name).type('Pansare')
        cy.get(this.selector.company).type('Apexon')
        cy.get(this.selector.address).type('KL, Malaysia')
        cy.get(this.selector.country).select('India')
        cy.get(this.selector.state).type('Maharashtra')
        cy.get(this.selector.city).type('Nashik')
        cy.get(this.selector.zipcode).type(422012)
        cy.get(this.selector.mobileNo).type(4663597123)
        cy.get(this.selector.createBtn).click()
        cy.get(this.selector.createAcMsg).should('have.text', 'Account Created!')
        cy.get('.title').next('p').should('have.text', 'Congratulations! Your new account has been successfully created!')
    }
 
}
export default HomePage