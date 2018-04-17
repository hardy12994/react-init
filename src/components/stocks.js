import React from "react";
import * as _ from "underscore";
import { mockData } from "../mock/mockData";
import { Link } from "react-router-dom";

class StockListGrids extends React.Component {

    constructor(props) {
        super(props);
    }

    readyList(listKey, list) {

        let listView = list.map((item, index) =>
            <div className="row" key={index}>
                <div className={!item.stocked ? "col-md-1 red" : "col-md-1"}>{item.name}</div>
                <div className="col-md-1">{item.price}</div>
            </div>
        );

        return (
            <div key={listKey}>
                <div className="row">
                    <h5><b>{listKey}</b></h5>
                </div>
                <div>
                    {listView}
                </div>
            </div>
        );
    }

    render() {
        let view = [];
        for (const key in this.props.categorizeData) {
            let readyNodes = this.readyList(key, this.props.categorizeData[key]);
            view.push(readyNodes);
        }

        return (
            <div>
                {view}
            </div>
        );
    }
}

class StockListView extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        var categorizeData = _.groupBy(this.props.stockList, "category");

        return (<div>
            <div className="row">
                <div className="col-md-1"><b>Name</b></div>
                <div className="col-md-1"><b>Price</b></div>
            </div>
            <StockListGrids categorizeData={categorizeData} />
        </div>);
    }

}

class Action extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <h3>Stock Check</h3>
                <input type="text" value={this.props.querry} onChange={this.props.handelSearchQuerry} placeholder="Search..." /><br /><br />
                <span><input type="checkbox" onChange={this.props.handelItemsInStock} defaultChecked={!this.props.showAllProducts} /> <span>Only show products  in stock</span></span>
                <br />
                <br />
                <StockListView stockList={this.props.stockList} />
            </div>
        );
    }
}

export class Stock extends React.Component {

    constructor() {
        super();
        this.state = {
            stockList: [],
            showAllProducts: true,
            searchQuerry: ""
        };
        this.handelItemsInStock = this.handelItemsInStock.bind(this);
        this.handelSearchQuerry = this.handelSearchQuerry.bind(this);
    }

    componentDidMount() {
        this.setState({
            stockList: mockData
        });
    }

    getUpdatedList(querry = this.state.searchQuerry, showAll) {
        let filteredStock;

        if (!showAll) {
            filteredStock = _.filter(mockData, item => item.stocked);
        }

        if (querry) {
            let stock = filteredStock || mockData;
            filteredStock = _.filter(stock, item => (item.name.toLowerCase()).includes((querry.toLowerCase())));
        }
        return (filteredStock || mockData);
    }

    handelSearchQuerry(event) {

        let typesStr = event.target.value;
        let updatedList = this.getUpdatedList(typesStr, this.state.showAllProducts);

        this.setState({
            searchQuerry: typesStr,
            stockList: updatedList
        });
    }

    handelItemsInStock() {

        let updatedList = this.getUpdatedList(this.state.searchQuerry, !this.state.showAllProducts);

        this.setState({
            showAllProducts: !this.state.showAllProducts,
            stockList: updatedList
        });
    }

    render() {
        const margin = {
            margin: "50px"
        };
        return (<div style={margin}>
            <Link to={"/"}>Back</Link>

            <Action
                querry={this.state.searchQuerry}
                handelItemsInStock={this.handelItemsInStock}
                handelSearchQuerry={this.handelSearchQuerry}
                stockList={this.state.stockList}
                showAllProducts={this.state.showAllProducts}
            />
        </div>);
    }
}