const carReducer=(state=[],action)=>{
    
    switch(action.type){
        case 'getAllCars':
            return action.payload;
        case 'getCarByName':
            return action.payload.cars.filter((car)=>car.carName===action.payload.carName);
        case 'getCarsByCompany':
            return action.payload.cars.filter((car)=>car.company===action.payload.company);
        case 'GetCarsByColor':
            return action.payload.cars.filter((car)=>car.color===action.payload.color);
        case 'getCarsByType':
            return action.payload.cars.filter((car)=>car.type===action.payload.type);
        case 'getAllCarsBySelector':
            return state.map((car)=>[...car,car.action.payload]);
        case 'addCar':
            return [...state,action.payload];
        case 'deleteCar':
            return state.filter((car)=>car._id!==action.payload);
        case 'updateCar':
            return state.map((car)=>car._id===action.payload.Id?action.payload.car:car);
        case 'getCarById':
            return action.payload;
         default: return state;   
    }
}
export default carReducer;