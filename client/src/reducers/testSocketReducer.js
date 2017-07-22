const testSocketReducer = (state = {}, action) => {
  switch (action.type) {
  case 'testSocket_ServerToClient':
    return Object.assign({}, {testSocket_ServerToClient: action.data});
  default:
    return state;
  }
};

export default testSocketReducer;
