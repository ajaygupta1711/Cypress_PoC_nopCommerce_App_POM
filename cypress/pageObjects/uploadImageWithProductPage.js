class uploadImageWithProductPage {

    elements = {
        clickOnEditbutton: () => cy.xpath("(//*[@class='table table-bordered table-hover table-striped dataTable no-footer']//td[8]//a)[1]"),
        clickOnUploadFilesButton: () => cy.xpath("//*[@class='qq-uploader-selector qq-uploader']//div//input"),
        clickOnSaveButton: () => cy.get("*[name='save']"),
        clickOnExpCollIcon: () => cy.get("*[class='icon-collapse']")
    }

    clickEditbutton() {
        this.elements.clickOnEditbutton().click();
    }

    clickUploadFilesButton() {
        this.elements.clickOnUploadFilesButton().attachFile('HP Laptop.jpg');
    }

    clickSaveButton() {
        this.elements.clickOnSaveButton().click();
    }

    clickOnExpColl() {
        this.elements.clickOnExpCollIcon().click();
    }
}

export default uploadImageWithProductPage;

require('cypress-xpath')
require('cypress-file-upload');