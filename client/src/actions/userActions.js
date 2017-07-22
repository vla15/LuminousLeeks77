import axios from 'axios';
import { SET_USER_INFO, SEND_USER_INFO } from './actionTypes';

const setUserInfo = () => {
  return dispatch => {
    axios.get('/userInfo')
      .then(result => {
        dispatch({
          type: SET_USER_INFO,
          payload: result.data
        });
        dispatch({
          type: 'SEND_USER_ID',
          payload: result.data.id
        });
      });
  };
};

export { setUserInfo};
