import React, {Component} from 'react';
import Breadcrumb from "../common/breadcrumb";
import NewProduct from "../common/new-product";
import { connect } from 'react-redux'
import FilterBar from "./common/filter-bar";
import ProductListing from "./common/product-listing";
import StickyBox from "react-sticky-box";
import {filterCategory, filterSubCategory, filterType} from '../../actions'

class CollectionAll extends Component {
    openFilter = () => {
        document.querySelector(".collection-filter").style = "left: -15px";
    }

    componentWillUnmount() {
        //console.log("Unmounting!!");
        this.props.filterCategory([]);
        this.props.filterSubCategory([]);
    }

    componentWillMount() {
        this.props.filters.category = this.props.mainSelection ?  this.props.mainSelection : [];
        this.props.filters.goodFor = [];
        this.props.filters.tags = [];
        this.props.filters.subCategory = this.props.subSelection ?  [this.props.subSelection] : [];
        this.props.filters.type = this.props.typeSelection;
    }
    
    render () {
        
        return (
            <div>

                <Breadcrumb title={this.props.subSelection}/>

                <section className="section-b-space">
                    <div className="collection-wrapper">
                        <div className="container">
                            <div className="row">
                                <div className="col-sm-3 collection-filter">

                                    <StickyBox offsetTop={20} offsetBottom={20}>
                                        <div>
                                            {/* <FilterProductCategory/> */}
                                            <NewProduct/>
                                            {/* <div className="collection-sidebar-banner">
                                                <a href="#">
                                                    <img src={`${process.env.PUBLIC_URL}/assets/images/side-banner.png`} className="img-fluid" alt="" />
                                                </a>
                                            </div> */}
                                        </div>
                                    </StickyBox>
                                    {/*side-bar banner end here*/}
                                </div>
                                <div className="collection-content col">
                                    <div className="page-main-content ">
                                        <div className="">
                                            <div className="row">
                                                <div className="col-sm-12">
                                                    {/* <div className="top-banner-wrapper">
                                                        <a href="#"><img src={`${process.env.PUBLIC_URL}/assets/images/mega-menu/2.jpg`} className="img-fluid" alt=""/></a>
                                                        <div className="top-banner-content small-section">
                                                            <h4>fashion</h4>
                                                            <h5>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</h5>
                                                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. </p>
                                                        </div>
                                                    </div> */}
                                                    <div className="collection-product-wrapper">
                                                        <div className="product-top-filter">
                                                            <div className="container-fluid p-0">
                                                                {/* <div className="row">
                                                                    <div className="col-xl-12">
                                                                        <div className="filter-main-btn">
                                                                            <span onClick={this.openFilter}
                                                                                className="filter-btn btn btn-theme"><i
                                                                                className="fa fa-filter"
                                                                                aria-hidden="true"></i> New products</span>
                                                                        </div>
                                                                    </div>
                                                                </div> */}
                                                                <div className="row">
                                                                    <div className="col-12">
                                                                        <FilterBar title={this.props.subSelection}/>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>

                                                        {/*Products Listing Component*/}
                                                        <ProductListing/>

                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

            </div>
        )
    }
}

const mapStateToProps = state => ({
    filters: state.filters
})

export default connect(
    mapStateToProps,
    { filterCategory, filterSubCategory, filterType}
)(CollectionAll);