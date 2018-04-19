import React, { Component } from "react";
import { Link, Route } from "react-router-dom";
import { Tictactoe } from "./tictactoe";


export class Game extends Component {

    render() {
        return (
            <div>
                <Link to="/games/random-sum">Play Random Sum</Link>
                <Tictactoe></Tictactoe>
                <Route path="/games/random-sum" render={() => (<h1>RandomSum Component</h1>)} ></Route>
            </div>
        );
    }

}