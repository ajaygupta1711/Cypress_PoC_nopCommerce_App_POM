class addNewCustomerPage {

    elements = {
        clickOnCustomersDownArrow: () => cy.xpath("(//*[@class='right fas fa-angle-left '])[4]"),
        clickOnCustomersOption: () => cy.xpath("(//p)[21]"),
        clickOnAddNewButton: () => cy.get("*[class='btn btn-primary']"),
        enterEmailText: () => cy.get("input#Email"),
        enterPasswordText: () => cy.get("input#Email"),
        enterFirstNameText: () => cy.get("input#FirstName"),
        enterLastNameText: () => cy.get("input#LastName"),
        selectGenderRadioButton: () => cy.get("input#Gender_Male"),
        enterDOBText: () => cy.get("input#DateOfBirth"),
        enterCompanyNameText: () => cy.get("input#Company"),
        chkIsTaxExemptChkBox: () => cy.get("input#IsTaxExempt"),
        clickOnSaveButton: () => cy.get("*[name='save']"),
        verifyAddCustomerSuccessText: () => cy.get("*[class='alert alert-success alert-dismissable']"),
        enterSearchEmailText: () => cy.get("input#SearchEmail"),
        clickOnSearchButton: () => cy.get("button#search-customers"),
        verifyAddedCustomerEmailText: () => cy.xpath("//*[@class='table table-bordered table-hover table-striped dataTable no-footer']//tbody//td[2]")
    }

    clickCustomersDownArrow() {
        this.elements.clickOnCustomersDownArrow().click();
    }

    clickCustomersOption() {
        this.elements.clickOnCustomersOption().click();
    }

    clickAddNewButton() {
        this.elements.clickOnAddNewButton().click();
    }

    enterEmail(email) {
        this.elements.enterEmailText().type(email);
    }

    enterPassword(password) {
        this.elements.enterPasswordText().type(password);
    }

    enterFirstName(firstName) {
        this.elements.enterFirstNameText().type(firstName);
    }

    enterLastName(lastName) {
        this.elements.enterLastNameText().type(lastName);
    }

    selectGender() {
        this.elements.selectGenderRadioButton().check({ force: true }).should('be.checked');
    }

    enterDOB(DOB) {
        this.elements.enterDOBText().type(DOB);
    }

    enterCompanyName(companyName) {
        this.elements.enterCompanyNameText().type(companyName);
    }

    chkIsTaxExempt() {
        this.elements.chkIsTaxExemptChkBox().check({ force: true }).should('be.checked'); 
    }

    clickOnSaveBtn() {
        this.elements.clickOnSaveButton().click();
    }

    verifyAddCustomerSuccess() {
        this.elements.verifyAddCustomerSuccessText().should('include.text', 'The new customer has been added successfully'); 
    }

    enterSearchEmail(email) {
        this.elements.enterSearchEmailText().type(email);
    }

    clickOnSearchBtn() {
        this.elements.clickOnSearchButton().click();
    }

    verifyAddedCustomerEmail(email) {
        this.elements.verifyAddedCustomerEmailText().should('include.text', email);
    }
}

export default addNewCustomerPage;

require('cypress-xpath')