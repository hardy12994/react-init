import React from "react";
import { Link } from "react-router-dom";
import "../css/index.css";

export const BaseComponet = () => (
    <div>
        <h4> Click the Links below - </h4>
        <ul>
            <li>
                <Link to={"/game"}>Want to Play Game ?</Link>
            </li>
            <li>
                <Link to={"/stock-market"}>Stock Market?</Link>
            </li>
        </ul>
    </div>
);