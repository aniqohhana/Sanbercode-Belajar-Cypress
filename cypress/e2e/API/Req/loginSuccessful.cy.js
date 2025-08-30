/// <reference types="cypress" />
describe('API Testing', () => {
    it('Test Login', () => {
        const requestBody = {
            "email": "eve.holt@reqres.in",
            "password": "cityslicka"
        };

        cy.request('POST', 'https://reqres.in/api/login', requestBody)
            .then((response) => {
                expect(response.status).to.eq(200);
                expect(response.body).to.have.property('token');
        });
    });
});