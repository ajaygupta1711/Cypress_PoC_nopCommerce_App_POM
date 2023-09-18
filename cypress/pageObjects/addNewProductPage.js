class addNewProductPage {

    elements = {
        clickOnAddNewButton: () => cy.get("a[class='btn btn-primary']"),
        clickOnBasicAdvanceOption: () => cy.get("*[class='onoffswitch-switch']"),
        enterProductNameText: () => cy.get("input#Name"),
        enterShortDescriptionText: () => cy.get("textarea[id='ShortDescription']"),
        enterSKUText: () => cy.get("input#Sku"),
        unchkPublishedChkBox: () => cy.get("input#Published"),
        enterGTINText: () => cy.get("input#Gtin"),
        enterManufacturerPartNumber: () => cy.get("input#ManufacturerPartNumber"),
        chkShowOnHomePage: () => cy.get("input#ShowOnHomepage"),
        selectProductTagsDropDown: () => cy.get("*[name='ProductTypeId']"),
        selectProductTemplateDropDown: () => cy.get("*[name='ProductTemplateId']"),
        unchkVisibleIndividuallyChkBox: () => cy.get("input#VisibleIndividually"),
        verifyAllowCustomerReviewsChkBox: () => cy.get("input#AllowCustomerReviews"),
        enterAvailableStartDateText: () => cy.get("input#AvailableStartDateTimeUtc"),
        enterAvailableEndDateText: () => cy.get("input#AvailableEndDateTimeUtc"),
        chkMarkAsNewChkBox: () => cy.get("input#MarkAsNew"),
        enterPriceText: () => cy.xpath("(//*[@class='k-formatted-value k-input'])[2]"),
        clickOnSaveButton: () => cy.get("*[class='btn btn-primary'][name='save']"),
        verifyAddedProductSuccessText: () => cy.get("*[class='alert alert-success alert-dismissable']")
    }

    clickAddNewButton() {
        this.elements.clickOnAddNewButton().click();
    }

    clickOnBasicAdvance() {
        this.elements.clickOnBasicAdvanceOption().click();
    }

    enterProductName(productName) {
        this.elements.enterProductNameText().type(productName);
    }

    enterShortDescriptionText(shortDescription) {
        this.elements.enterShortDescriptionText().type(shortDescription);
    }

    enterSKU(SKU) {
        this.elements.enterSKUText().type(SKU);
    }

    unchkPublishedChkBox() {
        this.elements.unchkPublishedChkBox().uncheck({ force: true }).should('not.be.checked');
    }

    enterGTIN(GTIN) {
        this.elements.enterGTINText().type(GTIN);
    }

    enterManufacturerPartNo(manufacturerPartNo) {
        this.elements.enterManufacturerPartNumber().type(manufacturerPartNo);
    }

    chkShowHomePage() {
        this.elements.chkShowOnHomePage().check({ force: true }).should('be.checked');
    }

    selectProductTags(product) {
        this.elements.selectProductTagsDropDown().select(product);
    }

    selectProductTemplate(productTemplate) {
        this.elements.selectProductTemplateDropDown().select(productTemplate);
    }

    unchkVisibleIndividually() {
        this.elements.unchkVisibleIndividuallyChkBox().uncheck({ force: true }).should('not.be.checked'); 
    }

    verifyAllowCustomerReviews() {
        this.elements.verifyAllowCustomerReviewsChkBox().should('be.checked'); 
}

    enterAvailableStartDate(startDate) {
        this.elements.enterAvailableStartDateText().type(startDate); 
    }

    enterAvailableEndDate(endDate) {
        this.elements.enterAvailableEndDateText().type(endDate); 
    }

    chkMarkAsNew() {
        this.elements.chkMarkAsNewChkBox().check({ force: true }).should('be.checked');  
    }

    enterPrice(Price) {
        this.elements.enterPriceText().type('{backspace}',Price); 
    }

    clickOnSaveBtn() {
        this.elements.clickOnSaveButton().click(); 
    }

    verifyAddedProductSuccess() {
        this.elements.verifyAddedProductSuccessText().should('include.text', 'The new product has been added successfully');
    }
}

export default addNewProductPage;

require('cypress-xpath')