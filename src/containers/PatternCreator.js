import { connect } from 'react-redux'
import PatternMenu from '../components/PatternMenu';
import { requestCreatePattern } from '../actions/action';

const mapStateToProps = state => {
    return {
        patterns: state.patterns,
    };
}

const mapDispatchToProps = dispatch => {
    return {
        onClickPattern: (patternId) => {
            dispatch(requestCreatePattern(patternId));
        }
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(PatternMenu);
