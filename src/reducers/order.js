const ordersReducer=(state=[],action)=>{
    switch(action.type){
        case 'getAll':
            return action.payload;
        case 'addOrder':
            return [...state,action.payload];
        case 'deleteOrder':
            return state.filter((order)=>order._id!==action.payload);
        case 'updateOrder':
            return state.map((order)=>order._id===action.payload.Id?action.payload.order:order);
        case 'updateStatus':
            return state.map((order)=>order._id===action.payload.Id?action.payload.order:order);
         default: return state;   
    }
}
export default ordersReducer;