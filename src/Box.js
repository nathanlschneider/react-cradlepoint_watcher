import React, { Component } from 'react';
import './Box.scss';
export default class Box extends Component {
    constructor(props) {
        super(props);
        this.state = {
            change: false,
            data: null,
            size: null,
            filter: 'LTE',
            changeCounter: 0
        };
    }

    componentDidMount() {}

    componentDidUpdate(prevProps) {
        if (prevProps.conType !== this.props.conType) {
            this.setState({ change: true });
            this.setState({ changeCounter: this.state.changeCounter + 1 });
            console.log(Date(), prevProps, this.props);
        }
    }

    render() {
        if (this.props.conType !== this.state.filter || this.props.name === '904' || this.props.name === '906'  || this.props.name.length > 3) {
            return null;
        }
        return (
            <div
                className="box-wrapper"
                style={{
                    zoom: `${this.props.size}%`,
                    opacity: this.props.status === 'offline' ? '.3' : '1'
                }}
            >
                <div
                    className="device-box"
                    style={{
                        background: this.props.account === '28784' ? '#3073B1' : null
                    }}
                >
                    <div className="device-name">{this.props.name}</div>
                    <div
                        className="device-conType"
                        style={{
                            color: this.props.conType === 'LTE' ? '#f66464' : null
                        }}
                    >
                        {this.props.conType} {this.state.changeCounter !== 0 ? this.state.changeCounter : null}
                    </div>
                    <div className="secondary" style={{ animation: this.state.change ? 'longColorFade 28800s' : null }}>
                        <div className="device-status">{this.props.status}</div>
                    </div>
                </div>
            </div>
        );
    }
}
