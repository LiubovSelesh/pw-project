import {expect, test} from '@playwright/test'
import { allowedNodeEnvironmentFlags } from 'process'

test.beforeEach(async({page}) => {
    await page.goto('http://localhost:4200/')
    // await page.getByText('Forms').click()
    // await page.getByText('Form Layouts').click()
})

test.describe('Form Layouts page', () => {
    test.beforeEach(async({page}) => {
        await page.getByText('Forms').click()
        await page.getByText('Form Layouts').click()       
    })
    test('input fields', async({page}) => {
        const usingTheGridEmailInput = page.locator('nb-card', {hasText: "Using the Gri"}).getByRole('textbox', {name: "Email"})

        await usingTheGridEmailInput.fill('test@test.com')
        await usingTheGridEmailInput.clear()
        await usingTheGridEmailInput.pressSequentially('test2@test.com', {delay: 200} )

        //generic assertion
        const inputValue = await usingTheGridEmailInput.inputValue()
        expect(inputValue).toEqual('test2@test.com')

        //locator assertion
        await expect(usingTheGridEmailInput).toHaveValue('test2@test.com')

    })


})