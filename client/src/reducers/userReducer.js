const userReducer = (state = null, action) => {
  switch (action.type) {
  case 'SET_USER_INFO':
    return {
      profile_id: action.payload.id,
      first_name: action.payload.first,
      last_name: action.payload.last,
      phone_number: action.payload.phone,
      email: action.payload.email,
      admin: action.payload.admin,
    }
    break;
  }
  return state;
};

export default userReducer;
