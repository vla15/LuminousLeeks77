const testSocketConnect = () => {
  return { type: 'server/testSocket_ClientToServer', data: 'Socket data flow from client to server confirmed'};
};

export { testSocketConnect };
