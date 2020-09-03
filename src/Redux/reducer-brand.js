

let initialState = {
    brands : [
        {id : 1 ,urlImage : ""},
        {id : 2 ,urlImage : ""},
        {id : 3 ,urlImage : ""},
        {id : 4 ,urlImage : ""},
        {id : 5 ,urlImage : ""},
        {id : 6 ,urlImage : ""},
        {id : 7 ,urlImage : ""},
        {id : 8 ,urlImage : ""},
        {id : 9 ,urlImage : ""}
]
}

const ReducerBrand = (state = initialState , action) =>{
    switch(action.type){
        default :
        return state;
    }
}

export default ReducerBrand ;