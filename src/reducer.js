export const initialState = {
    basket: [
        {
            id:"14",
            title:"DSYTOM Compatible for Galaxy Watch Active 2 Band 44mm with Screen Protective Case Cover, 20mm Stainless Steel Strap Replacement for Samsung Galaxy Active2 (44mm,Black)",
            price:45.55,
            rating:5,
            image:"https://www.amazon.com/images/I/61D5lwlQYTL._AC_UL320_.jpg"
        }
    ],
    user:null,
};
export const getBasketTotal=(basket)=>
    basket?.reduce((amount,item) => item.price+amount,0);

const reducer = (state, action) => {
    console.log(action);
    switch(action.type){
        case "SET_USER":
            return{
                ...state,
                user:action.user,
            }
        case "ADD_TO_BASKRT":
            //logig for adding basket
            return {
                ...state,
                basket: [...state.basket, action.item],
            };
        case "REMOVE_FROM_BASKET":
            //logic for removing basket
            //we clone  basket
            let newBasket = [...state.basket];
            const index = state.basket.findIndex((basketItem) => basketItem.id ===action.id);
            if(index>=0){
                //item esists in basket remove it...
                newBasket.splice(index, 1);
            }
            else{
                console.warn(
                    `cant remove product(id: ${action.id} )as it not found`
                )
            }
            return {
                ...state,
                basket:newBasket,
            };
        default:
            return state;

    }

};
export default reducer;