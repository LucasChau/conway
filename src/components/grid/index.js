import React from 'react'
import { Spinner} from 'react-bootstrap'
import PropTypes from 'prop-types'

const Grid = ({onClickCell, cells}) => (
    Object.keys(cells).length === 0 ? (
        <Spinner data-test="loadingComponent" animation="border" style={{margin:'50%'}}/>
    ) : (
        <div style={ {paddingTop: '100%', position: 'relative'} }>
            {
                Object.keys(cells).map((id, _, self) => {
                    let cell = cells[id];
                    let len = Math.floor(Math.sqrt(self.length));
                    let [x, y] = [id % len, Math.floor(id / len)];
                    const style = {
                        left: `${x*2}%`,
                        top: `${y*2}%`,
                        backgroundColor: `rgb(${cell.red}, ${cell.green}, ${cell.blue})`,
                    }
                    return (
                        <div className="cell" data-test='cellComponent' key={id} style={style} onClick={ () => onClickCell(id)}></div>
                    )
                
                })
            }
        </div>
    )
)

Grid.propTypes = {
    onClickCell: PropTypes.func.isRequired,
    cells: PropTypes.objectOf(PropTypes.shape({
        alive: PropTypes.bool.isRequired,
        red: PropTypes.number.isRequired,
        green: PropTypes.number.isRequired,
        blue: PropTypes.number.isRequired
    })).isRequired,
}

export default Grid;