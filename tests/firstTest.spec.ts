import {test} from '@playwright/test'


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

test('locating parent elements', async({page}) => {
    await page.locator('nb-card', {hasText: "Using the Grid"})
})