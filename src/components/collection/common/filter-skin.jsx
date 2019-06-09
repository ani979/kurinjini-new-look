import React, {Component} from 'react';
import { connect } from 'react-redux'
import InputRange from 'react-input-range';
import 'react-input-range/lib/css/index.css';
import { SlideToggle } from 'react-slide-toggle';


import {getGoodForSkin, getSolutionForSkin, getMinMaxPrice} from '../../../services';
import {filterGoodFor, filterSolutionFor, filterPrice} from '../../../actions'

class FilterSkin extends Component {

    constructor(props) {
        super(props);

        this.state = {
            openFilter: false
        }
    }

    closeFilter = () => {
        document.querySelector(".collection-filter").style = "left: -365px";
    }

    componentWillMount() {
        console.log("calling mount");
        this.props.filters.category = [];
        this.props.filters.subCategory = [];
        this.props.filters.goodFor = [];
        this.props.filters.tags = [];
    }

    // componentWillUnmount() {
    //     this.props.filterGoodFor([]);
    //     this.props.filterSolutionFor([]);
    // }
    

    clickSolutionHandle(event, solutions) {

        var index = solutions.indexOf(event.target.value);
        if (event.target.checked)
            solutions.push(event.target.value); // push in array checked value
        else
            solutions.splice(index, 1); // removed in array unchecked value

        this.props.filterSolutionFor(solutions);
    }

    clickGoodForHandle(event, goodFor){
        var index = goodFor.indexOf(event.target.value);
        if (event.target.checked)
        goodFor.push(event.target.value); // push in array checked value
        else
        goodFor.splice(index, 1); // removed in array unchecked value
        console.log("goodFor ", goodFor);
        this.props.filterGoodFor(goodFor);
    }

    render (){
        //console.log("this.filters ", this.props.filters);
        const filteredSolutions = this.props.filters.tags;
        const filteredGoodness = this.props.filters.goodFor;

        //console.log("filteredGoodness ", filteredGoodness);
        return (
                <div className="collection-filter-block">
                    {/*brand filter start*/}
                    <div className="collection-mobile-back">
                        <span className="filter-back" onClick={(e) => this.closeFilter(e)} >
                            <i className="fa fa-angle-left" aria-hidden="true"></i> back
                        </span>
                    </div>
                    <SlideToggle>
                        {({onToggle, setCollapsibleElement}) => (
                            <div className="collection-collapse-block">
                                <h3 className="collapse-block-title" onClick={onToggle}>What bothers you the most</h3>
                                <div className="collection-collapse-block-content"  ref={setCollapsibleElement}>
                                    <div className="collection-brand-filter">
                                        {this.props.solutionFor.map((solutionFor, index) => {
                                            return (
                                                <div className="custom-control custom-checkbox collection-filter-checkbox" key={index}>
                                                    <input type="checkbox" onClick={(e) => this.clickSolutionHandle(e,filteredSolutions)} value={solutionFor} defaultChecked={filteredSolutions.includes(solutionFor)? true : false}  className="custom-control-input" id={solutionFor} />
                                                    <label className="custom-control-label"
                                                           htmlFor={solutionFor}>{solutionFor}</label>
                                                </div> )
                                        })}
                                    </div>
                                </div>
                            </div>
                        )}
                    </SlideToggle>
                    <SlideToggle>
                        {({onToggle, setCollapsibleElement}) => (
                            <div className="collection-collapse-block">
                                <h3 className="collapse-block-title" onClick={onToggle}>What is your skin type?</h3>
                                <div className="collection-collapse-block-content"  ref={setCollapsibleElement}>
                                    <div className="collection-brand-filter">
                                        {this.props.goodFor.map((goodFor, index) => {
                                            return (
                                                <div className="custom-control custom-checkbox collection-filter-checkbox" key={index}>
                                                    <input type="checkbox" onClick={(e) => this.clickGoodForHandle(e,filteredGoodness)} value={goodFor} defaultChecked={filteredGoodness.includes(goodFor)? true : false}  className="custom-control-input" id={goodFor} />
                                                    <label className="custom-control-label"
                                                           htmlFor={goodFor}>{goodFor}</label>
                                                </div> )
                                        })}
                                    </div>
                                </div>
                            </div>
                        )}
                    </SlideToggle>

                    {/*color filter start here*/}
                    {/* <SlideToggle>
                        {({onToggle, setCollapsibleElement}) => (
                            <div className="collection-collapse-block">
                                <h3 className="collapse-block-title" onClick={onToggle}>What is your skin type</h3>
                                <div className="collection-collapse-block-content" ref={setCollapsibleElement}>
                                    <div className="color-selector">
                                        <ul>
                                            {this.props.colors.map((color, index) => {
                                                return (
                                                    <li className={color} title={color} onClick={(e) => this.colorHandle(e, color)} key={index}></li> )
                                            })}
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        )}
                    </SlideToggle> */}
                    {/*price filter start here */}
                    <SlideToggle>
                        {({onToggle, setCollapsibleElement}) => (
                            <div className="collection-collapse-block open">
                                <h3 className="collapse-block-title" onClick={onToggle}>price</h3>
                                <div className="collection-collapse-block-content block-price-content" ref={setCollapsibleElement}>
                                    <div className="collection-brand-filter">
                                        <div className="custom-control custom-checkbox collection-filter-checkbox">
                                            <InputRange
                                                maxValue={this.props.prices.max}
                                                minValue={this.props.prices.min}
                                                value={this.props.filters.value}
                                                onChange={value => this.props.filterPrice({ value })} />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}
                    </SlideToggle>
                </div>
        )
    }
}


const mapStateToProps = state => ({
    goodFor: getGoodForSkin(state.data.products),
    solutionFor: getSolutionForSkin(state.data.products),
    prices: getMinMaxPrice(state.data.products),
    filters: state.filters
})

export default connect(
    mapStateToProps,
    { filterGoodFor, filterSolutionFor, filterPrice }
)(FilterSkin);