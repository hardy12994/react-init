import React from "react";
import * as _ from "underscore";
import { mockData } from "./mockData";

class ListGrids extends React.Component {

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
        let view = []
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
        var categorizeData = _.groupBy(this.props.stockList, 'category');

        return (<div>
            <div className="row">
                <div className="col-md-1"><b>Name</b></div>
                <div className="col-md-1"><b>Price</b></div>
            </div>
            <ListGrids categorizeData={categorizeData} />
        </div>);
    };

}


export class Stock extends React.Component {

    constructor() {
        super();
        this.state = {
            stockList: [],
            showAllProducts: true,
            searchQuerry: ''
        };
        this.itemsInStock = this.itemsInStock.bind(this);
        this.handelSearchQuerry = this.handelSearchQuerry.bind(this);
    }


    handelSearchQuerry(event) {
        let typesStr = event.target.value;
        let filterData = _.filter(this.state.stockList, item => (item.name.toLowerCase()).includes((typesStr.toLowerCase())));

        let data = typesStr ? (filterData.length ? filterData : mockData) : mockData;

        this.setState({
            searchQuerry: typesStr,
            stockList: data
        });

    }

    componentDidMount() {
        this.setState({
            stockList: mockData
        });
    }

    itemsInStock() {
        let data = this.state.showAllProducts ? _.filter(this.state.stockList, item => item.stocked) : mockData;
        this.setState({
            showAllProducts: !this.state.showAllProducts,
            stockList: data
        });
    }

    render() {
        const margin = {
            margin: '50px'
        }

        return (<div style={margin}>

            <h3>Stock Check</h3>
            <input type="text" value={this.state.searchQuerry} onChange={this.handelSearchQuerry} placeholder="Search..." /><br /><br />
            <span><input type="checkbox" onChange={this.itemsInStock} defaultChecked={!this.state.showAllProducts} /> <span>Only show products  in stock</span></span>
            <br />
            <br />
            <StockListView stockList={this.state.stockList} />

        </div>);
    }

}