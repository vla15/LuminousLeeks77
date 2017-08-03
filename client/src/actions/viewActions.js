import actionTypes from './actionTypes';
const viewActions = {};

viewActions.setViewHost = viewOption => {
  return {
    type: actionTypes.SET_VIEW_HOST,
    payload: viewOption
  };  
};

viewActions.setViewQueueChoiceList = viewOption => {
  return {
    type: actionTypes.SET_VIEW_QUEUE_CHOICE,
    payload: viewOption
  };  
};

viewActions.toggleModal = modalState => {
  return {
    type: actionTypes.TOGGLE_MODAL,
    payload: !modalState
  };
};

module.exports = viewActions;