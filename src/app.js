import React, { Component } from "react";
import { ReactDOM } from "react-dom";
import { BrowserRouter, Route } from "react-router-dom";

import { Stock } from "./components/stocks";
import { Tictactoe } from "./components/tictactoe";
import { Game } from "./components/games";
import { BaseComponet } from "./components/baseCompoent";


export class AppConfig extends Component {

    render() {
        return (
            <BrowserRouter>
                <div>
                    <Route path="/" exact={true} component={BaseComponet}></Route>
                    <Route path="/games" exact component={Game}></Route>
                    <Route path="/stock-market" component={Stock}></Route>
                </div>
            </BrowserRouter>
        );
    }
}
