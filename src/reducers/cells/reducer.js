import { types } from '../../actions/types';

export default (state = {}, action) => { 
    switch(action.type) {
        case types.RECEIVE_INITIAL_CELLS:
            return Object.assign({}, state, action.payload.cells);
        case types.RECEIVE_ACTIVATE_CELL:
            return Object.assign({}, state,
                        {
                            [action.payload.cell_id]: {
                                alive: true,
                                red: action.payload.red,
                                green: action.payload.green,
                                blue: action.payload.blue
                            }
                        });
        case types.RECEIVE_UPDATE_CELLS:
            return Object.assign({}, state, action.payload.cells);
        case types.REQUEST_INITIAL_CELLS:
            return state;
        case types.REQUEST_ACTIVATE_CELL:
            return state;
        default:
            return state;
    }
}