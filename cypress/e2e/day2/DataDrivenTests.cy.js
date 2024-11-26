describe('Computer Database Tests', () => {
    beforeEach(function () {
      cy.fixture('addingComputerDataDriven.json').as('computersData')
    })
    it('Data Driven Testing', function () {    
      this.computersData.forEach((computer) => {
      cy.visit('https://computer-database.gatling.io/computers')
      cy.get('#add').click()
      cy.get('#name').type(computer.computerName)
      cy.get('#introduced').type(computer.introduced)
      cy.get('#discontinued').type(computer.discontinued)
      cy.get('#company').select(computer.company)
      cy.get('[type=submit]').click()
      cy.get('.warning').should('have.text','Done !  Computer ' + computer.computerName + ' has been created')
      })
    })
    const computersList = require('../../fixtures/addingComputerDataDriven.json')
    computersList.forEach((computer) => {
        it('Data Driven Testing - ' + computer.computerName, () => {
            cy.visit('https://computer-database.gatling.io/computers')
            cy.get('#add').click()
            cy.get('#name').type(computer.computerName)
            cy.get('#introduced').type(computer.introduced)
            cy.get('#discontinued').type(computer.discontinued)
            cy.get('#company').select(computer.company)
            cy.get('[type=submit]').click()
            cy.get('.warning').should('have.text','Done !  Computer ' + computer.computerName + ' has been created')
        })
    })
  })