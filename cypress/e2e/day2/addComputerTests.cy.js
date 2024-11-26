import computerDatabasePage from '../../pages/computerDatabasePage'
 
describe('Add Computer Tests', () => {
    require('../../utilities/testSetup.cy')
    it('Verify that new computer is added', () => {
        computerDatabasePage.addComputer()
        computerDatabasePage.sendComputerName()
        computerDatabasePage.sendIntroducedDate()
        computerDatabasePage.sendDiscontinuedDate()
        computerDatabasePage.sendCompany()
        computerDatabasePage.createComputer()
        computerDatabasePage.elements.warningMsg().should('have.text','Done !  Computer Natasha\'s PC has been created')
      })
})