const newArticleLink = ".nav-link[routerlink='/editor']"
const articleTitle = "input[placeholder='Article Title']"
const articleAbout = 'input[formcontrolname="description"]'
const body = 'textarea[formcontrolname="body"]'
const tagfield = "input[placeholder='Enter tags']"
const publishArticleBtn = "button[type='button']"
const likebutton ='[class="btn btn-sm btn-outline-primary"]'
const likedbutton ='button.btn.btn-sm.btn-primary'
const populartags ='[class="sidebar"]'
const tagcontainer ='[class="tag-list"]'
const commented ='p[class="card-text"]'
const submitcommentbutton='button[type="submit"]'
const commentplaceholder='textarea[placeholder="Write a comment..."]'
const readmoreselector ='a.preview-link'
const deletebutton="span.mod-options .ion-trash-a"

export class ArticlePage {

    clickonNewArticle(){
        cy.get(newArticleLink).click()
    }

    enterTitle(input){
            cy.get(articleTitle).type(input)
    }

    enterArticleAbout(input){
        cy.get(articleAbout).type(input)

    }
    enterBody(input){
        cy.get(body).type(input)

    }
    enterTags(input){
        cy.get(tagfield).type(input)
    }
    clickOnPublishArticle(){
        cy.get(publishArticleBtn).click()
    }
    navigate_to_feeds(){
        cy.contains('.nav-link', ' Global Feed ').click()
    }
    likeArtical(){
        cy.wait(1000)
        cy.wait(2000)
        cy.get(likebutton).eq(0).click()
        cy.get(likedbutton).should('contain', '1');
    }
    verifylistoftags(){
            articlePage.navigate_to_feeds() 
            cy.wait(23000)       
            cy.get(populartags) 
            .each(($el) => 
            { 
            cy.wrap($el) 
            .find(tagcontainer) 
            .invoke('text')
            .then((text) => {
                cy.log(text);
                });
          });
    }
    commentAndVerify(inputtext){
        cy.get(readmoreselector) // Select the link element with class 'preview-link'
        .contains('Read more...')
        .click() // Find the 'Read more...' text content within the link 
        cy.get(commentplaceholder).click()
        .type(inputtext)
        .get(submitcommentbutton).click()
        .get(commented).should('contain',inputtext)

    }
    commentAndDlete(){
        cy.get(deletebutton).click()
        cy.get(deletebutton).should('not.exist');//verify delete button is not there anymore proving comment is deleted 
    }




}

export const articlePage = new ArticlePage()