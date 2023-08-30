import { Selectors } from '../selectors'

const selectors = new Selectors()

export const openDatepickerSelectNextDay = () => {
  selectors.datePicker.input().click()
  selectors.datePicker.activeDayToday().next().click()
}
