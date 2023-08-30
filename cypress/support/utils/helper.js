import { Selectors } from '../../support/selectors'

const selectors = new Selectors()

export const login = () => {
  cy.visit(Cypress.env('loginUrl'))
}

export const checkVendorName = vendorName => {
  selectors.dashboard
    .vendorName()
    .should('be.visible')
    .and('have.text', vendorName)
}
