/// <reference types="cypress" />
describe('API Testing', () => {
    it('Test Register', () => {
        const requestBody = {
            "email": "sydney@fife",
            "password": "cityslicka"
        };

        cy.request('POST', 'https://reqres.in/api/register', requestBody)
            .then((response) => {
                expect(response.status).to.eq(400);
                expect(response.body).to.have.property('token');
        });
    });
});