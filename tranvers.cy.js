//const { describe } = require("mocha");

describe('by using traverse element',function(){

    it('using first Dom element by first() command',function(){

        cy.visit('https://webdriveruniversity.com/Data-Table/index.html')
        cy.get('.traversal-food-list').children().first().should('have.text',"Fruits")
    })

    it('To get the last element of Dom by using .last() method',function(){

        cy.visit('https://webdriveruniversity.com/Data-Table/index.html')
        cy.get('.traversal-food-list').children().last().should('have.text',"Lentils")
    })

    it('To get a DOM element at a specific index, use the .eq() command.',function(){

        cy.visit('https://webdriveruniversity.com/Data-Table/index.html')
        cy.get('.traversal-food-list').children().eq(3).should('have.text',"Blackberries")
    })

    it('To get children of DOM elements, use the .children() command.',function(){

        cy.visit('https://webdriveruniversity.com/Data-Table/index.html')
        cy.get('.traversal-drinks-list').children().should('have.length',5)
    })

    it('To get the previous sibling DOM element within elements, use the .prev() command.',function(){

        cy.visit('https://webdriveruniversity.com/Data-Table/index.html')
        cy.get('#milk').prev().should('have.text',"Tea")
    })

    it('To get the previous sibling DOM element within elements, use the .next() command.',function(){

        cy.visit('https://webdriveruniversity.com/Data-Table/index.html')
        cy.get('#milk').next().should('have.text',"Espresso")
    })
})