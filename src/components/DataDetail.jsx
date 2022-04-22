import React from 'react'
import { StyledDataDetail } from './styles/DataDetail.styled'
import NumberFormat from 'react-number-format'

function DataDetail(props) {
    return (
        <StyledDataDetail>
            <p className="text-3xl whitespace-nowrap">{props.name}</p>
            { props.aveQtySoldDaily ? <p className='text-sm'>Ave. quantity sold per day</p> : '' }
            {
                props.aveQtySoldDaily ?
                <NumberFormat 
                    value={props.aveQtySoldDaily}
                    className="text-4xl font-medium"
                    displayType={'text'}
                    thousandSeparator={true}
                    renderText={(value, props) => <p {...props}>{value}</p>}
                />
                :
                <NumberFormat 
                    value={props.aveSalesPerDay}
                    className="text-4xl font-medium"
                    displayType={'text'}
                    prefix={'₱ '}
                    thousandSeparator={true}
                    renderText={(value, props) => <p {...props}>{value}</p>}
                />
            }
            
        </StyledDataDetail>
    )
}

export default DataDetail