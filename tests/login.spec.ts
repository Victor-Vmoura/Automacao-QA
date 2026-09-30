import { test, expect } from '@playwright/test';


test('Login Com Credenciais Válidas', async ({page}) => {
    await page.goto('https://www.saucedemo.com/');
    
});