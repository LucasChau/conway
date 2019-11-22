import { types } from '../../actions/types';

const initialState = {
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
}

export default (state = initialState, action) => { 
    switch(action.type) {
        case types.RECEIVE_CREATE_PATTERN:
            return state;
        case types.REQUEST_CREATE_PATTERN:
            return state;
        default:
            return state;
    }
}