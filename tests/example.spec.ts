import { test, expect } from '@playwright/test';

/* 
Nota tiene que bug para poder ver la pagina playwright en esta version no me sirve headless
npm outdated  - base si nuestra libreria se encuentra desactualizada si tengo actualizan tengo actualzar browser npx playwright install
npm  init playwright@latest

una herramienta reacord new 
playwright headless 

ejecutar los test
npx playwright test
 */
test('has title', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Playwright/);
});

test('get started link', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // Click the get started link.
  await page.getByRole('link', { name: 'Get started' }).click();

  // Expects page to have a heading with the name of Installation.
  await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();
});


test('mercado libre ', async ({ page }) => {
 

  await page.goto('https://www.mercadolibre.com.co');

  await page.locator('input[id=\'cb1-edit\']').fill('iPhone 16');
  await page.keyboard.press('Enter')

  await expect(page.locator('//ol[contains(@class, \'ui-search-layout\')]')).toBeVisible();


 const titles  = await page.locator('//ol[contains(@class, \'ui-search-layout\')]//li//h2').allInnerTexts();

 console.log("Total number of results is: " + titles.length);


 for(let title of titles){
  console.log("titles is: "+ titles);
 }
  
   

});

/* test('intentando comprar ', async ({ page }) => {
  await page.goto('https://www.mercadolibre.com.co/');
  await page.getByPlaceholder('Buscar productos, marcas y má').click();
  await page.getByPlaceholder('Buscar productos, marcas y má').fill('celulares baratos');
  await page.getByRole('option', { name: 'celulares baratos usados' }).click();
  await page.getByRole('link', { name: 'Celular Samsung S22 Ultra' }).click();
  await page.getByRole('button', { name: 'Comprar ahora' }).click();
}); */