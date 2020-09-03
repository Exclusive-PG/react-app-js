const INPUT_SEARCH = "INPUT_SEARCH";
const CALL_BACK  = "CALL_BACK";
let initialState ={
    inputContent :  "",
    callBack : false
}

const ReducerSearch = (state = initialState,action) => {

    switch(action.type){
        case INPUT_SEARCH :{
           let stateCopy = {...state};
           stateCopy.inputContent = action.newContent;
           return stateCopy ;
        }
        case CALL_BACK :{
            let stateCopy = {...state};
            stateCopy.callBack = {...state.callBack}
            stateCopy.callBack = action.callback;
             if(action.callback){
                 console.log("Вызов принят");
                 action.callBack = false;
             } 
            
            return stateCopy;
        }
        default : return state;
    }
}
export const rerenderInputSearchAC = (content) =>({
    type: INPUT_SEARCH ,
    newContent : content
});

export const callBackAC = (bool) =>({
    type : CALL_BACK,
    callback : bool
})

export default ReducerSearch ;