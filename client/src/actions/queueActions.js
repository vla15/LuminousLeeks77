import axios from 'axios';
import {
  GET_QUEUE_INFO,
  TOGGLE_QUEUE
} from './actionTypes';

const getQueueInfo = () => {
  return dispatch => {
    axios.get('/api/queueInfo/1/1')
    .then(result => {
      dispatch({
        type: GET_QUEUE_INFO,
        payload: result.data
      })
    })
  };
};

const toggleQueue = () => {
  return dispatch => {
    axios.get('/api/toggleQueue/1/1')
    .then(result => {
      dispatch({
        type: TOGGLE_QUEUE,
        payload: null
      })
    })
  }
}

export { getQueueInfo };
