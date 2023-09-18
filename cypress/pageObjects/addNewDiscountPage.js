class addNewDiscountPage {

    elements = {
        clickOnPromotionsDownArrow: () => cy.xpath("(//p)[28]"),
        clickOnDiscountsOption: () => cy.xpath("(//p)[29]"),
        clickOnAddNewButton: () => cy.get("*[class='btn btn-primary'] i"),
        clickOnBasicAdvanceOption: () => cy.get("*[class='onoffswitch-switch']"),
        verifyIsActiveChkBoxCheck: () => cy.get("input#IsActive"),
        enterNameText: () => cy.get("input#Name"),
        selectDiscountTypeDropDown: () => cy.get("select#DiscountTypeId"),
        chkUserPercentageChkBox: () => cy.get("input#UsePercentage"),
        enterDiscountAmountText: () => cy.xpath("(//*[@id='pnlDiscountAmount']//input)[1]"),
        chkRequiresCoupanCodeChkBox: () => cy.get("input#RequiresCouponCode"),
        enterCoupanCodeText: () => cy.get("input#CouponCode"),
        enterStartDateText: () => cy.get("input#StartDateUtc"),
        enterEndDateText: () => cy.get("input#EndDateUtc"),
        ChkDiscountLimitationChkBox: () => cy.get("select#DiscountLimitationId"),
        enterAdminCommentText: () => cy.get("*[id='AdminComment']"),
        clickOnSaveButton: () => cy.get("*[name='save']"),
        verifyNewAddedDiscountText: () => cy.get("*[class='alert alert-success alert-dismissable']"),
        enterSearchDiscountNameText: () => cy.get("input#SearchDiscountName"),
        clickOnSearchButton: () => cy.get("button#search-discounts"),
        verifyAddedDiscountText: () => cy.xpath("//*[@class='table table-bordered table-hover table-striped dataTable no-footer']//tbody//td[1]")    
    }

    clickOnPromotionsArrow() {
        this.elements.clickOnPromotionsDownArrow().click();
    }

    clickOnDiscountsOpt() {
        this.elements.clickOnDiscountsOption().click();
    }

    clickAddNewBtn() {
        this.elements.clickOnAddNewButton().click();
    }

    clickOnBasicAdvanceOpt() {
        this.elements.clickOnBasicAdvanceOption().click();
    }

    verifyIsActiveCheck() {
        this.elements.verifyIsActiveChkBoxCheck().should('be.checked');
    }

    enterName(nameCoupanCodeDiscountName) {
        this.elements.enterNameText().type(nameCoupanCodeDiscountName);
    }

    selectDiscountType() {
        this.elements.selectDiscountTypeDropDown().select('Assigned to products').should('include.text', 'Assigned to products');
    }

    chkUserPercentage() {
        this.elements.chkUserPercentageChkBox().uncheck({ force: true }).should('not.be.checked');
    }

    enterDiscountAmount(discountAmount) {
        this.elements.enterDiscountAmountText().type(discountAmount);
    }

    chkRequiresCoupanCode() {
        this.elements.chkRequiresCoupanCodeChkBox().check({ force: true }).should('be.checked');        
    }

    enterCoupanCode(nameCoupanCodeDiscountName) {
        this.elements.enterCoupanCodeText().type(nameCoupanCodeDiscountName);
    }

    enterStartDate(startDate) {
        this.elements.enterStartDateText().invoke('show').type(startDate);
    }

    enterEndDate(endDate) {
        this.elements.enterEndDateText().invoke('show').type(endDate);
    }

    ChkDiscountLimitation() {
        this.elements.ChkDiscountLimitationChkBox().select("N times per customer").should('include.text', 'N times per customer');
    }

    enterAdminComment(adminComment) {
        this.elements.enterAdminCommentText().type(adminComment);
    }

    clickOnSaveBtn() {
        this.elements.clickOnSaveButton().click();
    }

    verifyNewAddedDiscount() {
        this.elements.verifyNewAddedDiscountText().should('include.text', 'The new discount has been added successfully');
    }

    enterSearchDiscountName(nameCoupanCodeDiscountName) {
        this.elements.enterSearchDiscountNameText().type(nameCoupanCodeDiscountName);
    }

    clickOnSearchBtn() {
        this.elements.clickOnSearchButton().click();
    }

    verifyAddedDiscount(nameCoupanCodeDiscountName) {
        this.elements.verifyAddedDiscountText().should('include.text', nameCoupanCodeDiscountName);
    }
}

export default addNewDiscountPage;

require('cypress-xpath')