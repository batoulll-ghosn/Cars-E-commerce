const reviewsReduver=(state=[],action)=>{
    switch(action.type){
        case 'getAll':
            return action.payload;
        case 'addReview':
            return [...state,action.payload];
         default: return state;   
    }
}
export default reviewsReduver;