/// <reference types="cypress" />
/// <reference types="@cypress-audit/lighthouse" />

import loginPage from '../../pageObjects/loginPage';
import homePage from '../../pageObjects/homePage';
import navigateProductSearchPage from '../../pageObjects/navigateProductSearchPage';
import searchProductPage from '../../pageObjects/searchProductPage';
import verifyAddedProductPage from '../../pageObjects/verifyAddedProductPage';
import uploadImageWithProductPage from '../../pageObjects/uploadImageWithProductPage';
import addNewProductPage from '../../pageObjects/addNewProductPage';
import addNewCustomerPage from '../../pageObjects/addNewCustomerPage';
import addNewDiscountPage from '../../pageObjects/addNewDiscountPage';
import logoutPage from '../../pageObjects/logoutPage';
import addVendorPage from '../../pageObjects/addNewVendor';


const loginObj = new loginPage();
const homeObj = new homePage();
const navigateProductSearchObj = new navigateProductSearchPage();
const searchProductObj = new searchProductPage();
const verifyAddedProductObj = new verifyAddedProductPage();
const uploadImageWithProductObj = new uploadImageWithProductPage();
const addNewProductPageObj = new addNewProductPage();
const addNewCustomerPageObj = new addNewCustomerPage();
const addNewDiscountPageObj = new addNewDiscountPage();
const logoutPageObj = new logoutPage();
const addVendorPageObj = new addVendorPage();


