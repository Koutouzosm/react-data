import React, { Component } from 'react';
import Navi from '../components/Nav/Nav';
import Row from '../components/Row';
import Datacard from '../components/Datacard/Datacard';
import { connect } from 'react-redux';
import { getData } from '../actions/actions'


class View3 extends Component {


    render() {
        return (
            <React.Fragment>
                <Navi />
                <Row>
                    {this.props.data && this.props.data.data3.map(
                        myData => (
                            <Datacard
                                id={myData.id}
                                key={myData.id}
                                name={myData.name}
                                age={myData.age}
                                image={myData.image}
                                occupation={myData.occupation}
                                location={myData.location}
                            />
                        ))}
                </Row>
                <Row>
                    <button onClick={() => this.props.getData()}>Get Data</button>
                </Row>
            </React.Fragment>
        );
    }

}

const mapStateToProps = state => ({
    data: state.data
})

export default connect(
    mapStateToProps,
    { getData }
)(View3)
