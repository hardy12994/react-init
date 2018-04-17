import React, { Component } from "react";
import ReactDOM from "react-dom";
import { AppConfig } from "./app";
import "./css/index.css";


class Root extends Component {

    render() {
        return (
           <AppConfig></AppConfig>
        );
    }
}

ReactDOM.render(<Root />, document.getElementById("root"));