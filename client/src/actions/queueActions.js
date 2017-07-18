const getQueueInfo = (store) => {
  return (dispatch) => {
    axios.get('/');
  };
};

const openQueue = () => {
  return {
    type: 'OPEN_QUEUE',
    payload: 1
  };
};

const closeQueue = () => {
  return {
    type: 'OPEN_QUEUE',
    payload: 1
  };
};

export {getQueueInfo, openQueue, closeQueue};
