const userReducer = (state = {
  userId: 0,
  userType: '',
  firstName: '',
  lastName: '',
  phone: '',
  email: '',
  organization: ''
}, action) => {
  switch (action.type) {
  case 'GET_USER_INFO':
    state = action.payload;
    break;
  }
  return state;
};

export default userReducer;
