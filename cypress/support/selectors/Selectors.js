// In general I would go for a different classes for each component,
// but for now let's keep it in one plaace
class Selectors { 

    paymentsView = {
        newExpenseBtn: () => cy.get('.action-bar a:nth-child(1) span'),
        paymentItem: () => cy.get('.payment-list .payment-item'),
        paymentItemTitle: () => cy.get('.payment-item__name')
    }

    addExpense = {
        modal: () => cy.get('.document-modal.add-payment-modal'),
        partnerSection: () => cy.get('.add-payment-modal__select-partner.row'),
        vendorName: () => cy.get('.selected-vendor'),
        amountInput: () => cy.get('[placeholder="Amount"]'),
        currencyDropdown: () => cy.get('.currency select'),
        expenseNameInput: () => cy.get('#invoiceNumber'),
        sendButton: () => cy.get('.modal-footer button').contains('Send'),
        note: () => cy.get('textarea.add-payment-modal__note')
    }

    datePicker = {
        input: () => cy.get('[data-key="payment_due"]'),
        activeDayToday: () => cy.get('.picker-open .day.active.today')
    }

    fileUpload = {
        invoiceInput: () => cy.get('r-input-file[label^="\'PAYMENTS_ADD_MODAL_NEW_UPLOAD_INVOICE\'"]'),
        dropAreaInput: () => cy.get('#fsp-fileUpload'),
        summaryItemTitle: () => cy.get('.fsp-summary__item [title]'),
        uploadButton: () => cy.get('[data-e2e="upload"]')
    }

    detailsModal = {
        expenseName: () => cy.get('.view-payment-modal__name'),
        amount: () => cy.get('.view-payment-modal__due-and-amount r-currency div span:nth-child(1)'),
        paymentDue: () => cy.get('.view-payment-modal__payment-due'),
        note: () => cy.get('.view-payment-modal__note p'),
        fileName: () => cy.get('.view-payment-modal__file a:not(.ng-hide) p')
    }

}

export default new Selectors()

