import { requestInitialCells } from '../actions/action'

let webSocket;
export const websocket = store => next => action => {
    const dispatch = store.dispatch;
    switch (action.type) {
        case 'WEBSOCKET:CONNECT':
            webSocket = new WebSocket(action.payload.url);

            webSocket.onopen = () => {
                dispatch({ type: 'WEBSOCKET:OPEN' });
                dispatch(requestInitialCells());
            };
            webSocket.onclose = (event) => dispatch({ type: 'WEBSOCKET:CLOSE', payload: event });
            webSocket.onmessage = (event) => {
                let data = JSON.parse(event.data);
                dispatch({ type: data.type, payload: data.payload })
            };
            break;

        case 'WEBSOCKET:SEND':
            webSocket.send(JSON.stringify(action.payload));
            break;

        case 'WEBSOCKET:DISCONNECT':
            webSocket.close();
            break;

        default:
            break;
    };

  return next(action);
};