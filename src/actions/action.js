export const REQUEST_ACTIVATE_CELL = 'REQUEST_ACTIVATE_CELL';
export const REQUEST_CREATE_PATTERN = 'REQUEST_CREATE_PATTERN';
export const REQUEST_INITIAL_CELLS = 'REQUEST_INITIAL_CELLS';

export const RECEIVE_INITIAL_CELLS = 'RECEIVE_INITIAL_CELLS';
export const RECEIVE_ACTIVATE_CELL = 'RECEIVE_ACTIVATE_CELL';
export const RECEIVE_UPDATE_CELLS = 'RECEIVE_UPDATE_CELLS';
export const RECEIVE_CREATE_PATTERN = 'RECEIVE_CREATE_PATTERN';

export function requestActivateCell(cellId) {
    return {
        type: 'WEBSOCKET:SEND',
        payload: {
            command: REQUEST_ACTIVATE_CELL,
            cell_id: cellId,
        }
    }
}

export function requestCreatePattern(patternId) {
    return {
        type: 'WEBSOCKET:SEND',
        payload: {
            command: REQUEST_CREATE_PATTERN,
            pattern_id: patternId,
        }
    }
}

export function requestInitialCells() {
    return {
        type: 'WEBSOCKET:SEND',
        payload: {
            command: REQUEST_INITIAL_CELLS
        }
    }
}