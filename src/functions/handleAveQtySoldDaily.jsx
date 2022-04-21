import React from "react";
import NumberFormat from 'react-number-format'

function handleAveQtySoldDaily(props) {
    if(typeof(props.aveQtySoldDaily) == 'object') {
        //console.log('type is object');
        return <p className="ml-4 text-2xl">Ave. Sales per day: {props.aveQtySoldDaily}</p>
    } else {
        if(props.aveQtySoldDaily > 0) {
            return <NumberFormat 
                value={props.aveQtySoldDaily}
                className="ml-4 text-2xl"
                displayType={'text'}
                prefix={'₱ '}
                thousandSeparator={true}
                renderText={(value, props) => <p {...props}>Ave. Sales per day: {value}</p>}
            />
        }
    }
}

export default handleAveQtySoldDaily;