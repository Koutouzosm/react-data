import React, { Component } from 'react';
import Navi from '../components/Nav/Nav';
import Row from '../components/Row';
import Datacard from '../components/Datacard/Datacard';
import { connect } from 'react-redux';
import { getData1, getFilterData, clearData } from '../actions/actions'


class View1 extends Component {
   state = {
       data: []
   }

     handleGetData1 = async () => {
      await this.props.getData1()
        this.setState({ data: this.props.data })
    }

    handleFilterData = async () => {
        await this.props.getFilterData()
        this.setState({ data: this.props.data })
    }


    // componentWillUnmount(){
    //     this.props.clearData()
    // }
   
    render() {
        console.log(this.state.data)
        // Set load till data is retrieved
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
                <button onClick={this.handleGetData1}>View Data</button>
                <button onClick={this.handleFilterData}>Filter by age less than 30</button>
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
    { getData1, getFilterData, clearData }
)(View1)