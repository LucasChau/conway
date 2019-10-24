import { connect } from 'react-redux'
import Grid from '../components/Grid';
import { requestActivateCell } from '../actions/action';

const mapStateToProps = state => {
    return {
        cells: state.conwayReducer.cells,
    };
}

const mapDispatchToProps = dispatch => {
    return {
        onClickCell: cellId => {
            dispatch(requestActivateCell(cellId));
        }
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Grid);
