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
      photo: action.payload.photo
    };

  case 'SET_SOCKET_ID':
    return {
      ...state,
      socket_id: action.payload
    };

  case 'SET_USER_LOCATION':
    return {
      ...state,
      location: {
        lat: action.payload.lat,
        lng: action.payload.lng
      }
    };

  case 'GO_TO_PROFILE':
    return state;
  }

  return state;
};

export default userReducer;
