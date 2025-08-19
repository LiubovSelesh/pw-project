import {expect, test} from '@playwright/test'
import { NavigationPage } from '../page-objects/navigationPage'
import { FormLayoutPage } from '../page-objects/formlayoutsPage'
import { DatepickerPage } from '../page-objects/datepickerPage'



test.beforeEach( async ({page}) => {
    await page.goto('http://localhost:4200/')
})

test('navigation to form page', async({page}) => {
    const navigateTo = new NavigationPage(page)
    await navigateTo.formLayoutsPage()
    await navigateTo.datepickerPage()
    await navigateTo.smartTablePage()
    await navigateTo.toastrPage()
    await navigateTo.tooltipPage()
})

test(' ', async({page}) => {
    const navigateTo = new NavigationPage(page)
    const onFormLayoutsPage = new FormLayoutPage(page)
    const onDatePickerPage = new DatepickerPage(page)

    await navigateTo.formLayoutsPage()
    await onFormLayoutsPage.submitUsingTheGridFomWithCredentialAndSelectOption('test@test.com', 'Welcome1', 'Option 2')
    await onFormLayoutsPage.submitInLineFormWithnameEmailAndCheckbox('John Smith', 'john@test.com', false)
    await navigateTo.datepickerPage()
    await onDatePickerPage.selectCommonDatePickerDateFromToday(5)
    await onDatePickerPage.selectDatePickerWithRangeFromToday(5, 6)


})