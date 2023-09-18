class logoutPage {

    elements = {
        logoutLink: () => cy.xpath("//*[@class='navbar-nav ml-auto pl-2']//li[3]"),
        screenPrintProductSearch: () => cy.get("*[novalidate='novalidate']")
     //   screenPrintHome: () => cy.get("*[class='content-wrapper']")
    }

    logout() {
        this.elements.logoutLink().click();
    }

    scrnPrintProductSearch() {
        this.elements.screenPrintProductSearch().screenshot();
    }

    // scrnPrtHome() {
    //     this.elements.screenPrintHome().screenshot();
    // }
}

export default logoutPage;

require('cypress-xpath')
