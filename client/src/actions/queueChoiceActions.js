import axios from 'axios';
import actionTypes from './actionTypes';

const queueChoiceActions = {};

queueChoiceActions.getQueueChoiceList = () => {
  return dispatch => {
    axios.get('/api/queueinfo/queuechoice')
      .then(result => {
        dispatch({
          type: actionTypes.GET_QUEUE_CHOICE_LIST,
          payload: result.data
        });
      });
  };
};

queueChoiceActions.setIsEnqueued = (queueId) => {
  return {
    type: actionTypes.SET_IS_ENQUEUED,
    payload: queueId
  };
};

module.exports = queueChoiceActions;