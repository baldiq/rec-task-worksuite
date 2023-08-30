import Selectors from '../selectors/Selectors'

class Datepicker {
    selectNextDay() {
        Selectors.datePicker.input().click().then(() => {
            Selectors.datePicker.activeDayToday().next().click()
          })
    }
}

export default new Datepicker()