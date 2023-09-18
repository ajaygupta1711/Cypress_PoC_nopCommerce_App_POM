class addVendorPage {

    elements = {
        clickOnVendorOption: () => cy.xpath("(//p)[24]"),
        clickOnAddButton: () => cy.get("*[class='btn btn-primary']"),
        enterNameText: () => cy.get("input#Name"),
        enterEmailText: () => cy.get("input#Email"),
        chkActiveChkBox: () => cy.get("input#Active"),
        clickOnSaveButton: () => cy.get("*[name='save']"),
        verifyAddVendorErrorText: () => cy.get("*[class='alert alert-danger alert-dismissable']")
    }

    clickOnVendor() {
        this.elements.clickOnVendorOption().click();
    }

    clickOnAddBtn() {
        this.elements.clickOnAddButton().click();
    }

    enterName(firstName, lastName) {
        this.elements.enterNameText().type(firstName, lastName);
    }

    enterEmail(email) {
        this.elements.enterEmailText().type(email);
    }

    chkActive() {
        this.elements.chkActiveChkBox().should('be.checked');

    }

    clickOnSaveBtn() {
        this.elements.clickOnSaveButton().click();
    }

    verifyAddVendorError() {
        this.elements.verifyAddVendorErrorText().should('include.text','For security purposes, the feature you have requested is not available on the demo site');
    }
}

export default addVendorPage;

require('cypress-xpath')