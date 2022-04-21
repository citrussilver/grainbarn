import React from "react";
import { StyledCard, StyledTitle } from './styles/Card.styled'
import NumberFormat from 'react-number-format'
import handleAveQtySoldDaily from '../functions/handleAveQtySoldDaily'

function Card(props){

    return  (
       <StyledCard>
           <StyledTitle>{props.dataLabel}</StyledTitle>
           <p className="ml-4 text-2xl">{props.name}</p>
           { handleAveQtySoldDaily(props) }
           { props.totalDaySale > 0 ? 
            <NumberFormat 
                value={props.totalDaySale}
                className="ml-4 text-2xl"
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
                className="ml-4 text-2xl"
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