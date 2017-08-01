import axios from 'axios';
import actionTypes from './actionTypes';

const queueChoiceActions = {};

queueChoiceActions.getQueueChoiceList = () => {
  return dispatch => {
    axios.get('/api/queueinfo/')
      .then(result => {
        dispatch({
          type: actionTypes.GET_QUEUE_CHOICE_LIST,
          payload: result.data
        });
      });
  };
};

module.exports = queueChoiceActions;