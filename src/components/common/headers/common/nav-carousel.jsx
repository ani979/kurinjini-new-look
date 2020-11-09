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
                        linkPath = "moisturizing-creams"
                        quickName = "Creams">
                        
                    </OneBlock>
                    
                </div>
                <div>
                    {/* <h4>welcome to fashion</h4> */}
                    {/* <h4>Home made creams</h4> */}
                    <OneBlock 
                        imagePath = {`${process.env.PUBLIC_URL}/assets/images/home-banner/vegan.png`}
                        linkPath = "vegan"
                        quickName = "All things vegan">
                    </OneBlock>
                </div>
                <div>
                    {/* <h4>welcome to fashion</h4> */}
                    {/* <h4>Home made creams</h4> */}
                    <OneBlock 
                        imagePath = {`${process.env.PUBLIC_URL}/assets/images/home-banner/kids_1.png`}
                        linkPath = "kids-friendly"
                        quickName = "Kids friendly">
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
                        linkPath = "all-oils-serums"
                        quickName = "Oils and serums">
                    </OneBlock>
                </div>
                <div>
                    {/* <h4>welcome to fashion</h4> */}
                    {/* <h4>Home made creams</h4> */}
                    <OneBlock 
                        imagePath = {`${process.env.PUBLIC_URL}/assets/images/home-banner/lip-balm.png`} 
                        linkPath = "lips"
                        quickName = "Lip care">
                    </OneBlock>
                </div>
                <div>
                    {/* <h4>welcome to fashion</h4> */}
                    {/* <h4>Home made creams</h4> */}
                    <OneBlock 
                        imagePath = {`${process.env.PUBLIC_URL}/assets/images/home-banner/scrub.png`} 
                        linkPath = "scrub"
                        quickName = "Scrubbers">
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
                        linkPath = "hair"
                        quickName = "Hair care">
                    </OneBlock>
                </div>
                <div>
                    {/* <h4>welcome to fashion</h4> */}
                    {/* <h4>Home made creams</h4> */}
                    <OneBlock 
                        imagePath = {`${process.env.PUBLIC_URL}/assets/images/home-banner/hydrosol.png`} 
                        linkPath = "hydrosols"
                        quickName = "Hydrosols">

                    </OneBlock>
                </div>
                <div>
                    {/* <h4>welcome to fashion</h4> */}
                    {/* <h4>Home made creams</h4> */}
                    <OneBlock 
                        imagePath = {`${process.env.PUBLIC_URL}/assets/images/home-banner/sun-guard.png`} 
                        linkPath = "spf-creams"
                        quickName = "Sun protection">
                    </OneBlock>
                </div>
                
            </Slider>
        </div>  
    )
}