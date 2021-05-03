class FeedbackPage {

    getName(){
        return cy.get("#txtName")
    }

    getAddress1(){
        return cy.get("#txtAddress1")
    }

    getAddress2(){
        return cy.get("#txtAddress2")
    }

    getAddress3(){
        return cy.get("#txtAddress3")
    }


    getGrievance(){
        return cy.get("#txtGrievance")
    }


    getPhone(){
        return cy.get("#txtMobile")
    }


    getEmail(){
        return cy.get("#txtEmail")
    }

    getPostalCode(){
        return cy.get("#txtPinCode")
    }
}

export default FeedbackPage;



//npx cypress run --reporter mochawesome --spec D:\Shanthini\P\CypressFramework\cypress\integration\examples\SubmitFeedback.js