describe('traversal method',function(){

    it('day1',function(){

        cy.visit('https://webdriveruniversity.com/Data-Table/index.html')
        //children()
        cy.get('.traversal-drinks-list').children().should('have.length',5)
        //next()
        cy.get('#coffee').next().should('have.attr',"id","tea")
        //prev()
        cy.get('#tea').prev().should('have.attr',"id","coffee")
        //nextAll()
        cy.get('#milk').nextAll().should('have.length',2)
        //prevAll()
        cy.get('#milk').prevAll().should('have.length',2)
        //siblings()
        cy.get('#milk').siblings().should('have.length',4)
    })

    it.only('To get all previous sibling DOM elements within elements until other element,use the prevUntil()command',function(){

        
        cy.visit('https://webdriveruniversity.com/Data-Table/index.html')

        cy.get('#sugar').prevUntil('#coffee').should('have.length',3)

    })

    it.only('To get all previous sibling DOM elements within elements until other element,use the prevUntil()command',function(){

        
        cy.visit('https://webdriveruniversity.com/Data-Table/index.html')

        cy.get('#sugar').prevUntil('#coffee').should('have.length',3)

    })
    //first()
    it.only('To get all previous sibling DOM elements within elements until other element,use the first()command',function(){

        
        cy.visit('https://webdriveruniversity.com/Data-Table/index.html')

        cy.get('.traversal-drinks-list').children().first().should('have.attr','id','coffee')

    })
    //last()
    it.only('To get all previous sibling DOM elements within elements until other element,use the last()command',function(){

        
        cy.visit('https://webdriveruniversity.com/Data-Table/index.html')

        cy.get('.traversal-drinks-list').children().last().should('have.attr','id','sugar')

    })
    //eq()

    it.only('To get all previous sibling DOM elements within elements until other element,use the eq()command',function(){

        
        cy.visit('https://webdriveruniversity.com/Data-Table/index.html')

        cy.get('.traversal-drinks-list').children().eq(2).should('have.attr','id','milk')

    })
     //parent()
    it.only('To get all previous sibling DOM elements within elements until other element,use the parent()command',function(){

        
        cy.visit('https://webdriveruniversity.com/Data-Table/index.html')

        cy.get('#milk').parent().should('have.attr','class','traversal-drinks-list')

    })






})