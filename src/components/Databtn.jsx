import React from 'react';
import { Button } from 'reactstrap';

const Databtn = props => {
    return (
        <Button onClick={() => props.getData()} color="primary" size="lg">Get Data</Button>
    );
}

export default Databtn;