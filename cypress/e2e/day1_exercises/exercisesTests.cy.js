/// <reference types="cypress" />
import { faker } from '@faker-js/faker';
describe('Computer database Website Tests', () => {

    let computerUsername=faker.internet.username()
    let introducedDate=faker.date.past(1) // Generates a random date from the past 1 year
    let discontinuedDate=faker.date.future(2) // Generates a random date from the future 2 years
    let computerDataDrivenList;
    
    // Load the fixture file before tests
  before(() => {
    cy.fixture('fixtures/addingComputerDataDriven.json').then((data) => {
        console.log(data)
      // Store the loaded data to use later in the tests
      computerDataDrivenList = data;
    });
  });

    beforeEach(() => {
        // Visit the page before each test
        cy.visit('https://computer-database.gatling.io/computers');

    });

    it('Visits Computer database and Checks Title', () => {
        cy.title().should('eq', 'Computers database');
        // cy.get('.fill').should('contain.text', 'Computer database');
    });

    it('Add a new computer and verify the message that the computer is added', () => {
        cy.get('#add').click()
        cy.get('#name').type(computerUsername)
        cy.get('#introduced').type(introducedDate.toISOString().split('T')[0])
        cy.get('#discontinued').type(discontinuedDate.toISOString().split('T')[0])
        cy.get('select#company').select('Lincoln Laboratory');
        cy.get('.actions').find('>input').click()
        cy.get('.alert-message').should('contain.text','Done !  Computer '+computerUsername+' has been created')
    });

    it('Should search computers by name and verify the number of items', () => {

        // Search for 'ACE'
        cy.get('input#searchbox').type('ACE');
        cy.get('input#searchsubmit').click();

        // Get the number of items in the table
        cy.get('table.computers.zebra-striped tbody tr').should('have.length', 6); // Adjust based on actual number

        // Verify the search result message
        cy.contains('6 computers found').should('be.visible'); // Adjust based on actual message
    });

    it('Search for computers containing ACE in their name', () => {
        let resultCount
        cy.visit('https://computer-database.gatling.io/computers')
        cy.get('#searchbox').type('ACE')
        cy.get('#searchsubmit').click()
        cy.get('table.computers tbody tr').should('have.length', 6)
        cy.get('#main').should('contain.text', 'computers found').then((elm) => {
          resultCount = parseInt(elm.text().split(' ')[0])
          cy.get('table.computers tbody tr').should('have.length', resultCount)
        })
      });

 
});