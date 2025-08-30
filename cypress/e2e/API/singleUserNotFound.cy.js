/// <reference types="cypress" />
describe('API Testing',() => {
    it('Test Single User Not Found',() =>{
        cy.request('GET','https://reqres.in/api/users/23')
        .then((response) => {
            expect(response.status).to.eq(404)
            expect(response.body).to.not.be.null
        })
    })
})