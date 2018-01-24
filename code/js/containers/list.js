import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

class List extends Component {
    constructor() {
        super();
        this.state = {spread: 0};
    }
    showAsk() {
        return this.props.ask.map((ask) => {
            return (
                <tr key={ask.id}><td></td><td>{ask.cost}</td><td>{ask.value}</td></tr>
            );
        });
    }
    showBid() {
        return this.props.bid.map((bid) => {
            return (
                <tr key={bid.id}><td>{bid.value}</td><td>{bid.cost}</td><td></td></tr>
            );
        });
    }
    showSpread() {
        return (
            <tr><td></td><td key={this.props.spread.id}>{this.props.spread.cost}</td><td></td></tr>
        )
    }
    changeSpread() {
        setTimeout(() => {
            let rand = Math.round(Math.random());
            this.setState({spread: rand});
            if (this.state.spread == 0) {
                this.props.spread.cost--;
                this.props.ask.map((obj, i) => {
                    obj.cost--;
                    if (i < this.props.ask.length - 1) {
                        this.props.ask[i].value = this.props.ask[i + 1].value;
                    } else {
                        obj.value = Math.floor(Math.random() * 100);
                    }
                    return obj;
                });
                this.props.bid.map((obj, i) => {
                    obj.cost--;
                    if (i < this.props.bid.length - 1) {
                        this.props.bid[i].value = this.props.bid[i + 1].value;
                    } else {
                        obj.value = Math.floor(Math.random() * 100);
                    }
                    return obj;
                });
            } else {
                this.props.spread.cost++;
                let saveAskValue = [];
                let saveBidValue = [];
                this.props.ask.map((obj, i) => {
                    obj.cost++;
                    saveAskValue.push(obj.value);
                    if (i == 0) {
                        obj.value = Math.floor(Math.random() * 100);
                    } else if (i < this.props.ask.length) {
                        this.props.ask[i].value = saveAskValue[i - 1];
                    }
                    return obj;
                });
                this.props.bid.map((obj, i) => {
                    obj.cost++;
                    saveBidValue.push(obj.value);
                    if (i == 0) {
                        obj.value = Math.floor(Math.random() * 100);
                    } else if (i < this.props.bid.length) {
                        this.props.bid[i].value = saveBidValue[i - 1];
                    }
                    return obj;
                });
            }
        }, 1000)
    }
    render() {
        this.changeSpread();
        return(
            <table>
                <tbody>
                    <tr><th>Bid</th><th>Цена</th><th>Ask</th></tr>
                    {this.showAsk()}
                    {this.showSpread()}
                    {this.showBid()}
                </tbody>
            </table>
        ) 
    }
}

function mapStateToProps(state) {
    return {
        ask: state.ask,
        bid: state.bid,
        spread: state.spread
    }
}

export default connect(mapStateToProps)(List);