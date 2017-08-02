import axios from 'axios';
import actionTypes from './actionTypes';

const queueChoiceActions = {};

queueChoiceActions.getQueueChoiceList = (user_id) => {
  return dispatch => {
    axios.get('/api/queueinfo/queuechoice')
      .then(result => {
        dispatch({
          type: actionTypes.GET_QUEUE_CHOICE_LIST,
          payload: result.data
        });
      });
    axios.put(`api/profiles/viewing/${user_id}/0`)
      .then (() => {
      });
  };
};

queueChoiceActions.setQueueView = (queueId, userId) => {
  return dispatch => {
    if (!queueId) {
      axios.put(`api/profiles/viewing/${userId}/0`);
    }
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