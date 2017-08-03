let initial = 'Queue Info';

const viewReducer = (state = {setView: initial}, action) => {
  switch (action.type) {
  case 'SET_VIEW_HOST':
    return {
      ...state,
      setView: action.payload
    };

  case 'SET_VIEW_QUEUE_CHOICE':
    return {
      ...state,
      queueList: action.payload
    };

  case 'SET_VIEW_CUSTOMER':
    return {
      ...state,
      setView: action.payload
    };

  }

  return state;
};

export default viewReducer;
