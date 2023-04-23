/// <reference types="cypress" />

const { articlePage } = require("../support/page/article")
const { loginPage } = require("../support/page/login")

describe('conduit', () => {
  beforeEach(  ()=>{
    cy.visit("/",{failOnStatusCode: false})
    loginPage.clickonSignInBtn()
     loginPage.login('atish.hiring@gmail.com','Jimmy_3231')
})
  it("Create a Artile ", ()=>{
    articlePage.clickonNewArticle()
    articlePage.enterTitle("Atish")
    articlePage.enterArticleAbout("I am atish ")
    articlePage.enterBody("Hi Team lets do a sync-up call")
    articlePage.enterTags("Test")
    articlePage.clickOnPublishArticle()
  })
  it("like artical and verify  ", ()=>{
    articlePage.navigate_to_feeds()
    articlePage.likeArtical()
  })
  it("log list of tags   ", ()=>{
    articlePage.verifylistoftags()
  })
  it("test to comment and verify comment",()=>{
    articlePage.navigate_to_feeds()
    articlePage.commentAndVerify("East or west Cypress is the best")
  })
  it("comment and delete comment ",()=>{
    articlePage.navigate_to_feeds()
    articlePage.commentAndVerify("East or west Cypress is the best")
    articlePage.commentAndDlete()

  })



})
