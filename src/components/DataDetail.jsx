import React from 'react'
import { StyledDataDetail } from './styles/DataDetail.styled'
import NumberFormat from 'react-number-format'

function DataDetail(props) {
    return (
        <StyledDataDetail>
            <p className="text-3xl whitespace-nowrap">{props.name}</p>
            { props.customerType ? <p className='text-base'>{props.customerType}</p> : '' }
            { props.customerCount ? <p className='text-4xl'>{props.customerCount}</p> : '' }
            { props.aveQtySoldDaily ? <p className='text-sm'>Ave. qty sold per day</p> : '' }
            {
                props.aveQtySoldDaily ?
                <NumberFormat 
                    value={props.aveQtySoldDaily}
                    className="text-4xl font-medium whitespace-nowrap"
                    displayType={'text'}
                    thousandSeparator={true}
                    renderText={(value, props) => <p {...props}>{value}</p>}
                />
                :
                <NumberFormat 
                    value={props.aveSalesPerDay}
                    className="whitespace-nowrap"
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