describe('nopCommerce Application Features', () => {

  // Using beforeEach Hook to open the applcation link for each test case

  beforeEach(() => {
    cy.log("*******     Run before each test case    *******")
    cy.visit("https://admin-demo.nopcommerce.com/login?ReturnUrl=%2Fadmin%2F");
    cy.fixture('Credentials').then(function (data) {
      loginObj.enterUsername(data.email);
      loginObj.enterPassword(data.password);
      loginObj.chkRemember();
      loginObj.clickOnLogin();
    })
  })

  it('TC01_Verify Login Successful with Valid Credential', () => {
    homeObj.verifySuccessfulLogin();
    homeObj.scrnPrtHome();

    const thresholds = {
      performance: 25,
      accessibility: 50,
      'best-practices': 50,
      seo: 50,
      pwa: 20,
    }

    const lighthouseOptions = {
      formFactor: 'desktop',
      screenEmulation: { disabled: true },
    }

    const lighthouseConfig = {
      settings: { output: "html" },
      extends: "lighthouse:default",
    }
    cy.lighthouse(thresholds, lighthouseOptions, lighthouseConfig);
  });

  it('TC02_Navigate to the Product Search option', () => {
    cy.fixture('addNewProduct').then(function (data) {
      cy.wait(3000);
      navigateProductSearchObj.sideBar();
      navigateProductSearchObj.clickSearch();
      navigateProductSearchObj.enterSearch(data.searchText);
      navigateProductSearchObj.clickSearchText();
      cy.wait(3000);
      navigateProductSearchObj.navigateProductSearch();
      cy.wait(2000);
      homeObj.scrnPrtHome();
    })
  })

  it('TC03_Search the Product with Category', () => {
    cy.fixture('addNewProduct').then(function (data) {
      cy.wait(4000);
      navigateProductSearchObj.sideBar();
      navigateProductSearchObj.clickSearch();
      navigateProductSearchObj.enterSearch(data.searchText);
      navigateProductSearchObj.clickSearchText();
      cy.wait(3000);
      searchProductObj.searchCategory(data.productCategory);
      searchProductObj.clickSearchButton();
      searchProductObj.verifyProduct();
      cy.wait(2000);
      searchProductObj.scrnPrintSearchedProduct();
    })
  })

  it('TC04_Add and Verify a New Product', () => {
    cy.fixture('addNewProduct').then(function (data) {
      navigateProductSearchObj.sideBar();
      navigateProductSearchObj.clickSearch();
      navigateProductSearchObj.enterSearch(data.searchText);
      navigateProductSearchObj.clickSearchText();
      cy.wait(3500);
      addNewProductPageObj.clickAddNewButton();
      cy.wait(4500);
      addNewProductPageObj.clickOnBasicAdvance();
      addNewProductPageObj.enterProductName(data.productName);
      addNewProductPageObj.enterShortDescriptionText(data.shortDescription);
      addNewProductPageObj.enterSKU(data.SKU);
      addNewProductPageObj.unchkPublishedChkBox();
      addNewProductPageObj.enterGTIN(data.GTIN);
      addNewProductPageObj.enterManufacturerPartNo(data.manufacturerPartNo);
      addNewProductPageObj.chkShowHomePage();
      addNewProductPageObj.selectProductTags(data.product);
      addNewProductPageObj.selectProductTemplate(data.productTemplate);
      addNewProductPageObj.unchkVisibleIndividually();
      addNewProductPageObj.verifyAllowCustomerReviews();
      addNewProductPageObj.enterAvailableStartDate(data.startDate);
      addNewProductPageObj.enterAvailableEndDate(data.endDate);
      addNewProductPageObj.chkMarkAsNew();
      addNewProductPageObj.enterPrice(data.Price);
      addNewProductPageObj.clickOnSaveBtn();
      cy.wait(3000);
      addNewProductPageObj.verifyAddedProductSuccess();
      cy.wait(2000);
      homeObj.scrnPrtHome();
    })
  })

  it('TC05_Verify Added Product on Product Search screen', () => {
    cy.fixture('addNewProduct').then(function (data) {
      cy.wait(3000);
      navigateProductSearchObj.sideBar();
      navigateProductSearchObj.clickSearch();
      navigateProductSearchObj.enterSearch(data.searchText);
      navigateProductSearchObj.clickSearchText();
      cy.wait(2000);
      navigateProductSearchObj.navigateProductSearch();
      verifyAddedProductObj.enterProductName(data.productName);
      searchProductObj.clickSearchButton();
      verifyAddedProductObj.verifySearchedProduct(data.productName);
      cy.wait(2000);
      homeObj.scrnPrtHome();
    })
  })

  it('TC06_Edit and Upload Image with Existing Product', () => {
    cy.fixture('addNewProduct').then(function (data) {
      cy.wait(2000);
      navigateProductSearchObj.sideBar();
      navigateProductSearchObj.clickSearch();
      navigateProductSearchObj.enterSearch(data.searchText);
      navigateProductSearchObj.clickSearchText();
      cy.wait(2000);
      //uploadImageWithProductObj.clickOnExpColl();
      navigateProductSearchObj.navigateProductSearch();
      verifyAddedProductObj.enterProductName(data.productName);
      searchProductObj.clickSearchButton();
      cy.wait(2000);
      uploadImageWithProductObj.clickEditbutton();
      cy.wait(4000);
      uploadImageWithProductObj.clickUploadFilesButton('HP Laptop.jpg');
      cy.wait(2000);
      uploadImageWithProductObj.clickSaveButton();
      cy.wait(2000);
      verifyAddedProductObj.enterProductName(data.productName);
      searchProductObj.clickSearchButton();
      cy.wait(2000);
      homeObj.scrnPrtHome();
    })
  })

  it('TC07_Add and Verify a New Customer', () => {
    cy.fixture('addNewCustomer').then(function (data) {
      cy.wait(2000);
      navigateProductSearchObj.sideBar();
      addNewCustomerPageObj.clickCustomersDownArrow();
      addNewCustomerPageObj.clickCustomersOption();
      addNewCustomerPageObj.clickAddNewButton();
      addNewCustomerPageObj.enterEmail(data.email);
      addNewCustomerPageObj.enterPassword(data.password);
      addNewCustomerPageObj.enterFirstName(data.firstName);
      addNewCustomerPageObj.enterLastName(data.lastName);
      addNewCustomerPageObj.selectGender();
      addNewCustomerPageObj.enterDOB(data.DOB);
      addNewCustomerPageObj.enterCompanyName(data.companyName);
      addNewCustomerPageObj.chkIsTaxExempt();
      cy.wait(1000);
      addNewCustomerPageObj.clickOnSaveBtn();
      cy.wait(3000);
      addNewCustomerPageObj.verifyAddCustomerSuccess();
      addNewCustomerPageObj.enterSearchEmail(data.email);
      addNewCustomerPageObj.clickOnSearchBtn();
      addNewCustomerPageObj.verifyAddedCustomerEmail(data.email);
      cy.wait(2000);
      homeObj.scrnPrtHome();
    })
  })

  it('TC08_Add and Verify a New Discount', () => {
    cy.fixture('addNewDiscount').then(function (data) {
      cy.wait(2000);
      navigateProductSearchObj.sideBar();
      addNewDiscountPageObj.clickOnPromotionsArrow();
      addNewDiscountPageObj.clickOnDiscountsOpt();
      addNewDiscountPageObj.clickAddNewBtn();
      cy.wait(2000);
      addNewDiscountPageObj.clickOnBasicAdvanceOpt();
      cy.wait(2000);
      addNewDiscountPageObj.verifyIsActiveCheck();
      addNewDiscountPageObj.enterName(data.nameCoupanCodeDiscountName);
      addNewDiscountPageObj.selectDiscountType();
      addNewDiscountPageObj.chkUserPercentage();
      addNewDiscountPageObj.enterDiscountAmount(data.discountAmount);
      addNewDiscountPageObj.chkRequiresCoupanCode();
      addNewDiscountPageObj.enterCoupanCode(data.nameCoupanCodeDiscountName);
      cy.wait(2000);
      addNewDiscountPageObj.enterStartDate(data.startDate);
      cy.wait(2000);
      addNewDiscountPageObj.enterEndDate(data.endDate);
      addNewDiscountPageObj.ChkDiscountLimitation();
      addNewDiscountPageObj.enterAdminComment(data.adminComment);
      addNewDiscountPageObj.clickOnSaveBtn();
      addNewDiscountPageObj.verifyNewAddedDiscount();
      addNewDiscountPageObj.enterSearchDiscountName(data.nameCoupanCodeDiscountName);
      addNewDiscountPageObj.clickOnSearchBtn();
      addNewDiscountPageObj.verifyAddedDiscount(data.nameCoupanCodeDiscountName);
      cy.wait(2000);
      homeObj.scrnPrtHome();
    })
  })

  it('TC09_Add a New Vendor and Verify Error Message', () => {
    cy.fixture('addNewCustomer').then(function (data) {
      navigateProductSearchObj.sideBar();
      addNewCustomerPageObj.clickCustomersDownArrow();
      addVendorPageObj.clickOnVendor();
      addVendorPageObj.clickOnAddBtn();
      addVendorPageObj.enterName(data.firstName, data.lastName);
      addVendorPageObj.enterEmail(data.email);
      addVendorPageObj.clickOnSaveBtn();
      addVendorPageObj.verifyAddVendorError();
      cy.wait(2000);
      homeObj.scrnPrtHome();
    })
  })

  it('TC10_Logout from Application', () => {
    cy.wait(2000);
    logoutPageObj.logout();
    cy.wait(2000);
    logoutPageObj.scrnPrintProductSearch();
  })
})