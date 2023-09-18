class loginPage {

    elements = {
        usernameInput: () => cy.get("input#Email"),
        passwordInput: () => cy.get("input#Password"),
        rememberMe: () => cy.get("input#RememberMe"),
        loginBtn: () => cy.get("*[type='submit']")
    }

    enterUsername(username) {
        this.elements.usernameInput().clear();
        this.elements.usernameInput().type(username);
    }

    enterPassword(password) {
        this.elements.passwordInput().clear();
        this.elements.passwordInput().type(password);
    }
    
    chkRemember() {
        this.elements.rememberMe().check({force:true}).should('be.checked');
    }

    clickOnLogin() {
        this.elements.loginBtn().click();
    }
}

export default loginPage;