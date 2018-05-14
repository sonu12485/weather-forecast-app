import React from 'react';
import _ from 'lodash';
import { Sparklines, SparklinesLine, SparklinesReferenceLine } from 'react-sparklines';

const Chart = (props) => {
    const average= _.round(_.sum(props.data)/props.data.length);

    return (
            <div>
                <Sparklines width={180} height={120} margin={5} data={props.data} >
                    <SparklinesLine color={props.color} />
                    <SparklinesReferenceLine type="avg" />
                </Sparklines>
                <div>{ average } {props.unit}</div>
            </div>
    );
}

export default Chart;