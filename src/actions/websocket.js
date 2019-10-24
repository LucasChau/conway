export const initializeSocket = (url = 'ws://58.176.47.29:8000/ws/') => ({
  type: 'WEBSOCKET:CONNECT',
  payload: { url: url }
})