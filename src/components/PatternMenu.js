import React from 'react'
import PropTypes from 'prop-types'
import { ButtonGroup, Button } from 'react-bootstrap'

const PatternMenu = ({patterns, onClickPattern}) => (
    <ButtonGroup vertical>
        {
            Object.keys(patterns).map((type,idx) => (
                <React.Fragment key={`fragment-${idx}`}>
                    <h6 key={`patternType-${type}`}>{type}</h6>
                    {
                        Object.keys(patterns[type]).map(id => (
                                <Button key={`patternId-${id}`} variant="outline-primary" onClick={() => onClickPattern(id)}>{patterns[type][id]}</Button>
                            )
                        )
                    }
                    <hr/>
                </React.Fragment>
            ))
        }
    </ButtonGroup>
)

PatternMenu.prototype = {
    patterns: PropTypes.shape(PropTypes.shape()),
    onClickPattern: PropTypes.func.isRequired,
}

export default PatternMenu