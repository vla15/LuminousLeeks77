import axios from 'axios';
import { SET_USER_INFO, SEND_USER_INFO, SET_USER_LOCATION } from './actionTypes';

const setUserInfo = () => {
  return dispatch => {
    axios.get('/userInfo')
      .then(result => {
        dispatch({
          type: SET_USER_INFO,
          payload: result.data
        });
        dispatch({
          type: 'server/SEND_USER_ID',
          payload: result.data.id
        });
      });
  };
};

const setUserLocation = (profile_id, lat, lng) => {
  return dispatch => {
    axios.put(`/api/profiles/setUserLocation/${lat}/${lng}`)
      .then(result => {
        dispatch({
          type: SET_USER_LOCATION,
          payload: { lat: lat, lng: lng }
        });
      });
  };
};

export { setUserInfo};
