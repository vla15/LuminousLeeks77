import actionTypes from './actionTypes';
const viewActions = {};

viewActions.setViewHost = viewOption => {
  return {
    type: actionTypes.SET_VIEW_HOST,
    payload: viewOption
  };  
};

module.exports = viewActions;