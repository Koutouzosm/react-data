import React, { Component } from 'react';
import Navi from '../components/Nav';
import Row from '../components/Row';
import Datacard from '../components/Datacard';
import Databtn from '../components/Databtn'

class View3 extends Component {


    render() {
        return (
            <React.Fragment>
                <Navi />
                <Row>
                    <Datacard>

                    </Datacard>
                </Row>
                <Databtn>

                </Databtn>
            </React.Fragment>
        );
    }

}

export default View3;