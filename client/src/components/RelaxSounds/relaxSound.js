import React, { Component } from "react";
import relaxes from "./relaxSounds.json";
import API from './../../utils/API';
import withAuth from './../withAuth';
import Player from "../Player";
import "./style.css";


class RelaxSounds extends Component {
    state = {
        metricID: "",
        metrics: []
    }

    componentDidMount() {
        API.getUser(this.props.user.id).then(res => {
            this.setState({
                metricID: res.data.metric
            })
            let pageOn = this.props.history.location.pathname.replace("/", "")
            API.addToMetrics(res.data.metric, pageOn)
        });
    }

    render() {
        return (
            <div className="container">
                <div className="row">
                    {relaxes.map((relax) => {
                        return (
                            <Player player={relax} />
                        )}
                    )}
                </div>
            </div>
        )
    }
}

export default withAuth(RelaxSounds);


