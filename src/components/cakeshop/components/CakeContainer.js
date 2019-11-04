import React, {Component} from 'react';

import connect from "react-redux/lib/connect/connect";
import buyCake from "../action/CakeAction";
import buyIceCreame from "../action/IceCreameActions";
import CakeReducer from "../reducers/CakeReducer";
import IceCreameReducer from "../reducers/IceCreameReducer";


class CakeContainer extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <h2> No of cakes {this.props.noOfCake}</h2>
                <h2> No of IceCreame {this.props.noOfIceCreame}</h2>
                <button onClick={this.props.buyCake}> Buy Cakes</button>
                <button onClick={this.props.buyIceCreame}> Buy IceCream</button>
            </div>
        );
    }

}

function mapStateToProps(state) {
    debugger
    return {
        noOfCake: state.cake.noOfCake,
        noOfIceCreame: state.ice.noOfIceCreame
    }
}


function mapDispatchToProps(dispatch) {
    return {
        buyCake: () => dispatch(buyCake()),
        buyIceCreame: () => dispatch(buyIceCreame())
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(CakeContainer);



