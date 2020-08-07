import React, { Component } from 'react';
import Navi from '../components/Nav/Nav';
import Row from '../components/Row';
import Datacard from '../components/Datacard/Datacard';
import { connect } from 'react-redux';
import { getData3, clearData } from '../actions/actions'


class View3 extends Component {
    state = {
        data: []
    }

    handleGetData3 = async () => {
        await this.props.getData3()
        this.setState({ data: this.props.data })
    }


    render() {
        if (!this.state.data) {
            return <h1>Loading....</h1>
        }
        return (
            <React.Fragment>
                <Navi />
                <Row>
                    {this.state.data.map(
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
                    <button onClick={this.handleGetData3}>Get Data</button>
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
    { getData3, clearData}
)(View3)
