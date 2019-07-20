import React from 'react';
import Slider from 'react-slick';
import {Link} from 'react-router-dom';
import OneBlock from './one-block'
import TwoBlock from './two-block'

import ReactTooltip from 'react-tooltip'

export default function NavCarousel() {

    var slidesix = {
        dots: false,
        infinite: true,
        speed: 300,
        slidesToShow: 6,
        slidesToScroll: 6,
        autoplay:false,
        responsive: [
            {
                breakpoint: 1367,
                settings: {
                    slidesToShow: 10,
                    slidesToScroll: 1,
                    infinite: true
                }
            },
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 8,
                    slidesToScroll: 1,
                    infinite: true
                }
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 5,
                    slidesToScroll: 5,
                    infinite: false,
                    arrows:false
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 4,
                    arrows:false,
                    infinite: false,
                }
            }

        ]
    }

    return (
        <div>
            <Slider  {...slidesix} className="slide-1 home-slider">
                <div>
                    {/* <h4>welcome to fashion</h4> */}
                    {/* <h4>Home made creams</h4> */}
                    <OneBlock 
                        imagePath = {`${process.env.PUBLIC_URL}/assets/images/home-banner/skin_cream.png`}
                        linkPath = "moisturizing-cream">
                    </OneBlock>
                    
                </div>
                <div>
                    {/* <h4>welcome to fashion</h4> */}
                    {/* <h4>Home made creams</h4> */}
                    <OneBlock 
                        imagePath = {`${process.env.PUBLIC_URL}/assets/images/home-banner/kids.png`}
                        linkPath = "kids">
                    </OneBlock>
                </div>
                <div>
                    {/* <h4>welcome to fashion</h4> */}
                    {/* <h4>Home made creams</h4> */}
                    <OneBlock 
                        imagePath = {`${process.env.PUBLIC_URL}/assets/images/home-banner/lip-balm.png`} 
                        linkPath = "lips">
                    </OneBlock>
                </div>
                <div>
                    {/* <h4>welcome to fashion</h4> */}
                    {/* <h4>Home made creams</h4> */}
                    <OneBlock 
                        imagePath = {`${process.env.PUBLIC_URL}/assets/images/home-banner/soap.png`} 
                        linkPath = "soaping-bars">
                    </OneBlock>
                </div>
            {/* <div class = "row col-12"> */}
                <div>
                    {/* <h4>welcome to fashion</h4> */}
                    {/* <h4>Home made creams</h4> */}
                    <OneBlock 
                        imagePath = {`${process.env.PUBLIC_URL}/assets/images/home-banner/oils.png`} 
                        linkPath = "oils">
                    </OneBlock>
                </div>
                <div>
                    {/* <h4>welcome to fashion</h4> */}
                    {/* <h4>Home made creams</h4> */}
                    <OneBlock 
                        imagePath = {`${process.env.PUBLIC_URL}/assets/images/home-banner/old.png`} 
                        linkPath = "anti-ageing">
                    </OneBlock>
                </div>  
                <div>
                    {/* <h4>welcome to fashion</h4> */}
                    {/* <h4>Home made creams</h4> */}
                    <OneBlock 
                        imagePath = {`${process.env.PUBLIC_URL}/assets/images/home-banner/hair.png`} 
                        linkPath = "anti-ageing">
                    </OneBlock>
                </div>
                <div>
                    {/* <h4>welcome to fashion</h4> */}
                    {/* <h4>Home made creams</h4> */}
                    <OneBlock 
                        imagePath = {`${process.env.PUBLIC_URL}/assets/images/home-banner/hydrosol.png`} 
                        linkPath = "anti-ageing">
                    </OneBlock>
                </div>
                <div>
                    {/* <h4>welcome to fashion</h4> */}
                    {/* <h4>Home made creams</h4> */}
                    <OneBlock 
                        imagePath = {`${process.env.PUBLIC_URL}/assets/images/home-banner/sun-guard.png`} 
                        linkPath = "anti-ageing">
                    </OneBlock>
                </div>
            </Slider>
        </div>  
    )
}