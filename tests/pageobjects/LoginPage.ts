import { expect, Locator, Page } from "@playwright/test";

export class LoginPage {
  private readonly usernameTexbox: Locator;
  private readonly passwordTextbox: Locator;
  private readonly loginButton: Locator;
  private readonly shoppingCartIcon: Locator;



  constructor(page: Page) {
    this.usernameTexbox = page.getByRole("textbox", { name: "Username" });
    this.passwordTextbox = page.getByRole("textbox", { name: "Password" });
    this.loginButton = page.getByRole("button", { name: "Login" });

    this.shoppingCartIcon = page.locator("//a[contains(@class, 'shopping_cart_link')]")
  }

  async fillUsername(username: string) {
    await this.usernameTexbox.fill(username);
  }

  async fillPassword(password: string) {
    await this.passwordTextbox.fill(password);
  }

  async clickLoginButton() {
   await this.loginButton.click();
  }


  async loginWithCredentials(username: string, password: string) {
    await this.fillUsername(username);
    await this.fillPassword(password);
    await this.clickLoginButton();
  }

  async checkSuccessfulLogin(){
    await expect(this.shoppingCartIcon).toBeVisible();
  }

}
