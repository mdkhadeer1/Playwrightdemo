import {test, expect} from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { HomePage } from '../pages/HomePage';
import { CartPage } from '../pages/CartPage';

test('Adding product into cart', async({page})=>{
   // Login
   const login = new LoginPage(page);

   await login.gotoLoginPage();
   await login.login('pavanol', 'test@123');

   const homepage = new HomePage(page);

   await homepage.addProductToCart('Nexus 6');
   await page.waitForTimeout(3000);
   await homepage.gotoCart(); 

   const cartpage = new CartPage(page);
   await page.waitForTimeout(3000);
   const status = await cartpage.checkProductInCart('Nexus 6');
   await expect(status).toBe(true);


})