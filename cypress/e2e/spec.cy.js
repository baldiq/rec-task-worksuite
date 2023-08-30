import expenseDataSet from '../../cypress/fixtures/expenseDataSet.json'
import Datepicker from '../../cypress/support/components/Datepicker'
import Selectors from '../../cypress/support/selectors/Selectors'

describe('Spec #1', function () {

  const fileName = 'samplePdf.pdf'

  before(function () {
    cy.fixture(`../fixtures/${fileName}`).as('samplePdf')

    cy.visit(Cypress.env('loginUrl')).then(() => {
      cy.get('.vendor-name').should('be.visible').and('have.text', expenseDataSet.vendorName)
    })
  })

  it('Should add new expense', function () {

    // Go to payments view
    cy.visit(Cypress.env('payment'))
    
    // click the add new expense button
    Selectors.paymentsView.newExpenseBtn().click()
    Selectors.addExpense.modal().should('be.visible')

    // find the partner section and check if selected vendor is visible
    Selectors.addExpense.partnerSection().within(() => {
      Selectors.addExpense.vendorName()
        .invoke('text')
        .invoke('trim')
        .then(
          (text) => {
            expect(text).to.have.length.above(0)
            expect(text).to.contain(expenseDataSet.vendorName)
          }
        )
    })

    // set an amount in the amount input
    Selectors.addExpense.amountInput()
      .type(String(expenseDataSet.totalAmount))
      .should('have.value', expenseDataSet.totalAmount)
    Selectors.addExpense.currencyDropdown().select(expenseDataSet.currency)

    // set expense name
    Selectors.addExpense.expenseNameInput().type(expenseDataSet.name)

    // set note
    Selectors.addExpense.note().type(expenseDataSet.note)

    // set payment due date to the next day
    Datepicker.selectNextDay()

    // upload the pdf file
    Selectors.fileUpload.invoiceInput().click().then(() => {
      Selectors.fileUpload.dropAreaInput().selectFile('@samplePdf', { action: 'drag-drop', force: true })
      Selectors.fileUpload.summaryItemTitle().should('contain', fileName)
      Selectors.fileUpload.uploadButton().click()
    })

    // save the form
    Selectors.addExpense.sendButton().click()

    // the user can see new payments in a payments list
    Selectors.paymentsView.paymentItem().eq(0).within(() => {
      Selectors.paymentsView.paymentItemTitle().click()
    })

    // check the values in the view details modal
    Selectors.detailsModal.expenseName().should('be.visible').and('contain', expenseDataSet.name)
    Selectors.detailsModal.amount().invoke('text').invoke('trim').then((value) => {
      cy.wrap(parseInt(value.replace(',', ''))).should('eq', parseInt(expenseDataSet.totalAmount))
    })
    Selectors.detailsModal.paymentDue().should('be.visible')
    Selectors.detailsModal.note().should('be.visible').and('contain', expenseDataSet.note)
    Selectors.detailsModal.fileName().invoke('text').invoke('trim').should('contain', fileName)
  })
})
