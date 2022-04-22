import React from "react";
import { StyledCard, StyledTitle } from './styles/Card.styled'
import NumberFormat from 'react-number-format'

function Card(props){

    console.log(props.bgColor);

    return  (
       <StyledCard bgColor={props.bgColor}>
           <StyledTitle className="text-xl">{props.dataLabel}</StyledTitle>
           <p className="text-2xl whitespace-nowrap">{props.name}</p>
           { props.aveQtySoldDaily > 0 ? 
                <NumberFormat 
                    value={props.aveQtySoldDaily}
                    className="text-4xl"
                    displayType={'text'}
                    prefix={'₱ '}
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