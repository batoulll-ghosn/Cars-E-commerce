const carReducer=(state=[],action)=>{
    switch(action.type){
        case 'getAll':
            return action.payload;
        case 'getCarByName':
            return state.filter((car)=>car.carName===action.payload);
        case 'getCarsByCompany':
            return state.filter((car)=>car.company===action.payload);
        case 'GetCarsByColor':
            return state.filter((car)=>car.color===action.payload);
        case 'getCarsByType':
            return state.filter((car)=>car.type===action.payload);
        case 'getAllCarsBySelector':
            return state.filter((car)=>car.type===action.payload);
        case 'addCar':
            return [...state,action.payload];
        case 'deleteCar':
            return state.filter((car)=>car._id!==action.payload);
        case 'updateCar':
            return state.map((car)=>car._id===action.payload.Id?action.payload.car:car);
         default: return state;   
    }
}