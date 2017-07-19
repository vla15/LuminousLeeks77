const userReducer = (state = null, action) => {
  switch (action.type) {
  case 'SET_USER_INFO':
    state = action.payload;
    break;
  }
  return state;
};

export default userReducer;
