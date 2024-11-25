import { test, expect } from '@playwright/test';
import { LoginPage } from './pageobjects/LoginPage';


test('swag lab', async ({ page }) => {
    await page.goto('https://www.saucedemo.com');
  
    // Login
/*     await page.getByRole('textbox', { name: 'Username' }).fill('standard_user');
    await page.getByRole('textbox', { name: 'Password' }).fill('secret_sauce');
    await page.getByRole('button', { name: 'Login' }).click(); */

    const login = new LoginPage(page)
    await login.loginWithCredentials("standard_user", "secret_sauce")
    await login.checkSuccessfulLogin();

  
    // Seleccionar un elemento aleatorio
    const itemsContainer = page.locator('#inventory_container .inventory_item');
    const randomIndex = Math.floor(Math.random() * await itemsContainer.count());
    const randomItem = itemsContainer.nth(randomIndex);
  
    // Obtener datos del elemento
    const expectedDescription = await randomItem.locator('.inventory_item_desc').innerText();
    const expectedName = await randomItem.locator('.inventory_item_name').innerText();
    const expectedPrice = await randomItem.locator('.inventory_item_price').innerText();
  
    console.log(`Price: ${expectedPrice}, Name: ${expectedName}, Description: ${expectedDescription}`);
  
    // Agregar al carrito
    await randomItem.getByRole('button', { name: 'Add to cart' }).click();
    await page.locator('.shopping_cart_link').click();
  
    // Validar botón Checkout
    await expect(page.getByRole('button', { name: 'Checkout' })).toBeVisible();
  
    // Validar datos en el carrito
    const cartItem = page.locator('.cart_item');
    const actualName = await cartItem.locator('.inventory_item_name').innerText();
    const actualDescription = await cartItem.locator('.inventory_item_desc').innerText();
    const actualPrice = await cartItem.locator('.inventory_item_price').innerText();
  
    expect(actualName).toEqual(expectedName);
    expect(actualDescription).toEqual(expectedDescription);
    expect(actualPrice).toEqual(expectedPrice);





    await page.getByRole('button', { name: 'Checkout' }).click();

    await page.getByRole('textbox', { name: 'First Name' }).fill('fabian');
    await page.getByRole('textbox', { name: 'Last Name' }).fill('ortiz');
    await page.getByRole('textbox', { name: 'Zip/Postal Code' }).fill('000513');


    await page.getByRole('button', { name: 'Continue' }).click();
    await page.getByRole('button', { name: 'Finish' }).click();



    await expect(page.getByRole('heading', { name: 'Thank you for your order!' })).toBeVisible()





  });
  

  test('prueba de login', async ({ page }) => {
    await page.goto('https://www.saucedemo.com');
   /* llamar a loginpage */
   const login = new LoginPage(page)
   await login.loginWithCredentials("standard_user", "secret_sauce")
   await login.checkSuccessfulLogin();


  });
  