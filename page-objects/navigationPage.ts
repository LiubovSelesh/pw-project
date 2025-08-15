import { Locator, Page } from "@playwright/test"

export class NavigationPage {

    readonly page: Page
    readonly formLayoutsMenuItem: Locator
    readonly datepickerMenuItem: Locator
    readonly smartTableMenuItem: Locator
    readonly toastrMenuItem: Locator
    readonly tooltipMenuItem: Locator
    

    constructor(page: Page){
        this.page = page
        this.formLayoutsMenuItem = page.getByText('Form Layouts')
        this.datepickerMenuItem = page.getByText('Datepicker')
        this.smartTableMenuItem = page.getByText('Smart Table')
        this.toastrMenuItem = page.getByText('Toastr')
        this.tooltipMenuItem = page.getByText('Tooltip')
        
    }

    async formLayoutsPage() {
        // await this.page.getByText('Forms').click()
        await this.selesctGroupMenuItem('Forms')
        // await this.page.getByText('Form Layouts').click()
        await this.formLayoutsMenuItem.click()
    }

    async datepickerPage() {
        // await this.page.getByText('Forms').click()
        await this.selesctGroupMenuItem('Forms')
        await this.page.waitForTimeout(1000)
        // await this.page.getByText('Datepicker').click()
        await this.datepickerMenuItem.click()
    }

    async smartTablePage() {
        // await this.page.getByText('Tables & Data').click()
        await this.selesctGroupMenuItem('Tables & Data')
        // await this.page.getByText('Smart Table'.click()
        await this.smartTableMenuItem.click()
    }

    async toastrPage() {
        // await this.page.getByText('Modal & Overlays').click()
        await this.selesctGroupMenuItem('Modal & Overlays')
        // await this.page.getByText('Toastr').click()
        await this.toastrMenuItem.click()
    }

    async tooltipPage() {
        // await this.page.getByText('Modal & Overlays').click()
        await this.selesctGroupMenuItem('Modal & Overlays')
        // await this.page.getByText('Tooltip').click()
        await this.tooltipMenuItem.click()
    }

    private async selesctGroupMenuItem(groupItemTitle: string) {
        const groupMenuItem = this.page.getByTitle(groupItemTitle)
        const expandedState = await groupMenuItem.getAttribute('aria-expanded')
        if(expandedState == "false") 
            await groupMenuItem.click()

    }

}