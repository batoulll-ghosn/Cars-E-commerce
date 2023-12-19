const infoReducer=(state=[],action)=>{
    switch(action.type){
        case 'addCard':
            return [...state,action.payload];
        case 'getCardByUserId':
            return action.payload;
    }
}
export default infoReducer;