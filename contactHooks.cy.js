describe('verify the contact us form',function(){

    beforeEach(function(){
        cy.visit('https://webdriveruniversity.com/Contact-Us/contactus.html')

        cy.get('[name="first_name"]').type("Karishma")
        cy.get('[name="last_name"]').type("Maniyar")
        cy.get('[name="email"]').type('karishmammaniyar1611@gmail.com')
        cy.get('[name="message"]').type('I m learning cypress')
    })
    
    it('verify the submite form',function(){

        cy.get('input[type="submit"]').click()
        cy.get('h1').should('have.text',"Thank You for your Message!")
    })

    it('verify the reset functionality',function(){

        cy.get('input[type="reset"]').click()
        cy.get('[name="first_name"]').should('have.text',"")
    })

    afterEach(function(){
        cy.clearAllCookies()
    })

})