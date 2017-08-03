import axios from 'axios';
import actionTypes from './actionTypes';
const queueActions = {};

queueActions.getQueueInfoCustomer = queue_id => {
  return dispatch => {
    axios.get(`/api/queueInfo/getQueueInfoCustomer/${queue_id}`)
      .then(result => {
        dispatch({
          type: actionTypes.GET_QUEUE_INFO_CUSTOMER,
          payload: result.data
        });
      });
  };
};

queueActions.getQueueInfoHost = queue_id => {
  return dispatch => {
    axios.get(`/api/queueInfo/getQueueInfoHost/${queue_id}`)
      .then(result => {
        dispatch({
          type: actionTypes.GET_QUEUE_INFO_HOST,
          payload: result.data
        });
      });
  };
};

queueActions.enqueueHost = (user_id, queue_id, party_size, first_name, phone_number, lat, lng) => {
  return dispatch => {
    axios.put(`/api/partyInfo/add/${queue_id}/${user_id}/${party_size}/${first_name}/${phone_number}/${lat}/${lng}`)
      .then(() => {
        axios.get(`/api/queueInfo/getQueueInfoHost/${queue_id}`)
          .then(result => {
            dispatch({
              type: actionTypes.ENQUEUE_HOST,
              payload: result.data
            });
            dispatch({
              type: actionTypes.CLEAR_PARTY,
              payload: result.data
            });
          });
      });
  };
};

queueActions.dequeueHost = (queue_id, party_id, user_id) => {
  return dispatch => {
    axios.delete(`/api/partyInfo/rm/${queue_id}/${party_id}`)
      .then(() => {
        axios.get(`/api/queueInfo/getQueueInfoHost/${queue_id}`)
          .then(result => {
            dispatch({
              type: actionTypes.DEQUEUE_HOST,
              payload: result.data
            });
          });
      });
    axios.put(`api/profiles/viewing/${user_id}/${queue_id}`);
  };
};

queueActions.toggleQueue = (queue_id) => {
  return dispatch => {
    axios.put(`/api/queueInfo/toggleQueue/${queue_id}`)
      .then(() => {
        axios.get(`/api/queueInfo/getQueueInfoHost/${queue_id}`)
          .then(result => {
            dispatch({
              type: actionTypes.TOGGLE_QUEUE,
              payload: result.data
            });
            dispatch({
              type: actionTypes.CLEAR_PARTY,
              payload: result.data
            });
          });
      });
  };
};

module.exports = queueActions;
