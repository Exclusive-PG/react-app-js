const TOOGLE_BUY_PRODUCT = "TOOGLE_BUY_PRODUCT";

let initialState = {
    offers : [
        {id:1,urlIMG : "" ,name:"Парикмахерское кресло «Норм» гидравлическое",valut : "₽" , price : 9900, buyed :false},
        {id:2,urlIMG : "" ,name:"Парикмахерское кресло «Норм» гидравлическое",valut : "₽" , price : 17900 , buyed :true},
        {id:3,urlIMG : "" ,name:"Парикмахерское кресло «Норм» гидравлическое",valut : "₽" , price : 2900 , buyed :false},
        {id:4,urlIMG : "" ,name:"Парикмахерское кресло «Норм» гидравлическое",valut : "₽" , price : 10999,buyed :false},
        {id:5,urlIMG : "" ,name:"Парикмахерское кресло «Норм» гидравлическое",valut : "₽" , price : 5900, buyed :false},
        {id:6,urlIMG : "" ,name:"Парикмахерское кресло «Норм» гидравлическое",valut : "₽" , price : 13900 , buyed :false},
        {id:7,urlIMG : "" ,name:"Ортопедическое кресло «Салют» ",valut : "₽" , price : 34900 , buyed :false},
    ]
}

const SpecialOffers = (state = initialState,action) =>{
    switch(action.type){
        case TOOGLE_BUY_PRODUCT:{
            return {
                ...state,
                offers: state.offers.map(offer =>{
                    if(offer.id === action.idProduct && offer.buyed === false){
                         return   {...offer,buyed:true};
                    }else if(offer.id === action.idProduct && offer.buyed === true){
                        return {...offer,buyed:false};
                    }
                    return offer;
                })
                
            }
        }
        default :{
            return state;
        }
    }
}
export const BuyProductAC = (idProduct) =>({type:TOOGLE_BUY_PRODUCT,idProduct});
export default SpecialOffers;