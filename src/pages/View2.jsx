import React, { Component } from 'react';
import Navi from '../components/Nav';
import Row from '../components/Row';
import Datacard from '../components/Datacard';
import { connect } from 'react-redux';
import { getData } from '../actions/actions';


class View2 extends Component {


    render() {
        return (
            <React.Fragment>
                <Navi />
                <Row>
                    {this.props.data && this.props.data.data2.map (
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
            </React.Fragment>
        );
    }

}

const mapStateToProps = state => ({
    data: state.data
})

export default connect(
    mapStateToProps, 
    {getData}
) (View2)

