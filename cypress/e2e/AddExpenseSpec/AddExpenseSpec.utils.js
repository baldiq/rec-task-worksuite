import { Selectors } from '../../support/selectors'

const selectors = new Selectors()

export const goToPaymentView = () => {
  cy.visit(Cypress.env('payment'))
}

export const openModal = () => {
  selectors.paymentsView.newExpenseBtn().click()
  selectors.addExpense.modal().should('be.visible')
}

export const checkIfVendorIsSelected = vendorName => {
  selectors.addExpense.partnerSection().within(() => {
    selectors.addExpense
      .vendorName()
      .invoke('text')
      .invoke('trim')
      .then(text => {
        expect(text).to.have.length.above(0)
        expect(text).to.contain(vendorName)
      })
  })
}

export const setAmount = amount => {
  selectors.addExpense
    .amountInput()
    .type(String(amount))
    .should('have.value', amount)
}

export const setCurrency = currency => {
  selectors.addExpense.currencyDropdown().select(currency)
}

export const setExpenseName = name => {
  selectors.addExpense.expenseNameInput().type(name)
}

export const setNote = note => {
  selectors.addExpense.note().type(note)
}

export const uploadFile = (fixtureAlias, fileName) => {
  selectors.fileUpload
    .invoiceInput()
    .click()
    .then(() => {
      selectors.fileUpload
        .dropAreaInput()
        .selectFile(`@${fixtureAlias}`, { action: 'drag-drop', force: true })
      selectors.fileUpload.summaryItemTitle().should('contain', fileName)
      selectors.fileUpload.uploadButton().click()
    })
}

export const saveForm = () => {
  selectors.addExpense.sendButton().click()
}

export const openFirstExpense = () => {
  selectors.paymentsView
    .paymentItem()
    .eq(0)
    .within(() => {
      // eq(0) because added expense appears at the top
      selectors.paymentsView.paymentItemTitle().click()
    })
}

export const validateExpenseDetails = (data, fileName) => {
  const { name, totalAmount, note } = data
  selectors.detailsModal.expenseName().should('be.visible').and('contain', name)
  selectors.detailsModal
    .amount()
    .invoke('text')
    .invoke('trim')
    .then(expenseAmount => {
      cy.wrap(parseInt(expenseAmount.replace(',', ''))).should(
        'eq',
        parseInt(totalAmount),
      )
    })
  selectors.detailsModal.paymentDue().should('be.visible')
  selectors.detailsModal.note().should('be.visible').and('contain', note)
  selectors.detailsModal
    .fileName()
    .invoke('text')
    .invoke('trim')
    .should('contain', fileName)
}
