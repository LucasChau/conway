import { RECEIVE_INITIAL_CELLS, RECEIVE_ACTIVATE_CELL, RECEIVE_UPDATE_CELLS, RECEIVE_CREATE_PATTERN, REQUEST_INITIAL_CELLS, REQUEST_ACTIVATE_CELL, REQUEST_CREATE_PATTERN } from '../actions/action';

const initialState = {
    patterns: {
        'Still lifes': {
            1: 'Block',
            2: 'Bee-hive',
            3: 'Loaf',
            4: 'Boat',
            5: 'Tub',
        },
        'Oscillators': {
            6: 'Bliner',
            7: 'Toad',
            8: 'Beacon',
        },
        'Spaceships': {
            11: 'Glider',
            12: 'Light-weight spaceship',
            13: 'Middle-weight spaceship',
            14: 'Heavy-weight spaceship',
        }
    },
    cells: {},
}

const conwayReducer = (state = initialState, action) => { 
    switch(action.type) {
        case RECEIVE_INITIAL_CELLS:
            return Object.assign({}, state, {
                cells: action.payload.cells
            });
        case RECEIVE_ACTIVATE_CELL:
            return Object.assign({}, state, {
                cells: Object.assign({}, state.cells,
                        { 
                            [action.payload.cell_id]: {
                                alive: true,
                                red: action.payload.red,
                                green: action.payload.green,
                                blue: action.payload.blue
                            }
                        })
            });
        case RECEIVE_UPDATE_CELLS:
            return Object.assign({}, state, {
                cells: action.payload.cells
            });
        case RECEIVE_CREATE_PATTERN:
            return state;
        case REQUEST_INITIAL_CELLS:
            return state;
        case REQUEST_ACTIVATE_CELL:
            return state;
        case REQUEST_CREATE_PATTERN:
            return state;
        default:
            return state;
    }
}


export default conwayReducer