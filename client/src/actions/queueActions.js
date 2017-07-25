import axios from 'axios';
import {
  GET_QUEUE_INFO_HOST,
  TOGGLE_QUEUE,
  GET_QUEUE_INFO_CUSTOMER,
  ENQUEUE_HOST
} from './actionTypes';

const getQueueInfoCustomer = queue_id => {
  return dispatch => {
    axios.get(`/api/queueInfo/getQueueInfoCustomer/${queue_id}`)
    .then(result => {
      dispatch({
        type: GET_QUEUE_INFO_CUSTOMER,
        payload: result.data
      })
    })
  }
}

const getQueueInfoHost = queue_id => {
  return dispatch => {
    axios.get(`/api/queueInfo/getQueueInfoHost/${queue_id}`)
    .then(result => {
      dispatch({
        type: GET_QUEUE_INFO_HOST,
        payload: result.data
      })
    })
  }
}

const enqueueHost = (user_id, queue_id, party_size, first_name, phone_number) => {
  return dispatch => {
    axios.put(`/api/partyInfo/add/${queue_id}/${user_id}/${party_size}/${first_name}/${phone_number}`)
    .then(() => {
      axios.get(`/api/queueInfo/getQueueInfoHost/${queue_id}`)
      .then(result => {
        dispatch({
          type: ENQUEUE_HOST,
          payload: result.data
        })
      })
    });
  };
};

const toggleQueue = (queue_id) => {
  return dispatch => {
    axios.put(`/api/queueInfo/toggleQueue/${queue_id}`)
    .then(result => {
      console.log(result);
      dispatch({
        type: TOGGLE_QUEUE,
        payload: result.data
      })
    })
  }
}

export { getQueueInfoHost, toggleQueue, getQueueInfoCustomer, enqueueHost };
