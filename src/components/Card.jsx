import React from "react";
import { StyledCard, StyledTitle } from './styles/Card.styled'
import NumberFormat from 'react-number-format'

function Card(props){

    return  (
       <StyledCard bgColor={props.bgColor}>
           <StyledTitle className="text-xl">{props.dataLabel}</StyledTitle>
           <br/>
           <p className="text-2xl whitespace-nowrap">{props.name}</p>
           { props.aveQtySoldDaily ? <p className='text-sm'>Ave. qty sold per day</p> : '' }
           { props.aveQtySoldDaily > 0 ? 
                <NumberFormat 
                    value={props.aveQtySoldDaily}
                    className="text-4xl"
                    displayType={'text'}
                    thousandSeparator={true}
                    renderText={(value, props) => <p {...props}>{value}</p>}
                />
                : ''
           }
           { props.totalDaySale > 0 ?
            <NumberFormat 
                value={props.totalDaySale}
                className="text-4xl"
                displayType={'text'}
                thousandSeparator={true}
                prefix={'₱ '}
                renderText={(value, props) => <p {...props}>{value}</p>}
            />
            : ''}
            {
                props.totalMonthSale > 0 ?
                <NumberFormat 
                value={props.totalMonthSale}
                className="text-4xl"
                displayType={'text'}
                thousandSeparator={true}
                prefix={'₱ '}
                renderText={(value, props) => <p {...props}>{value}</p>}
            />
            : ''}
       </StyledCard>
      );
}

export default Card;