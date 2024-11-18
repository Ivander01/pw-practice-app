import {test, expect} from '@playwright/test'


test.beforeEach(async({page})=>{
    await page.goto('http://localhost:4200/')
    await page.getByText('Forms').click()
    await page.getByText('Form Layouts').click()
    
})

// test('the first test',async ({page}) => {
//     await page.getByText('Form Layouts').click()

// })

// test('navigate to datepicker page',async ({page}) => {
//     await page.getByText('Datepicker').click()

// })

// test.describe('suite1',() => {
//     test.beforeEach(async({page})=>{
//         await page.getByText('Forms').click()        
//     })

//     test('the first test',async ({page}) => {
//         await page.getByText('Form Layouts').click()
//     })

// })


// test('the first test',() => {

// })

// test('the first test',() => {

// })

// test('the first test',() => {

// })

// test.describe('test suite 1', () => {
//     test('the first test',() => {

//     })

// })

test('Locator syntax rules', async({page}) => {
    //By Tag name
    await page.locator('input').first().click()

    //By ID - the hashtag indicates its an ID
    page.locator('#inputEmail')

    //By Class value - the dot is the indicator
    page.locator('.shape-recatngle')

    //By attribute
    page.locator('[placeholder="Email"]')

    //By entire class value (full)
    page.locator('{class="input-full-width size-medium status-basic shape-rectangle nb-transition cdk-focused cdk-mouse-focused"}')

    //Combinme different selectors
    page.locator('input[placeholder="Email"][nbinput]')

    //By Xpath [NOT RECOMMENDED]
    page.locator('//*[@id="inputEmail"')

    //By partial text match
    page.locator(':text("Using")')

    //By exact text match
    page.locator(':text-is("<full text ng description sa page>")')
})

// test('User facing locators', async({page}) => {
//     await page.getByRole('textbox', {name: "Email"}).first().click()
//     await page.getByLabel('Email').first().click()

//     // await page.getByTestId('')

// })


// test('Locating child elements', async({page}) => {
//     await page.locator('nb-card nb-radio :text-is("Option 1")').click() // Each locator separated by space is considerede a child locator in the relation to the locator is in the string before that.
//     await page.locator('nb-card').locator('nb-radio').locator(':text-is("Option 2")').click()

//     await page.locator('nb-card').getByRole('button', {name:"Sign in"}).first().click()

//     await page.locator('nb-card').nth(3).getByRole('button').click()
// })

// test('locating parent elements', async({page}) => {
//     await page.locator('nb-card', {hasText: "Using the Grid"}).getByRole('textbox',{name: "Email"}).click()
//     await page.locator('nb-card', {has: page.locator('#inputEmail1')}).getByRole('textbox', {name: 'Email'}).click()

//     await page.locator('nb-card').filter({hasText: 'Basic form'}).getByRole('textbox', {name: 'Email'}).click()
//     await page.locator('nb-card').filter({has: page.locator('.status-danger')}).getByRole('textbox', {name: 'Password'}).click()
//     await page.locator('nb-card').filter({has: page.locator('nb-checkbox')}).filter({hasText: 'Sign in'}).getByRole('textbox', {name: 'Email'}).click()
        
// })

// test('Reusing locators', async({page}) => {
//     const basicForm = page.locator('nb-card').filter({hasText: 'Basic form'})
//     const emailField = basicForm.getByRole('textbox', {name: 'Email'})

//     await emailField.fill('test@test.com')
//     await basicForm.getByRole('textbox', {name: 'Password'}).fill('Welcome123')
//     await basicForm.locator('nb-checkbox').click()
//     await basicForm.getByRole('button').click()

//     expect(emailField).toHaveValue('test@test.com')
// })

test('Extracting values', async({page}) => {
    //Single test value
    const basicForm = page.locator('nb-card').filter({hasText: 'Basic form'})
    const buttonText = await basicForm.locator('button').textContent()
    
    expect(buttonText).toEqual('Submit')

    //All text values
    const allRadioButtons = await page.locator('nb-radio').allTextContents()
    expect(allRadioButtons).toContain('Option 1')

    //Input value
    const emailField = basicForm.getByRole('textbox', {name: "Email"})
    
    await emailField.fill('test@test.com')
    const emailValue = await emailField.inputValue()

    expect(emailValue).toEqual('test@test.com')

    const placeholderValue = await emailField.getAttribute('placeholder')
    expect(placeholderValue).toEqual('Email')

})

test('assertion', async({page}) => {
    const basicFormButton = page.locator('nb-card').filter({hasText: 'Basic form'}).locator(('button'))
    //General assertion
    const value = 5
    expect(value).toEqual(5)

    const text = await basicFormButton.textContent()

    expect(text).toEqual('Submit')

    //Locator assertion
    await expect(basicFormButton).toHaveText('Submit')


    //Soft assertion
    await expect.soft(basicFormButton).toHaveText('Submit')
    await basicFormButton.click()


})

