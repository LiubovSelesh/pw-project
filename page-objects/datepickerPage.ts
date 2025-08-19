import { Page, expect } from '@playwright/test'

export class DatepickerPage{

    private readonly page: Page

    constructor(page: Page){
        this.page = page
    }

    async selectCommonDatePickerDateFromToday(numberOfDaysFromtoday: number){
        const calendarInputField = this.page.getByPlaceholder('Form Picker')
        await calendarInputField.click()
        const dateToAseert = await this.selectDateInTheCalendar(numberOfDaysFromtoday)
        await expect(calendarInputField).toHaveValue(dateToAseert)
    }

    async selectDatePickerWithRangeFromToday(startDayFromToday: number, endtDayFromToday: number){
        const calendarInputField = this.page.getByPlaceholder('Range Picker')
        await calendarInputField.click()
        const dateToAseertStart = await this.selectDateInTheCalendar(startDayFromToday)
        const dateToAseertEnd = await this.selectDateInTheCalendar(endtDayFromToday)
        const dateToAseert = `${dateToAseertStart} - ${dateToAseertEnd}`
        await expect(calendarInputField).toHaveValue(dateToAseert)
    
    }

    private async selectDateInTheCalendar(numberOfDaysFromtoday: number){
        let date = new Date()
        date.setDate(date.getDate() + numberOfDaysFromtoday)
        const expectedDate = date.getDate().toString()
        const expectedMonthShot =  date.toLocaleString('En-US', {month: 'short'})
        const expectedMonthLong =  date.toLocaleString('En-US', {month: 'long'})
        const expectedYear =  date.getFullYear()
        const dateToAseert = `${expectedMonthShot } ${expectedDate}, ${expectedYear}`
            
        
        let calendarMonthAndYear = await this.page.locator('nb-calendar-view-mode').textContent()
        const expectedMonthAndYear = ` ${expectedMonthLong} ${expectedYear}`
        while(!calendarMonthAndYear.includes(expectedMonthAndYear)){
            await this.page.locator('nb-calendar-pageable-navigation [data-name="chevron-right"]').click()
            calendarMonthAndYear = await this.page.locator('nb-calendar-view-mode').textContent()
        
        }
        // await this.page.locator('[class="day-cell ng-star-inserted"]').getByText(expectedDate, {exact: true}).click()
        
        await this.page.locator('.day-cell.ng-star-inserted').getByText(expectedDate, {exact: true}).click()
                                  
        return dateToAseert
    }
}