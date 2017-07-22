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
      };

    case 'SET_SOCKET_ID':
      return { ...state, socket_id: action.payload };
  }

  return state;
};

export default userReducer;
