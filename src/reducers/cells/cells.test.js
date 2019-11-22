import { types } from '../../actions/types';
import cellsReducer from './reducer';

describe('Cells Reducer', () =>{
    let cells;

    beforeEach(() => {
        cells = {
            1: {
                alive: false,
                red: 1,
                green: 2,
                blue: 3,
            },
            2: {
                alive: false,
                red: 1,
                green: 2,
                blue: 3,
            },
            3: {
                alive: false,
                red: 1,
                green: 2,
                blue: 3,
            },
            4: {
                alive: false,
                red: 1,
                green: 5,
                blue: 3,
            },
        }
    });

    it('Should return default state', () => {
        const newState = cellsReducer(undefined, {});
        expect(newState).toEqual({});
    });

    it('Should return new state if receiving type', () => {
        
        const newState = cellsReducer(undefined, {
            type: types.RECEIVE_INITIAL_CELLS,
            payload: {
                cells: cells
            }
        });
        expect(newState).toEqual(cells);
    });

    it('Should activate specified cell', () => {
        const expectedCells = {
            1: {
                alive: false,
                red: 1,
                green: 2,
                blue: 3,
            },
            2: {
                alive: false,
                red: 1,
                green: 2,
                blue: 3,
            },
            3: {
                alive: true,
                red: 3,
                green: 5,
                blue: 6,
            },
            4: {
                alive: false,
                red: 1,
                green: 5,
                blue: 3,
            },
        }
        const newState = cellsReducer(cells, {
            type: types.RECEIVE_ACTIVATE_CELL,
            payload: {
                cell_id: 3,
                red: 3,
                green: 5,
                blue: 6
            }
        });
        expect(newState).toEqual(expectedCells);
    });
});