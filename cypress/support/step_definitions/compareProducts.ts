import { When, Then, Given } from "@badeball/cypress-cucumber-preprocessor";
import 'cypress-mochawesome-reporter/register';

Given("website is working", () => {
    cy.request('http://testobjectv2.westeurope.cloudapp.azure.com/').should((response) => {
        expect(response.status).to.eq(200)
    })
});

Then("comparing items {string} and {string} should be faster than {string} seconds", (carIdA, carIdB, callbackTimeLimit) => {
    const d1 = new Date();
    let ms1 = d1.getMilliseconds();
    cy.request({
        method: 'GET',
        url: 'http://testobjectv2.westeurope.cloudapp.azure.com/api/rest/compare/' + carIdA + ',' + carIdB,
        headers: {
            'X-Oc-Merchant-Id': 'opleiding'
        },
    }).then((response) => {
        expect(response.status).to.eq(200);
        const d2 = new Date();
        let ms2 = d2.getMilliseconds();
        let callbackTime = (ms2 - ms1) / 1000
        cy.log('\nrequest is done in ' + callbackTime + ' seconds')
        expect(callbackTime).to.lessThan(parseFloat(callbackTimeLimit))
        cy.log('Got car:          ' + response.body.data[0].name)
        cy.log('compared to car:  ' + response.body.data[1].name)

    })
});