const shipmentReducer=(state=[],action)=>{
    
    switch(action.type){
        case 'getAll':
            return action.payload;
        case 'addShipment':
            return [...state,action.payload];
        case 'deleteShipment':
            return state.filter((shipment)=>shipment._id!==action.payload);
        default: return state;   
    }
}
export default shipmentReducer;