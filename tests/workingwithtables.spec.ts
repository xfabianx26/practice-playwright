
import { test, expect } from '@playwright/test';


test('should navigate to the webtable', async ({ page }) => {
  await page.goto('https://cosmocode.io/automation-practice-webtable');
  
  const tableContainer = await page.locator("xpath=//table[@id='countries']")

  const rows = await tableContainer.locator('//tr').all();

  const countries:Country[] = [];   

  for (let row of rows) {
    let country : Country = {
        name: await row.locator('//td[2]').textContent(),
        capital: await row.locator('//td[3]').textContent(),
        currency: await row.locator('//td[4]').textContent(),
        primaryLanguage: await row.locator('//td[5]').textContent()

    }

    countries.push(country)
}


/* for(let country of countries ){
    console.log(pepito);
} */


    const countryWherePeopleSeakPortuguese = countries.filter(country => country.primaryLanguage.trim().toLowerCase() === 'portuguese')

    console.log('countries where people speak portugues: ', countryWherePeopleSeakPortuguese);


});

interface Country{
    name:string,
    capital: string,
    currency: string,
    primaryLanguage: string
}

/* 
/*
element container: //table[@id='countries']
• //tr -> filas
//table[@id='countries']//tr[2]//td[1] -> Check
//table[@id='countries']//tr[2]//td[2] -> Countr
//table[@id='countries']//tr[2]//td[3] -> Capit
//table[@id='countries']//tr[2]//td[4] -> Currel
//table[@id='countries']//tr[2]//td[5] -> Primal
*/

