class searchProductPage {

    elements = {
        enterSearchCategory: () => cy.get("*[name='SearchCategoryId']"),
        clickOnSeachbutton: () => cy.get("button#search-products"),
        verifySearchedProduct: () => cy.xpath("//*[@class='dataTables_scrollBody']//tbody"),
        screenPrintSearchedProduct: () => cy.get("*[novalidate='novalidate']")
    }

    searchCategory(productCategory) {
        this.elements.enterSearchCategory().select(productCategory);
    }

    clickSearchButton() {
        this.elements.clickOnSeachbutton().click();
    }

    verifyProduct() {
        this.elements.verifySearchedProduct().should('include.text','Digital Storm VANQUISH 3 Custom Performance PC');
    }

    scrnPrintSearchedProduct() {
        this.elements.screenPrintSearchedProduct().screenshot();
    }
}

export default searchProductPage;

require('cypress-xpath')