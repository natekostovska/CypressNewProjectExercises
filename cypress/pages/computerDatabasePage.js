class computerDatabasePage {
    elements = {
        addBtn : () => cy.get('#add'),
        nameTxt : () => cy.get('#name'),
        introducedTxt : () => cy.get('#introduced'),
        discontinuedTxt : () => cy.get('#discontinued'),
        companyDropdown : () => cy.get('#company'),
        submitBtn : () => cy.get('[type=submit]'),
        warningMsg : () => cy.get('.warning')
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
}
 
module.exports = new computerDatabasePage();