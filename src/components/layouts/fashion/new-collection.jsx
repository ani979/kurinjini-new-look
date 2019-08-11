import React, { Component } from 'react';
import Slider from 'react-slick';

import {Link} from 'react-router-dom';

class NewCollection extends Component {

    render () {
        var mainSlider = {
            dots: true,
            infinite: true,
            speed: 1000,
            slidesToShow: 2,
            slidesToScroll: 1,
            autoplay:false,
            autoplaySpeed:2000
        }
        
        var slidesix = {
            dots: true,
            infinite: false,
            speed: 900,
            autoplay:false,
            slidesToShow: 2,
            slidesToScroll: 2,
            responsive: [
               
                {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                }

            ]
        }
        var settings = {
            infinite: true,
            speed: 300,
            slidesToShow: 4,
            slidesToScroll: 4,
            autoplay: true,
            autoplaySpeed: 3000,
            responsive: [
                {
                    breakpoint: 1200,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 3
                    }
                },
                {
                    breakpoint: 991,
                    settings: {
                        slidesToShow:2,
                        slidesToScroll: 2
                    }
                },
                {
                    breakpoint: 420,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 2
                    }
                }
            ]
        };

        // const {items, symbol, addToCart, addToWishlist, addToCompare} = this.props;
        return (
            <div>
                {/*Paragraph*/}
                <div className="title1  section-t-space">
                    <h4>Newly Launched</h4>
                    <h2 className="title-inner1">Most recent products</h2>
                </div>
                {/*Paragraph End*/}
                <section className="p-0">
                    <Slider  {...slidesix} className="slide-1 home-slider">
                        <div>
                            <div className="home home8 text-center">
                                <div className="container">
                                    <div className="row">
                                        <div className="col">
                                            <div className="slider-contain">
                                                <div>
                                                    {/* <h4>welcome to fashion</h4> */}
                                                    {/* <h4>Home made creams</h4> */}
                                                    <Link to={`${process.env.PUBLIC_URL}/product/face-care/face-srcub-cleanser/velvet`} className="btn btn-solid">Velvet face scrub</Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className="home home1 text-center">
                                <div className="container">
                                    <div className="row">
                                        <div className="col">
                                            <div className="slider-contain">
                                                <div>
                                                    {/* <h4>welcome to fashion</h4> */}
                                                    {/* <h4>Home made creams</h4> */}
                                                    <Link to={`${process.env.PUBLIC_URL}/product/body-butter`} className="btn btn-solid">Natural soother</Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className="home home2 text-center">
                                <div className="container">
                                    <div className="row">
                                        <div className="col">
                                            <div className="slider-contain">
                                                <div>
                                                    {/* <h4>Oils for you</h4> */}
                                                    {/* <h1>women fashion</h1> */}
                                                    <Link to={`${process.env.PUBLIC_URL}/product/mild-scrubbers`} className="btn btn-solid">Gentle scrubber</Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className="home home7 text-center">
                                <div className="container">
                                    <div className="row">
                                        <div className="col">
                                            <div className="slider-contain">
                                                <div>
                                                    {/* <h4>Oils for you</h4> */}
                                                    {/* <h1>women fashion</h1> */}
                                                    <Link to={`${process.env.PUBLIC_URL}/product/natural-spf`} className="btn btn-solid">Natural SPF</Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className="home home4 text-center">
                                <div className="container">
                                    <div className="row">
                                        <div className="col">
                                            <div className="slider-contain">
                                                <div>
                                                    {/* <h4>Oils for you</h4> */}
                                                    {/* <h1>women fashion</h1> */}
                                                    <Link to={`${process.env.PUBLIC_URL}/product/ubtan-soap`} className="btn btn-solid">Simple yet powerful</Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className="home home5 text-center">
                                <div className="container">
                                    <div className="row">
                                        <div className="col">
                                            <div className="slider-contain">
                                                <div>
                                                    {/* <h4>Oils for you</h4> */}
                                                    {/* <h1>women fashion</h1> */}
                                                    <Link to={`${process.env.PUBLIC_URL}/product/hemp-lip-care`} className="btn btn-solid">Long lasting Lip Balm</Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className="home home6 text-center">
                                <div className="container">
                                    <div className="row">
                                        <div className="col">
                                            <div className="slider-contain">
                                                <div>
                                                    {/* <h4>Oils for you</h4> */}
                                                    {/* <h1>women fashion</h1> */}
                                                    <Link to={`${process.env.PUBLIC_URL}/product/renaissance`} className="btn btn-solid">Extra Glowing Skin</Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className="home home3 text-center">
                                <div className="container">
                                    <div className="row">
                                        <div className="col">
                                            <div className="slider-contain">
                                                <div>
                                                    {/* <h4>Oils for you</h4> */}
                                                    {/* <h1>women fashion</h1> */}
                                                    <Link to={`${process.env.PUBLIC_URL}/product/vegan-lip-scrubs`} className="btn btn-solid">Vegan lip scrub</Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Slider>
                </section>
            </div>
        )
    }
}


export default NewCollection;