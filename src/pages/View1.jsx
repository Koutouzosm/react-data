import React, { Component } from 'react';
import Navi from '../components/Nav';
import Row from '../components/Row';
import Datacard from '../components/Datacard';
import { connect } from 'react-redux';
import { getData, getFilterData } from '../actions/actions' 



class View1 extends Component {

componentDidMount() {
    this.props.getData();
}

    render() {
        console.log(this.props)
        return (
            <React.Fragment>
                <Navi />
                <Row>
                    {this.props.filterData ? this.props.filterData.map (
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
                    )):this.props.data && this.props.data.data1.map (
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
                <button onClick={() => this.props.getFilterData()}>Filter by age less than 30</button>
            </React.Fragment>
        );
    }

}


const mapStateToProps = state => ({
    data: state.data,
    filterData: state.filterData
})

export default connect(
    mapStateToProps, 
    {getData, getFilterData}
) (View1)