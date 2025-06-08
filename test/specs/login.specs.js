import { expect, browser, $ } from '@wdio/globals'

describe('My Login application', () => {
    
    
    it('User logs in and logs out successfully', async () => {
        
        await browser.url('https://practicesoftwaretesting.com/auth/login')


        // LOGIN STEPS

        await $('[id="email"]').setValue('customer2@practicesoftwaretesting.com');
        await $('[id="password"]').setValue('welcome01');
        await $('[value="Login"]').click();


        // LOGOUT STEPS

        await $('//*[@id="menu"]').click();

        await $('//*[@id="menu"]').waitForDisplayed();

        await $('/html/body/app-root/app-header/nav/div/div/ul/li[4]/ul/li[7]/a').click();

        await expect(browser).toHaveUrl('https://practicesoftwaretesting.com/auth/login');


        })


})

