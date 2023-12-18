const userReducer = (state = [], action) => {
  switch (action.type) {
    case "getAll":
      return action.payload;
    case "register":
      return [...state, action.payload.user];
    case "deleteUser":
      return state.filter((user) => user._id !== action.payload);
    case "updateUser":
      return state.map((user) =>
        user._id === action.payload.Id ? action.payload.user : user
      );
    case "getUserById":
      return action.payload;
    case "register2":
      return action.payload;
    case "getUsersByRole":
      return action.payload;
    case "login":
      return action.payload;
    default:
      return state;
  }
};
export default userReducer;
