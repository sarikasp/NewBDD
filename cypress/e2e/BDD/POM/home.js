class HomePage{

    selector = {
       EcommUrl: "https://rahulshettyacademy.com/seleniumPractise/#/",  
       searchProductBox : ".search-keyword",
       searchBtn : '[class="search-button"]',
       productLst : 'h4[class="product-name"]',
       addToCartBtn : '[class="product-action"] button',
      cart : 'img[alt="Cart"]',
      proceedToChkBtn : '[class="action-block"] >  button',
      countryLst : 'select',
      checkBox :'.chkAgree',
      proceedBtn: 'button'

    }


    VisitUrl(){
        cy.visit(this.selector.EcommUrl)
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


}
export default HomePage