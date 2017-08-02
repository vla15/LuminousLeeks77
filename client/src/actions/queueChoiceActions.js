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

queueChoiceActions.setQueueView = (queueId, userId) => {
  return dispatch => {
    axios.put(`api/profiles/viewing/${userId}/${queueId}`)
      .then(result => {
        dispatch({
          type: actionTypes.SET_QUEUE_VIEW,
          payload: queueId
        });
      });
  };
};

module.exports = queueChoiceActions;