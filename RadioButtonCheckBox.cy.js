//const { describe } = require("mocha");

describe('Radio Buttons',function(){

    this.beforeEach(function(){

        cy.visit('https://webdriveruniversity.com/Dropdown-Checkboxes-RadioButtons/index.html')
    })

    it('verify the radio button',function(){

    //     cy.get('input[value="green"]').click()
    //     cy.get('input[value="green"]').should('be.checked')
    //     cy.get('input[value="green"]').should('not.be.checked')
    // })

   
    // })
    cy.get('#radio-buttons').children().filter('input[type="radio"]').each(function (el) {
        cy.wrap(el).check()
        cy.wrap(el).should('be.checked')
    

    })
    })

    it('verify the functionality of checkbox',function(){

        cy.get('input[type="checkbox"]').each(function(el){

            cy.wrap(el).check().should('be.checked')
            cy.wrap(el).uncheck().should('not.be.checked')
        })
    })
})
