import {expect, test} from '@playwright/test'
import { NavigationPage } from '../page-objects/navigationPage'
import { FormLayoutPage } from '../page-objects/formlayoutsPage'


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

test('parametrized methods', async({page}) => {
    const navigateTo = new NavigationPage(page)
    const onFormLayoutsPage = new FormLayoutPage(page)

    await navigateTo.formLayoutsPage()
    await onFormLayoutsPage.submitUsingTheGridFomWithCredentialAndSelectOption('test@test.com', 'Welcome1', 'Option 2')
    await onFormLayoutsPage.submitInLineFormWithnameEmailAndCheckbox('John Smith', 'john@test.com', true)

})