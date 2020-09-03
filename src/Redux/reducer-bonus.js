const CHANGE_EMAIL_FIELD = "CHANGE_EMAIL_FIELD";
const ADD_EMAIL          = "ADD_EMAIL";
let initialState = {
 email : {
    inputEmail : "",
    addEmail : [],
    error : {
        hasError : false,
        description : "",
        error(){
                this.hasError = true;
                this.description = "Inccorect email .Please,try again";
        },
        reset(){
            this.hasError = false;
            this.description = "Done";
        }
    }
 }
}

const BonusReducer = (state = initialState,action) =>{
    switch(action.type){
       case CHANGE_EMAIL_FIELD :{
               let copyState = {...state};
               copyState.email = {...state.email};
                copyState.email.inputEmail = action.content;
                return copyState;
           
       }
       case ADD_EMAIL:{
              let _englishLanguage = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/ ;
              let copyState = {...state};
              copyState.email = {...state.email};
              copyState.email.error = {...state.email.error};


              if((copyState.email.inputEmail !== "" || null) &&  _englishLanguage.test(copyState.email.inputEmail)){
                  
                copyState.email.addEmail.push(action.content);
                copyState.email.error.reset();
                copyState.email.inputEmail = "";
                
              }else{

                  copyState.email.error.error();    
              
            
              }
                console.log(copyState);
            
              return copyState;

       }
        default :{
            return state;
        }
    }
}

export const ChangeEmailFieldAC = (content) => ({type:CHANGE_EMAIL_FIELD,content});
export const addEmailAC = (content) => ({type : ADD_EMAIL ,content});
export default BonusReducer;