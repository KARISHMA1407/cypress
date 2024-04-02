describe('Tranverse list',function(){
    it.only('To get DOM element thet match a specific selector,use the filter()command.',function(){
        cy.visit('https://webdriveruniversity.com/Data-Table/index.html')
        cy.get('button').filter('.btn-outline-info').should('have.length',2)


    })

    it.only('To remove DOM element(s)from thr set of elements ,use the not()command.',function(){
        cy.visit('https://webdriveruniversity.com/Data-Table/index.html')
        cy.get('.traversal-button-states').children().not('.disabled').should('have.length',3)


    })

    it.only('To get descendant DOM elementof the selector ,use the find()command.',function(){
       cy.visit('https://webdriveruniversity.com/Data-Table/index.html')
        cy.get('.thumbnail').last().find('#coffee').should('have.text','Coffee')


    })
    it.only('To get the closest ancestor DOM elements ,use the .closest()command.',function(){
        cy.visit('https://webdriveruniversity.com/Data-Table/index.html')
        cy.get('.traversal-drinks-list').closest('div').should('have.class','thumbnail')
        cy.get('.traversal-buttons').closest('div[class="thumbnail"]').should('have.class','thumbnail')


    })

    it.only('To get parent Dom element of elements until other element ,use the parentsUntil()command.',function(){
        cy.visit('https://webdriveruniversity.com/Data-Table/index.html')
         cy.get('#coffee').parentsUntil('.thumbnail').should('have.length',1)
 
 
     })

   







})