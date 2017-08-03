let initial = 'Queue Info';

const viewReducer = (state = {setView: initial, modalState: false}, action) => {
  switch (action.type) {
  case 'SET_VIEW_HOST':
    return {
      ...state,
      setView: action.payload
    };

  case 'SET_VIEW_QUEUE_CHOICE':
    return {
      ...state,
      setView: action.payload
    };
      
  case 'TOGGLE_MODAL':
    return {
      ...state,
      modalState: action.payload 
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
