//const { describe } = require("mocha");

const { afterEach } = require("mocha")

describe("verify the contactus form",function(){

    beforeEach(function(){

        cy.visit("https://webdriveruniversity.com/Contact-Us/contactus.html")
        cy.get('input[name="last_name"]').type("Maniyar")
        cy.get('input[name="first_name"]').type("Karishma")
        cy.get('input[name="email"]').type("karishmamaniyar1611@gmail.com")
        cy.get('[name="message"]').type('I am Leraning javascript')

    })

        it('verify the submit form',function(){

            cy.get('input[class="contact_button"]').click()
            cy.get('h1').should("be.Visible",'Thank You for your Message!')


        })

        it('verify the reset button',function(){

            cy.get("input[class='contact_button']").click()

            cy.get('[name="first_name"]').should('have.text',"")

        })

        afterEach(function(){
            cy.clearAllCookies()
        })

})