export const initializeSocket = (url = 'ws://'+window.location.hostname+':8000/ws/') => ({
  type: 'WEBSOCKET:CONNECT',
  payload: { url: url }
})