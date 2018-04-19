import React, { Component } from "react";


export class RandomSum extends Component {

    render() {
        return (<div>

            <div className="row">
                <div className="col-md-3 text-center">
                    <input type="text" name="" id="" placeholder="Enter Player Name" />
                </div>
                <div className="col-md-6">
                    <div className="calBox">
                        <span className="startText">Both Players !! Please Enter your name to Start</span>
                    </div>
                </div>
                <div className="col-md-3 text-center">
                    <input type="text" name="" id="" placeholder="Enter Player Name" />
                </div>
            </div>

        </div>);
    }
}