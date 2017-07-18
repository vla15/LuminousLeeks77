import axios from 'axios';

const getUserInfo = (store) => {
  return (dispatch) => {
    axios.get('/userInfo', { params: { store: store } })
      .then((result) => {
        dispatch({
          type: 'GET_USER_INFO',
          payload: result.data
        });
      });
  };
};

export { getUserInfo };
