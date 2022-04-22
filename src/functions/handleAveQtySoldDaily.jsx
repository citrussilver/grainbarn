import React from "react";
import NumberFormat from 'react-number-format'

function handleAveQtySoldDaily(props) {
    if(typeof(props.aveQtySoldDaily) == 'object') {
        //console.log('type is object');
        return <p className="text-2xl">Ave. Sold per day: {props.aveQtySoldDaily}</p>
    } else {
        if(props.aveQtySoldDaily > 0) {
            return <NumberFormat 
                value={props.aveQtySoldDaily}
                className="text-2xl"
                displayType={'text'}
                prefix={'₱ '}
                thousandSeparator={true}
                renderText={(value, props) => <p {...props}>{value}</p>}
            />
        }
    }
}

export default handleAveQtySoldDaily;