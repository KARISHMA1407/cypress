before(function(){
    cy.log("i will run at the first")
})

after(function(){
      cy.log("i will run at last")
})

beforeEach(function(){
    cy.log("i will run after every test cas e")
})

it('test case one',function(){
    cy.log("test case one pass")

})

it('test case two',function(){
    cy.log('test case two')
})