const signinLink = ".nav-link[routerlink='/login']"
const emailfield = "input[placeholder='Email']"
const passwordfield = "input[placeholder='Password']"
const signinBtn = "button[type='submit']"


export class LoginPage {

    clickonSignInBtn(){
        cy.get(signinLink).click()
    }
    
    login(email,password){
        cy.get(emailfield).type(email)
        cy.get(passwordfield).type(password)
        cy.wait(1000)
        cy.get(signinBtn).click()
    }



}

export const loginPage = new LoginPage()