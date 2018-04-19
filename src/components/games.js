import React, { Component } from "react";
import { Link, Route } from "react-router-dom";
import { Tictactoe } from "./tictactoe";
import { RandomSum } from "./randomSum";


function randomSum({ match }) {
    console.log(match);
    let choose = games.find(({ id }) => {
        return id.toString() === match.params.gamesId;
    });
    if (choose.id === 1) {
        return (<RandomSum />);
    }

    if (choose.id === 2) {
        return (<Tictactoe />);
    }
}


const games = [{
    id: 1,
    name: "Random Sum"
}, {
    id: 2,
    name: "Tic Tac Toe"
}]



export class Game extends Component {

    render() {
        return (
            <div>
                <Link to={"/"}>Back</Link>
                {games.map(item => (
                    <li key={item.id}>
                        <Link to={`/games/${item.id}`}>{item.name}</Link>
                    </li>
                ))}
                <hr />
                <Route path={`/games/:gamesId`} component={randomSum} />
            </div>
        );
    }
}