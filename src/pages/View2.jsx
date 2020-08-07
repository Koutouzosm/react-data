import React, { Component } from 'react';
import Navi from '../components/Nav/Nav';
import Row from '../components/Row';
import Datacard from '../components/Datacard/Datacard';
import { connect } from 'react-redux';
import { getData2, getData1, clearData } from '../actions/actions';


class View2 extends Component {
    state = {
        data: []
    }

    // async componentDidMount(){
    //     await this.props.getData()
    // }

    // componentDidUpdate(prevProps) {
    //     if (this.props.data !== prevProps.data){
    //         this.setState({ data: this.props.data})
    //     }
    // }

    // componentWillUnmount(){
    //     this.props.clearData()
    // }

    handleGetData1 = async () => {
        await this.props.getData1()
        this.setState({ data: this.props.data })
    }

    handleGetData2 = async () => {
        await this.props.getData2()
        this.setState({ data: this.props.data })
    }

    render() {
        if (!this.state.data) {
            return <h1>Loading...</h1>
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
                    <button onClick={this.handleGetData2}>View Data</button>
                    <button onClick={this.handleGetData1}>View Data1</button>
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
    { getData2, getData1, clearData }
)(View2)

