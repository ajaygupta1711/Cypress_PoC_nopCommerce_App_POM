class verifyAddedProductPage {

    elements = {
        enterProductNameText: () => cy.get("*[name='SearchProductName']"),
        verifySearchedProducttext: () => cy.xpath("//*[@class='table table-bordered table-hover table-striped dataTable no-footer']//tbody//td[3]")
    }

    enterProductName(productName) {
        this.elements.enterProductNameText().type(productName);
    }

    verifySearchedProduct(productName) {
        this.elements.verifySearchedProducttext().should('include.text', productName);
    }
}

export default verifyAddedProductPage;

require('cypress-xpath')