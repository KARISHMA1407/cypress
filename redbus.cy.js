//import { describe } from "mocha";

describe("red bus",()=>{

    it('red bus india',async({page})=>{


    cy.visit('https://www.redbus.in/')

    cy.get("#src").type("pune")
    cy.get('#src').should('have.value','pune')
})

})