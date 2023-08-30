import expenseDataSet from '../../fixtures/expenseDataSet.json'
import { openDatepickerSelectNextDay } from '../../support/utils/datepicker'
import { login, checkVendorName } from '../../support/utils/helper'
import {
  goToPaymentView,
  openModal,
  checkIfVendorIsSelected,
  setAmount,
  setCurrency,
  setExpenseName,
  setNote,
  uploadFile,
  saveForm,
  openFirstExpense,
  validateExpenseDetails,
} from './AddExpenseSpec.utils'

const FILE_NAME = 'samplePdf.pdf'

describe('Test the process of saving new expense', () => {
  before(() => {
    cy.fixture(`../fixtures/${FILE_NAME}`).as('samplePdf')
    login()
    checkVendorName(expenseDataSet.vendorName)
  })

  it('Should add new expense', () => {
    goToPaymentView()
    openModal()
    checkIfVendorIsSelected(expenseDataSet.vendorName)
    setAmount(expenseDataSet.totalAmount)
    setCurrency(expenseDataSet.currency)
    setExpenseName(expenseDataSet.name)
    setNote(expenseDataSet.note)
    openDatepickerSelectNextDay()
    uploadFile('samplePdf', FILE_NAME)
    saveForm()
    openFirstExpense()
    validateExpenseDetails(expenseDataSet, FILE_NAME)
  })
})
