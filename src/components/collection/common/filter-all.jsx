import React, {Component} from 'react';
import { connect } from 'react-redux'
import InputRange from 'react-input-range';
import 'react-input-range/lib/css/index.css';
import { SlideToggle } from 'react-slide-toggle';


import {getCategory, getSubCategory, getMinMaxPrice} from '../../../services';
import {filterCategory, filterSubCategory, filterPrice} from '../../../actions'

class FilterProductCategory extends Component {

    constructor(props) {
        super(props);

        this.state = {
            openFilter: false
        }
    }

    closeFilter = () => {
        document.querySelector(".collection-filter").style = "left: -365px";
    }

    componentWillUnmount() {
        this.props.filterCategory([]);
        this.props.filterSubCategory([]);
    }
    

    clickCategoryHandle(event, categories) {

        var index = categories.indexOf(event.target.value);
        if (event.target.checked)
            categories.push(event.target.value); // push in array checked value
        else
            categories.splice(index, 1); // removed in array unchecked value

        this.props.filterCategory(categories);
    }

    clicksubCategoryHandle(event, subCategories){
        var index = subCategories.indexOf(event.target.value);
        if (event.target.checked)
            subCategories.push(event.target.value); // push in array checked value
        else
            subCategories.splice(index, 1); // removed in array unchecked value
        console.log("subCategories ", subCategories);
        this.props.filterSubCategory(subCategories);
    }

    render (){
        console.log("this.filters ", this.props.filters);
        const filteredCategory = this.props.filters.category;
        const filteredSubCategory = this.props.filters.subCategory;

        console.log("filteredSubCategory ", filteredSubCategory);
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
                                <h3 className="collapse-block-title" onClick={onToggle}>Products</h3>
                                <div className="collection-collapse-block-content"  ref={setCollapsibleElement}>
                                    <div className="collection-brand-filter">
                                        {this.props.category.map((category, index) => {
                                            return (
                                                <div className="custom-control custom-checkbox collection-filter-checkbox" key={index}>
                                                    <input type="checkbox" onClick={(e) => this.clickCategoryHandle(e,filteredCategory)} value={category} defaultChecked={filteredCategory.includes(category)? true : false}  className="custom-control-input" id={category} />
                                                    <label className="custom-control-label"
                                                           htmlFor={category}>{category}</label>
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
                                <h3 className="collapse-block-title" onClick={onToggle}>Sub Category</h3>
                                <div className="collection-collapse-block-content"  ref={setCollapsibleElement}>
                                    <div className="collection-brand-filter">
                                        {this.props.subCategory.map((subCategory, index) => {
                                            return (
                                                <div className="custom-control custom-checkbox collection-filter-checkbox" key={index}>
                                                    <input type="checkbox" onClick={(e) => this.clicksubCategoryHandle(e,filteredSubCategory)} value={subCategory} defaultChecked={filteredSubCategory.includes(subCategory)? true : false}  className="custom-control-input" id={subCategory} />
                                                    <label className="custom-control-label"
                                                           htmlFor={subCategory}>{subCategory}</label>
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
    category: getCategory(state.data.products),
    subCategory: getSubCategory(state.data.products),
    prices: getMinMaxPrice(state.data.products),
    filters: state.filters
})

export default connect(
    mapStateToProps,
    { filterCategory, filterSubCategory, filterPrice }
)(FilterProductCategory);