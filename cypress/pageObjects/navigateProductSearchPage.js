class navigateProductSearchPage {

    elements = {
        sideBarPusher: () => cy.get("a#nopSideBarPusher"),
        clickOnSearch: () => cy.get("[class='form-control admin-search-box typeahead tt-input']"),
        enterSearchInput: () => cy.get("[type='text']"),
        clockOnSearchText: () => cy.xpath("//div[@class='tt-dataset tt-dataset-pages']//div[4]"),
        navigateToProductSearch: () => cy.get("[class='content-header clearfix'] h1")
    }

    sideBar() {
        this.elements.sideBarPusher().click();
    }

    clickSearch() {
        this.elements.clickOnSearch().dblclick();
    }

    enterSearch(product) {
        this.elements.enterSearchInput().type(product);
    }

    clickSearchText() {
        this.elements.clockOnSearchText().click();
    }

    navigateProductSearch() {
        this.elements.navigateToProductSearch().should('include.text', 'Products');
    }
}

export default navigateProductSearchPage;

require('cypress-xpath')