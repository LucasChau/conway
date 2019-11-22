import { connect } from 'react-redux'
import Grid from '../components/grid';
import { requestActivateCell } from '../actions/action';

const mapStateToProps = state => {
    return {
        cells: state.cells,
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
