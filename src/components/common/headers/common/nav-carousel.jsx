import React from 'react';
import Slider from 'react-slick';
import OneBlock from './one-block'

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
                        linkPath = "moisturizing-cream"
                        quickName = "Creams">
                        
                    </OneBlock>
                    
                </div>
                <div>
                    {/* <h4>welcome to fashion</h4> */}
                    {/* <h4>Home made creams</h4> */}
                    <OneBlock 
                        imagePath = {`${process.env.PUBLIC_URL}/assets/images/home-banner/kids.png`}
                        linkPath = "kids"
                        quickName = "Kids friendly">
                    </OneBlock>
                </div>
                <div>
                    {/* <h4>welcome to fashion</h4> */}
                    {/* <h4>Home made creams</h4> */}
                    <OneBlock 
                        imagePath = {`${process.env.PUBLIC_URL}/assets/images/home-banner/lip-balm.png`} 
                        linkPath = "lips"
                        quickName = "lip care">
                    </OneBlock>
                </div>
                <div>
                    {/* <h4>welcome to fashion</h4> */}
                    {/* <h4>Home made creams</h4> */}
                    <OneBlock 
                        imagePath = {`${process.env.PUBLIC_URL}/assets/images/home-banner/soap.png`} 
                        linkPath = "soaping-bars"
                        quickName = "Soaps">
                    </OneBlock>
                </div>
            {/* <div class = "row col-12"> */}
                <div>
                    {/* <h4>welcome to fashion</h4> */}
                    {/* <h4>Home made creams</h4> */}
                    <OneBlock 
                        imagePath = {`${process.env.PUBLIC_URL}/assets/images/home-banner/oils.png`} 
                        linkPath = "oils"
                        quickName = "Oils and serums">
                    </OneBlock>
                </div>
                <div>
                    {/* <h4>welcome to fashion</h4> */}
                    {/* <h4>Home made creams</h4> */}
                    <OneBlock 
                        imagePath = {`${process.env.PUBLIC_URL}/assets/images/home-banner/old.png`} 
                        linkPath = "anti-ageing"
                        quickName = "Anti-ageing">
                    </OneBlock>
                </div>  
                <div>
                    {/* <h4>welcome to fashion</h4> */}
                    {/* <h4>Home made creams</h4> */}
                    <OneBlock 
                        imagePath = {`${process.env.PUBLIC_URL}/assets/images/home-banner/hair.png`} 
                        linkPath = "anti-ageing"
                        quickName = "Hair care">
                    </OneBlock>
                </div>
                <div>
                    {/* <h4>welcome to fashion</h4> */}
                    {/* <h4>Home made creams</h4> */}
                    <OneBlock 
                        imagePath = {`${process.env.PUBLIC_URL}/assets/images/home-banner/hydrosol.png`} 
                        linkPath = "anti-ageing"
                        quickName = "Hydrosols">

                    </OneBlock>
                </div>
                <div>
                    {/* <h4>welcome to fashion</h4> */}
                    {/* <h4>Home made creams</h4> */}
                    <OneBlock 
                        imagePath = {`${process.env.PUBLIC_URL}/assets/images/home-banner/sun-guard.png`} 
                        linkPath = "anti-ageing"
                        quickName = "Sun protection">
                    </OneBlock>
                </div>
            </Slider>
        </div>  
    )
}