class computerDatabasePage {
    elements = {
        addBtn : () => cy.get('#add'),
        nameTxt : () => cy.get('#name'),
        introducedTxt : () => cy.get('#introduced'),
        discontinuedTxt : () => cy.get('#discontinued'),
        companyDropdown : () => cy.get('#company'),
        submitBtn : () => cy.get('[type=submit]'),
        warningMsg : () => cy.get('.warning'),
        searchBox: () => cy.get('#searchbox'),
        searchSubmit: () => cy.get('#searchsubmit'),
        rowCount: () => cy.get('table.computers tbody tr'),
        getMessage: () => cy.get('#main')
    }
    addComputer() {
        this.elements.addBtn().click()
    }
    sendComputerName() {
        this.elements.nameTxt().type('Natasha\'s PC')
    }
    sendIntroducedDate() {
        this.elements.introducedTxt().type('2024-11-11')
    }
    sendDiscontinuedDate() {
        this.elements.discontinuedTxt().type('2024-11-20')
    }
    sendCompany() {
        this.elements.companyDropdown().select('3')
    }
    createComputer() {
        this.elements.submitBtn().click()
    }
    sendSearchText(){
        this.elements.searchBox().type('ACE')
    }
    searchComputers(){
        this.elements.searchSubmit().click()
    }
    lengthOfRowCount(lengthOfRows){
        this.elements.rowCount().should('have.length', lengthOfRows)
    }
    message(){
        this.elements.getMessage().should('contain.text', 'computers found')
    }
}
 
module.exports = new computerDatabasePage();