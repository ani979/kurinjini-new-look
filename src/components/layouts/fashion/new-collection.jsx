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
                    <Link to={`${process.env.PUBLIC_URL}/product/raw-turmeric`}>
                        <div>
                            <div className="home home21 text-center">
                                <div className="container">
                                    <div className="row">
                                        <div className="col">
                                            <div className="slider-contain">
                                                <div>
                                                    {/* <h4>welcome to fashion</h4> */}
                                                    {/* <h4>Home made creams</h4> */}
                                                    <Link to={`${process.env.PUBLIC_URL}/product/raw-turmeric`} className="btn btn-solid">Raw Turmeric Soap</Link>
                                                </div>
                                                
                                            </div>
                                        </div>
                                        
                                    </div>
                                </div>
                            </div>
                            
                        </div>
                    </Link>
                    <Link to={`${process.env.PUBLIC_URL}/product/lemon-grass`}>
                        <div>
                            <div className="home home20 text-center">
                                <div className="container">
                                    <div className="row">
                                        <div className="col">
                                            <div className="slider-contain">
                                                <div>
                                                    {/* <h4>welcome to fashion</h4> */}
                                                    {/* <h4>Home made creams</h4> */}
                                                    <Link to={`${process.env.PUBLIC_URL}/product/lemon-grass`} className="btn btn-solid">Lemon Grass Soap</Link>
                                                </div>
                                                
                                            </div>
                                        </div>
                                        
                                    </div>
                                </div>
                            </div>
                            
                        </div>
                    </Link>
                    <Link to={`${process.env.PUBLIC_URL}/product/coffee-vanilla`}>
                        <div>
                            <div className="home home19 text-center">
                                <div className="container">
                                    <div className="row">
                                        <div className="col">
                                            <div className="slider-contain">
                                                <div>
                                                    {/* <h4>welcome to fashion</h4> */}
                                                    {/* <h4>Home made creams</h4> */}
                                                    <Link to={`${process.env.PUBLIC_URL}/product/coffee-vanilla`} className="btn btn-solid">Coffee Vanilla Soap</Link>
                                                </div>
                                                
                                            </div>
                                        </div>
                                        
                                    </div>
                                </div>
                            </div>
                            
                        </div>
                    </Link>
                    <Link to={`${process.env.PUBLIC_URL}/product/body-scrub`}>
                        <div>
                            <div className="home home18 text-center">
                                <div className="container">
                                    <div className="row">
                                        <div className="col">
                                            <div className="slider-contain">
                                                <div>
                                                    {/* <h4>welcome to fashion</h4> */}
                                                    {/* <h4>Home made creams</h4> */}
                                                    <Link to={`${process.env.PUBLIC_URL}/product/body-scrub`} className="btn btn-solid">Coffee Body Scrub</Link>
                                                </div>
                                                
                                            </div>
                                        </div>
                                        
                                    </div>
                                </div>
                            </div>
                            
                        </div>
                    </Link>
                    <Link to={`${process.env.PUBLIC_URL}/product/rose-milk`}>
                        <div>
                            <div className="home home17 text-center">
                                <div className="container">
                                    <div className="row">
                                        <div className="col">
                                            <div className="slider-contain">
                                                <div>
                                                    {/* <h4>welcome to fashion</h4> */}
                                                    {/* <h4>Home made creams</h4> */}
                                                    <Link to={`${process.env.PUBLIC_URL}/product/rose-milk`} className="btn btn-solid">Pure Oil Vegan Soap</Link>
                                                </div>
                                                
                                            </div>
                                        </div>
                                        
                                    </div>
                                </div>
                            </div>
                            
                        </div>
                    </Link>
                    <Link to={`${process.env.PUBLIC_URL}/product/natural-mosquito-repellant`}>
                            <div>
                                <div className="home home16 text-center">
                                    <div className="container">
                                        <div className="row">
                                            <div className="col">
                                                <div className="slider-contain">
                                                    <div>
                                                        {/* <h4>welcome to fashion</h4> */}
                                                        {/* <h4>Home made creams</h4> */}
                                                        <Link to={`${process.env.PUBLIC_URL}/product/natural-mosquito-repellant`} className="btn btn-solid">Anti-Buzz</Link>
                                                    </div>
                                                    
                                                </div>
                                            </div>
                                            
                                        </div>
                                    </div>
                                </div>
                                
                            </div>
                        </Link>
                        <Link to={`${process.env.PUBLIC_URL}/product/moisturizing-creams`}>
                            <div>
                                <div className="home home15 text-center">
                                    <div className="container">
                                        <div className="row">
                                            <div className="col">
                                                <div className="slider-contain">
                                                    <div>
                                                        {/* <h4>welcome to fashion</h4> */}
                                                        {/* <h4>Home made creams</h4> */}
                                                        <Link to={`${process.env.PUBLIC_URL}/product/moisturizing-creams`} className="btn btn-solid">Vegan moisturizer</Link>
                                                    </div>
                                                    
                                                </div>
                                            </div>
                                            <div className="col">
                                                <div className="slider-contain">
                                                    <div>
                                                        {/* <h4>welcome to fashion</h4> */}
                                                        {/* <h4>Home made creams</h4> */}
                                                        <Link to={`${process.env.PUBLIC_URL}/product/body-butter`} className="btn btn-solid">Vegan body butter</Link>
                                                    </div>
                                                    
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                
                            </div>
                        </Link>
                        <Link to={`${process.env.PUBLIC_URL}/product/roots-onionSeedOil`}>
                            <div>
                                <div className="home home14 text-center">
                                    <div className="container">
                                        <div className="row">
                                            <div className="col">
                                                <div className="slider-contain">
                                                    <div>
                                                        {/* <h4>welcome to fashion</h4> */}
                                                        {/* <h4>Home made creams</h4> */}
                                                        <Link to={`${process.env.PUBLIC_URL}/product/roots-onionSeedOil`} className="btn btn-solid">Onion Seed Oil Hair Mask</Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                
                            </div>
                        </Link>
                        <Link to={`${process.env.PUBLIC_URL}/product/ubtan`}>
                            <div>
                                <div className="home home13 text-center">
                                    <div className="container">
                                        <div className="row">
                                            <div className="col">
                                                <div className="slider-contain">
                                                    <div>
                                                        {/* <h4>welcome to fashion</h4> */}
                                                        {/* <h4>Home made creams</h4> */}
                                                        <Link to={`${process.env.PUBLIC_URL}/product/ubtan`} className="btn btn-solid">Ubtan</Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                
                            </div>
                        </Link>
                        <Link to={`${process.env.PUBLIC_URL}/product/closetbar`}>
                            <div>
                                <div className="home home12 text-center">
                                    <div className="container">
                                        <div className="row">
                                            <div className="col">
                                                <div className="slider-contain">
                                                    <div>
                                                        {/* <h4>welcome to fashion</h4> */}
                                                        {/* <h4>Home made creams</h4> */}
                                                        <Link to={`${process.env.PUBLIC_URL}/product/closetbar`} className="btn btn-solid">Fragrance bar</Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                
                            </div>
                        </Link>
                        <Link to={`${process.env.PUBLIC_URL}/product/facemask`}>
                        <div>
                            <div className="home home11 text-center">
                                <div className="container">
                                    <div className="row">
                                        <div className="col">
                                            <div className="slider-contain">
                                                <div>
                                                    {/* <h4>welcome to fashion</h4> */}
                                                    {/* <h4>Home made creams</h4> */}
                                                    <Link to={`${process.env.PUBLIC_URL}/product/facemask`} className="btn btn-solid">Lotus face mask</Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            
                        </div>
                        </Link>
                        <Link to={`${process.env.PUBLIC_URL}/product/forest-lavender`} >
                        <div>
                            <div className="home home10 text-center">
                                <div className="container">
                                    <div className="row">
                                        <div className="col">
                                            <div className="slider-contain">
                                                <div>
                                                    {/* <h4>welcome to fashion</h4> */}
                                                    {/* <h4>Home made creams</h4> */}
                                                    <Link to={`${process.env.PUBLIC_URL}/product/forest-lavender`} className="btn btn-solid">Fresh wild lavender</Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        </Link>
                        <Link to={`${process.env.PUBLIC_URL}/product/lip-scrubs`}>
                        <div>
                            <div className="home home9 text-center">
                                <div className="container">
                                    <div className="row">
                                        <div className="col">
                                            <div className="slider-contain">
                                                <div>
                                                    {/* <h4>welcome to fashion</h4> */}
                                                    {/* <h4>Home made creams</h4> */}
                                                    <Link to={`${process.env.PUBLIC_URL}/product/lip-scrubs`} className="btn btn-solid">Hemp Lip Scrub</Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        </Link>
                        <Link to={`${process.env.PUBLIC_URL}/product/face-care/face-srcub-cleanser/velvet`}>
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
                        </Link>
                        
                        
                    </Slider>
                </section>
            </div>
        )
    }
}


export default NewCollection;