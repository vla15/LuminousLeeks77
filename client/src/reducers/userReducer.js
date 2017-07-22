const userReducer = (state = null, action) => {
  switch (action.type) {
  case 'SET_USER_INFO':
    state = action.payload;
  case 'SET_SOCKET_ID':
    return {
      ...state,
      socketId: action.data	
    }
    break;
  }
  return state;
};

export default userReducer;
