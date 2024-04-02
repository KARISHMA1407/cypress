//const { describe } = require("mocha");

describe('tranversal method',function(){
    
    it('To get children of Dom element,use the children() command.',function(){
        cy.visit("http://webdriveruniversity.com/Data-Table/index.html")
        cy.get('.traversal-button-states').children().should('have.length',4)
    })
     
    it('To get previous sibling DOM element within elements,use the prev() command',function(){
        
        cy.visit("http://webdriveruniversity.com/Data-Table/index.html")
        cy.get("#veggie").prev().should('have.text','Figs')
    })

    
    it('To get next sibling DOM element within elements,use the next() command',function(){

        cy.visit("http://webdriveruniversity.com/Data-Table/index.html")
        cy.get("#veggie").next().should('have.text','Asparagus')

    })

    it('To get the next all siblings of DOM element within elements,use the .nextAll()command.', function(){
        cy.visit("http://webdriveruniversity.com/Data-Table/index.html")
        cy.get('#veggie').nextAll().should('have.length',4)
        cy.get("#veggie").nextAll().should('have.length.greaterThan',2);

    })

    it('To get all previous siblings of Dom elements ,use the .prevAll() command.',function(){

        cy.visit("http://webdriveruniversity.com/Data-Table/index.html")
        cy.get('#veggie').prevAll().should('have.length',6)
        cy.get('#veggie').prevAll().should('have.length',5);

    })
})
