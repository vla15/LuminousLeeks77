let initial = 'Queue Info';

const viewReducer = (state = {hostView: initial, modalState: false}, action) => {
  switch (action.type) {
  case 'SET_VIEW_HOST':
    return {
      ...state,
      hostView: action.payload
    };
      

  case 'SET_VIEW_QUEUE_CHOICE':
    return {
      ...state,
      queueList: action.payload
    };


  case 'TOGGLE_MODAL':
    return {
      ...state,
      modalState: action.payload 
    };
  }

  return state;
};

export default viewReducer;
