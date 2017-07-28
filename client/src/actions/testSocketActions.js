const testSocketActions = {};

testSocketActions.testSocketConnect = () => {
  return { type: 'server/testSocket_ClientToServer', data: 'Socket data flow from client to server confirmed'};
};

module.exports = testSocketActions;
