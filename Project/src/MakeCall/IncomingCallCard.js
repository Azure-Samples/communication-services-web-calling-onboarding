import React from "react";
import { Icon } from '@fluentui/react/lib/Icon';

export default class IncomingCallCard extends React.Component {
    constructor(props) {
        super(props);
        this.incomingCall = props.incomingCall;
        this.acceptCallOptions = props.acceptCallOptions;
    }

    async componentWillMount() {
        this.acceptCallOptions = { videoOptions: (await this.acceptCallOptions()).videoOptions };
    }

    render() {
        return (
            <div className="ms-Grid mt-2">
                <div className="ms-Grid-row">
                    <div className="ms-Grid-col ms-lg6">
                        <h2>Incoming Call...</h2>
                    </div>
                    <div className="ms-Grid-col ms-lg6 text-right">
                        {
                            this.call &&
                            <h2>Call Id: {this.state.callId}</h2>
                        }
                    </div>
                </div>
                <div className="custom-row">
                    <div className="ringing-loader mb-4"></div>
                </div>
                <div className="ms-Grid-row text-center">
                    <span className="incoming-call-button"
                        onClick={() => this.incomingCall.accept(this.acceptCallOptions)}>
                        <Icon iconName="IncomingCall"/>
                    </span>
                    <span className="incoming-call-button"
                        onClick={() => { this.incomingCall.reject(); this.props.onReject(); }}>
                        <Icon iconName="DeclineCall"/>
                    </span>
                </div>
            </div>
        );
    }
}