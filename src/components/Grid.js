import React from 'react'
import { Spinner} from 'react-bootstrap'
import PropTypes from 'prop-types'

const Grid = ({onClickCell, cells}) => (
    Object.keys(cells).length == 0 ? (
        <Spinner animation="border" style={{margin:'50%'}}/>
    ) : (
        <div style={ {paddingTop: '100%'} }>
            {
                Object.keys(cells).map(id=> {
                    let cell = cells[id];
                    let len = Math.floor(Math.sqrt(Object.keys(cells).length));
                    let [x, y] = [id % len, Math.floor(id / len)];
                    const style = {
                        left: `${x*2}%`,
                        top: `${y*2}%`,
                        backgroundColor: `rgb(${cell.red}, ${cell.green}, ${cell.blue})`,
                    }
                    return (
                        <div className="cell" key={id} style={style} onClick={ () => onClickCell(id)}></div>
                    )
                
                })
            }
        </div>
    )

)

Grid.prototype = {
    onClickCell: PropTypes.func.isRequired,
    cells: PropTypes.array.isRequired,
}

export default Grid;