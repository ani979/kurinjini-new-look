import React from 'react';
import {Link} from 'react-router-dom';
import OneBlock from './one-block'
import './carousel-css.css'

import ReactTooltip from 'react-tooltip'


export default function TwoBlock(props) {
    return (
        <div>
            <div class = "c-row">
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
            </div>      
                
              
           
        </div>
    )
}

