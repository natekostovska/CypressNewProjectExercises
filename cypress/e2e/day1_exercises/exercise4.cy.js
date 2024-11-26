
describe('Computer database Website Tests', () => {
    const computerDataList=require('../../fixtures/addingComputerDataDriven.json');
    
 

    beforeEach(() => {
        // Visit the page before each test
        cy.visit('https://computer-database.gatling.io/computers');

    });

     // Iterate over the fixture data
     computerDataList.forEach((computerData) => {
        it('Add Computer Test: '+computerData.computerName, () => {
            cy.get('#add').click();
            cy.get('#name').type(computerData.computerName);
            cy.get('#introduced').type(computerData.introduced);
            cy.get('#discontinued').type(computerData.discontinued);
            cy.get('select#company').select(computerData.company);
            cy.get('.actions').find('>input').click();
            cy.get('.alert-message').should('contain.text', 'Done !  Computer ' + computerData.computerName + ' has been created');
        });
    });

});