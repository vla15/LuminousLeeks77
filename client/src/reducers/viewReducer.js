let initial = { hostViewOption: ''};

const viewReducer = (state = initial, action) => {
  switch (action.type) {
  case 'SET_VIEW_HOST':
    return action.payload;
  }
  return state;
};
