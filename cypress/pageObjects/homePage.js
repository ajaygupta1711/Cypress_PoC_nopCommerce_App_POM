class homePage {

    elements = {
        headerTxt: () => cy.get("div.content-header h1"),
        screenPrintHome: () => cy.get("*[class='content-wrapper']")
    }

    verifySuccessfulLogin() {
        this.elements.headerTxt().should('contain.text', 'Dashboard');
    }

    scrnPrtHome() {
        this.elements.screenPrintHome().screenshot();
    }
}

export default homePage;
