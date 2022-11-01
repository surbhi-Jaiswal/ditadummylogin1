describe('LogInTest',()=>{
    it('LogInSucess',()=>{
        //invalid data
        cy.visit('')
        cy.visit('localhost 3000')
       // cy.title().should('eq', 'http://localhost:3000')
       cy.visit('//http')
       cy.visit ('  http://localhost:3000')
       cy.visit(urltf).should('be.vissible')
       cy.get('urltf').then((inspect)=>{
        if(inspect.has()){
            console.log('open')
        }else{
            console.log("'not open")
        }
        //invalid email text field
        cy.get('username').should(be.vissible)
        if (username.vissible){
            username.click()
       }else{
        console.log('error not vissible')
       }
       cy.get('username').type('invalid')
       cy.get('username').type('invalid')
       if(username.invalid){
        console.log('thorugh an error')
       }else {
        console.log ('accept')
       }
       cy.get('username').type('invalid')
       
        

       })

    })
})
// describe('LogInTest',()=>{
//     it('LogInSucess',()=>{
//         //invalid data
//         cy.visit('')
//         cy.visit('localhost 3000')
//        // cy.title().should('eq', 'http://localhost:3000')
//        cy.visit('//http')
//        cy.visit ('  http://localhost:3000')
//        cy.visit(urltf).should('be.vissible')
//        cy.get('urltf').then((inspect)=>{
//         if(inspect.has()){
//             console.log('open')
//         }else{
//             console.log("'not open")
//         }
//         //invalid email text field
//         cy.get('username').should(be.vissible)
//         if (username.vissible){
//             username.click()
//        }else{
//         console.log('error not vissible')
//        }
//        cy.get('username').type('invalid')
//        cy.get('username').type('invalid')
//        if(username.invalid){
//         console.log('thorugh an error')
//        }else {
//         console.log ('accept')
//        }
//        cy.get('username').type('invalid')
       
        

//        })

//     })
// })
// describe('LogInTest',()=>{
//     it('LogInSucess',()=>{
//         //invalid data
//         cy.visit('')
//         cy.visit('localhost 3000')
//        // cy.title().should('eq', 'http://localhost:3000')
//        cy.visit('//http')
//        cy.visit ('  http://localhost:3000')
//        cy.visit(urltf).should('be.vissible')
//        cy.get('urltf').then((inspect)=>{
//         if(inspect.has()){
//             console.log('open')
//         }else{
//             console.log("'not open")
//         }
//         //invalid email text field
//         cy.get('username').should(be.vissible)
//         if (username.vissible){
//             username.click()
//        }else{
//         console.log('error not vissible')
//        }
//        cy.get('username').type('invalid')
//        cy.get('username').type('invalid')
//        if(username.invalid){
//         console.log('thorugh an error')
//        }else {
//         console.log ('accept')
//        }
//        cy.get('username').type('invalid')
       
        

//        })

//     })
// })
// drecribe('loginButtonTest',()=>{
//     it('loginButton',()=>{
//         cy.get(loginbutton).should(be.vissible)
//         if(loginbutton.vissible){
//             loginButton.click()
//         }
//         else{
//             loginbutton.notclick()
//         }
//         console.log('displaying admin login page' )

//     })
// })



// describe('LogInTest',()=>{
//     it('LogInSucess',()=>{
//         //valid data
//         cy.visit('http://localhost:3000')
//         cy.visit('localhost:3000')
//         cy.title().should('eq', 'http://localhost:3000')
//         cy.get('input:first').should('have.attr', 'placeholder', 'Username')
        
//         if (usernametf .vissible){
//             username.click().type(abcDitaxpresso.com)
//         }else{
//             console.log('not vissible')
//         }
//         cy.get('input:last').should('have.attr', 'placeholder', 'Password')
//         .type('sur123@$')
//         cy.get('login').click()
//         //  valid for check boxes
//         cy.get("[type='check box']").focus()
//         cy.get("[type='check box']").should('notbe.click')
//         //valid forget password
//         cy.get('forget password').should(be.vissble)
//         cy.get('forget password').click()
        
//     })
// })
//API testing for login page 
describe('LogInTest',()=>{
    it('LogInSucess',()=>{
        

//Organization page
discribe ('organization page test',()=>{
    it('ogranizationTest',()=>{
        cy.visist ('http:organization//')
        cy.get ('addOrganization ').should(be.vissible)
         if (addOrganization.vissible){
            addorganization.click()
             console.log('open organozation form page')
         }
         else {
            console.log('it is not vissible')
  }

  //Add organization page navigation thrrough all features
  cy.get ('addorganization')
  .not(selector)
  if(addorganization.not(selector)){
    console.log('no organization added')
  }else {
   console.log('organization added display organizatio form page')
  }
  cy.get('bell icon').should(be.vissible).click().as('@bellicon')
  cy.get('@bellicon').should(not.be.vissible)
  cy.get('maximizebutton').should(be.vissible).click()
  if(maximizebutton.clicked){
    console.log('maximize the screen')
  }else{
    console.log('maximize button is not clickable')
  }
  cy.get(dropDown).select(option).should('have.value','45')
  cy.get(drpDown).select(option).should('have.value','565')
})
})

//Organization form page
discribe('organization form page test',()=>{
    it('organization page',()=>{
     cy.get('organization link').should(be.vissible)
     .then((organozationlink)=>{
     cy.get('organization name tf').focus().type('orga@123')
     cy.get('organization name tf').focus().type('organswaraj')
     cy.get('organization name tf').focus().type('123 456')
     cy.get('organization name tf').focus().type('ogilla assocates')
     cy.get('organization name tf').focus().type('oggila 2244')
     
    })

})
})
