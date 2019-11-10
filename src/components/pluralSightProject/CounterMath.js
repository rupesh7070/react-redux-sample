import React, {Component} from 'react';
import connect from "react-redux/lib/connect/connect";
import increaseCounterActionCreater from "./CounterMathAction";

class CounterMath extends Component {
    constructor(props) {
        super(props);
        this.state = {
            localCount: 0
        }
        this.incrementLocalState = this.incrementLocalState.bind(this)
    }

    incrementLocalState() {
        this.setState({
            localCount: this.state.localCount + 1
        })
    }

    render() {
        return (
            <div>
                <h1 onClick={this.props.increase}> CLick to increment from redux {this.props.count}</h1>
                <h1 onClick={this.incrementLocalState}> CLick to increment from local state {this.state.localCount}</h1>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        count: state.mathCount.count
    }
}

function mapDispatchToProps(dispatch) {
    return {
        increase: () => dispatch(increaseCounterActionCreater())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CounterMath);
