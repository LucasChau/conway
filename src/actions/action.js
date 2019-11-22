import { types } from "./types";

export function requestActivateCell(cellId) {
    return {
        type: 'WEBSOCKET:SEND',
        payload: {
            command: types.REQUEST_ACTIVATE_CELL,
            cell_id: cellId,
        }
    }
}

export function requestCreatePattern(patternId) {
    return {
        type: 'WEBSOCKET:SEND',
        payload: {
            command: types.REQUEST_CREATE_PATTERN,
            pattern_id: patternId,
        }
    }
}

export function requestInitialCells() {
    return {
        type: 'WEBSOCKET:SEND',
        payload: {
            command: types.REQUEST_INITIAL_CELLS
        }
    }
}