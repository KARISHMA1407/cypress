//const { it } = require("mocha")

describe('loacting elements',function(){
    it('find single element',function(){
        cy.visit('https://webdriveruniversity.com/Contact-Us/contactus.html')
        cy.get('h2[name="contactme"]').should('exist')
    })

    it('find the multiple element',function(){
        cy.visit('https://webdriveruniversity.com/Contact-Us/contactus.html')
        cy.get('input[type="text"]').should('have.length',3)
        cy.get('input[type="submit"]').should('have.length.greaterThan',0)
    })

    it('find element by class name',function(){
        cy.visit('https://webdriveruniversity.com/Contact-Us/contactus.html')
        cy.get('.text-center').should('have.length',2)
    })

    it('find element by css selector',function(){

        cy.visit('https://webdriveruniversity.com/Contact-Us/contactus.html')
        cy.get('h2[name="contactme"]').should('have.text','CONTACT US')
    })

    it('find element by id',function(){

      
            cy.visit('https://webdriveruniversity.com/Contact-Us/contactus.html')
            cy.get('#contact_form').should('exist')
    })
    it('find element by attribute',function(){

        cy.visit('https://webdriveruniversity.com/Contact-Us/contactus.html')
        cy.get('[name="first_name"]').should('exist')

    })

    it('find element by tag name',function(){

        cy.visit('https://webdriveruniversity.com/Contact-Us/contactus.html')
        cy.get('h2').should('exist').should('have.text','CONTACT US')


    })

    
})
