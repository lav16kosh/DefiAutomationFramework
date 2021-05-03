/// <reference types="Cypress" />

import FeedbackPage from "../pageObjects/FeedbackPage"

describe('Admin Portal', () => {

  before(function () {
    cy.fixture('example').then(function (data) {

      globalThis.data = data
    })
  })

  it('Submit Feedback', () => {
    const feedbackPage=  new FeedbackPage()
    
    cy.visit(Cypress.env('url'))
    feedbackPage.getName().type(globalThis.data.name) 
    feedbackPage.getAddress1().type(globalThis.data.address1)
    feedbackPage.getAddress2().type(globalThis.data.address2)
    feedbackPage.getAddress3().type(globalThis.data.address3)
    feedbackPage.getPhone().type(globalThis.data.mobileno)
    feedbackPage.getEmail().type(globalThis.data.email)
    feedbackPage.getGrievance().type(globalThis.data.grievance)
    feedbackPage.getPostalCode().type(globalThis.data.pincode)

  })

  it("Multiple data sets", () => {
    cy.wait(6000)


    globalThis.data.postalcode.forEach(function (code) {
      cy.get("#txtPinCode").clear()
      cy.get("#txtPinCode").clear().type(code)
    })
  })
})