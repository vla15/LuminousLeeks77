const testReducer = (state = 0, action) => {
  switch (action.type) {
  case 'TEST':
    state = state + action.payload;
    break;
  }
  return state;
};

export default testReducer;
