import React, { Component } from 'react';
import Navi from '../components/Nav';
import Row from '../components/Row';
import Datacard from '../components/Datacard';
import Databtn from '../components/Databtn'
import myData from '../mydata.json';

class View2 extends Component {


    state = {
        myData
    };

    getData = id => {
        const myData = this.state.myData.filter(myData => myData.id);
        this.setState({ myData });
    };


    render() {
        return (
            <React.Fragment>
                <Navi />
                <Row>
                    {this.state.myData.map (
                        myData => (
                    <Datacard
                        id={myData.id}
                        key={myData.id}
                        name={myData.name}
                        image={myData.image}
                        occupation={myData.occupation}
                        location={myData.location}
                    />
                    ))}
                </Row>
                <Databtn>

                </Databtn>
            </React.Fragment>
        );
    }

}


export default View2;