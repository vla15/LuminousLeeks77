import axios from 'axios';
import actionTypes from './actionTypes';
const userActions = {};

userActions.setUserInfo = () => {
  return dispatch => {
    axios.get('/userInfo')
      .then(result => {
        dispatch({
          type: actionTypes.SET_USER_INFO,
          payload: result.data
        });
        dispatch({
          type: 'server/SEND_USER_ID',
          payload: result.data.id
        });
      });
  };
};

userActions.setUserLocation = (profile_id, lat, lng) => {
  console.log('setUserLocation', profile_id, lat, lng);
  return dispatch => {
    axios.put(`/api/profiles/setUserLocation/${profile_id}/${lat}/${lng}`)
      .then(result => {
        dispatch({
          type: actionTypes.SET_USER_LOCATION,
          payload: { lat: lat, lng: lng }
        });
      });
  };
};

module.exports = userActions;
