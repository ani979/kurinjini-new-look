import React, {Component} from 'react';
import Slider from 'react-slick';
import '../common/index.scss';
import {connect} from "react-redux";

// import custom Components
import Service from "./common/service";
import NewProduct from "../common/new-product";
import Breadcrumb from "../common/breadcrumb";
import DetailsWithPrice from "./common/product/details-price";
import DetailsTopTabs from "./common/details-top-tabs";
import { addToCart, addToCartUnsafe} from '../../actions'
import ImageZoom from './common/product/image-zoom'
import SmallImages from './common/product/small-image'
import {Helmet} from "react-helmet";



class LeftSideBar extends Component {

    constructor() {
        super();
        this.state = {
            open:false,
            nav1: null,
            nav2: null
        };
    }

    // document.getElementById('idOfElement').classList.add('newClassName');


    componentDidMount() {
        this.setState({
            nav1: this.slider1,
            nav2: this.slider2
        });
    }
    
    filterClick() {
        document.getElementById("filter").style.left = "-15px";
    }
    backClick() {
        document.getElementById("filter").style.left = "-365px";
    }

    render(){
        const {symbol, item, addToCart, addToCartUnsafe, addToWishlist} = this.props
        var products = {
            slidesToShow: 1,
            slidesToScroll: 1,
            dots: true,
            fade: true,
            arrows:false,
            infinite: false,
        };
        var productsnav = {
            slidesToShow: 3,
            swipeToSlide:true,
            arrows: false,
            dots: false,
            focusOnSelect: true,
            infinite: false,
        };

        let sliderToDisplay = item.variants.length > 0? 
                                <Slider {...products} asNavFor={this.state.nav2} ref={slider => (this.slider1 = slider)}>
                                    {item.variants.map((vari, index) =>
                                    <div key={index} className="container">
                                        <ImageZoom image={vari.images} />
                                        <div className="image-text" style={vari.color? {"color":vari.color} :{}}>{vari.flavour}</div>
                                    </div>
                                    )}
                                </Slider>:
                                (item.variants.length === 0 ?
                                    <Slider {...products} asNavFor={this.state.nav2} ref={slider => (this.slider1 = slider)}>
                                        {item.pictures.map((vari, index) =>
                                        <div key={index} className="container">
                                            <ImageZoom image={vari} />
                                        </div>
                                        )}
                                    </Slider>:''
                                )

            return (
            <div>

                <Breadcrumb  title={'Product / '+item.name} />

                {/*Section Start*/}
                {(item)?
                <section className="section-b-space">
                    <Helmet>
                        <meta charSet="utf-8" />
                        <title>{item.name}</title>
                        <meta property="og:title" content={item.name} />
                        <meta property="og:description" content={item.shortDetails} />
                        <meta property="og:url" href={`${process.env.PUBLIC_URL}/product/${item.id}`} />
                        <link rel="canonical" href={`${process.env.PUBLIC_URL}/product/${item.id}`}/>
                    </Helmet>
                    <div className="collection-wrapper">
                        <div className="container">
                            <div className="row">

                                <div className="col-sm-3 collection-filter" id="filter">
                                    <div  className="collection-mobile-back pl-5">
                                        <span onClick={this.backClick}  className="filter-back">
                                            <i className="fa fa-angle-left" aria-hidden="true"></i> back
                                        </span>
                                    </div>

                                    {/* <BrandBlock/> */}
                                    <Service/>
                                    {/*side-bar single product slider start*/}
                                    <NewProduct/>
                                    {/*side-bar single product slider end*/}
                                </div>
                                <div className="col-lg-9 col-sm-12 col-xs-12">
                                    <div className="">
                                        <div className="row">
                                            <div className="col-xl-12">
                                                {/* <div className="filter-main-btn mb-2">
                                                    <span onClick={this.filterClick}  className="filter-btn" >
                                                        <i className="fa fa-filter" aria-hidden="true"></i> filter</span>
                                                </div> */}
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-lg-6 product-thumbnail">
                                                {sliderToDisplay}
                                                <SmallImages item={item} settings={productsnav} navOne={this.state.nav1} />
                                            </div>
                                            <DetailsWithPrice symbol={symbol} item={item} navOne={this.state.nav1} addToCartClicked={addToCart} BuynowClicked={addToCartUnsafe}  />
                                        </div>
                                    </div>
                                    <DetailsTopTabs item={item} />
                                </div>
                            </div>
                        </div>
                    </div>
                </section> : ''}
                {/*Section End*/}
            </div>
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    let productId = ownProps.match.params.id;
    return {
        item: state.data.products.find(el => el.id == productId),
        symbol: state.data.symbol
    }
}

export default connect(mapStateToProps, {addToCart, addToCartUnsafe}) (LeftSideBar);