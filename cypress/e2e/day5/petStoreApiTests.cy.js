const { faker } = require('@faker-js/faker')
const petData = require('../../fixtures/petData.json')

it('Create new pet', () => {
    let requestBody = require('./models/createPetModel.json')
    requestBody.id = petData.petId
    requestBody.name = petData.petName
    requestBody.category.id = petData.categoryId
    requestBody.category.name = petData.categoryName
    requestBody.status = petData.petStatus
    cy.request('POST', 'https://petstore.swagger.io/v2/pet', requestBody).then((response) => {
        expect(response.status).to.eq(200)
    })
})

it('Get Pet by Id', () => {
    cy.request('GET', 'https://petstore.swagger.io/v2/pet/' + petData.petId).then((response) => {
        expect(response.status).to.eq(200)
        // Assert the response contains the expected user details
        expect(response.status).to.eq(200);
        expect(response.body.name).to.eq(petData.petName);
        expect(response.body.category.id).to.eq(petData.categoryId);
        expect(response.body.category.name).to.eq(petData.categoryName);
        expect(response.body.id).to.eq(petData.petId);
        expect(response.body.status).to.eq(petData.petStatus);
    });
});

it('Update Pet Name and Status', () => {
    let requestBody = require('./models/createPetModel.json')

       requestBody.name=petData.newPetName,
       requestBody.status= petData.newPetStatus
      

    cy.request('PUT', 'https://petstore.swagger.io/v2/pet', requestBody).then((response) => {
        expect(response.status).to.eq(200)      
    
    })

     // Verify if the pet details were updated
     cy.request('GET', 'https://petstore.swagger.io/v2/pet/' + petData.petId).then((response) => {
        expect(response.body.name).to.eq(petData.newPetName);
        expect(response.body.status).to.eq(petData.newPetStatus);
      })
    })

        // Delete Pet
  it('Delete Pet', () => {
    cy.request('DELETE','https://petstore.swagger.io/v2/pet/'+petData.petId).then((response) => {
      // Assert the response code is 200 (success)
      expect(response.status).to.eq(200);
  })
  })

  it('Validated that the pet is deleted', () => {
    
    let options = {
        method: 'GET',
        url: 'https://petstore.swagger.io/v2/pet/'+petData.petId,
        failOnStatusCode: false
    }
    cy.request(options).then((response) =>{
        expect(response.status).to.eq(404)
        expect(response.body.type).to.eq("error")
        expect(response.body.message).to.eq("Pet not found")
    })
})
