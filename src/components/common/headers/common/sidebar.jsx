import React, {Component} from 'react';
import $ from 'jquery';
import 'smartmenus';
import {Swipeable } from 'react-swipeable'


class SideBar extends Component {
    
    constructor(props) {
        super(props);
        this.swipeLeft = this.swipeLeft.bind(this);
      }
    
    componentWillMount (){
        $(function() {
            $('#sub-menu').smartmenus({
                subMenusSubOffsetX: 1,
                subMenusSubOffsetY: -8
            });
        });
        
    }

    closeNav() {
        //console.log("here in close nav")
        var closemyslide = document.getElementById("mySidenav");
        if(closemyslide)
            closemyslide.classList.remove('open-side');   
    }

    swipeLeft() {
        //console.log("here in swipe left");
        this.closeNav();
    }
    render() {
        return (
            <Swipeable onSwiped ={this.swipeLeft} >
                <div id="mySidenav" className="sidenav" >
                    <a href="javascript:void(0)" className="sidebar-overlay" onClick={this.closeNav}></a>
                    
                    {/* {handlers} */}
                    <nav>
                        <div onClick={this.closeNav}>
                            <div className="sidebar-back text-left">
                                <i className="fa fa-angle-left pr-2" aria-hidden="true"></i> Back
                            </div>
                        </div>
                        {/*Vertical Menu*/}
                        <ul id="sub-menu" className="sm pixelstrap sm-vertical ">
                            <li><a href="#">Face Care</a>
                                <ul>
                                    <li><a href="/oils-serums">Oils and Serums</a></li>
                                    <li><a href="/moisturizing-creams">Moisturizing Creams</a></li>
                                    <li><a href="/sensitive-skin">Sensitive skin</a></li>
                                    <li><a href="/anti-ageing">Anti-ageing</a></li>
                                
                                </ul>
                            </li>
                            <li><a href="#">Kids Special</a>
                                <ul>
                                    <li><a href="/kids">Moisturizing Creams</a></li>
                                    <li><a href="/kids-lips">Lip Care</a></li>
                                    <li><a href="/kids-hair">hair care</a></li>
                                </ul>
                            </li>
                            <li><a href="#">Lip care</a>
                                <ul>
                                    <li><a href="/lip-balms">Lip Balms</a></li>
                                    <li><a href="/lip-scrubs">Lip Scrubs</a></li>
                                </ul>
                            </li>
                            <li><a href="#">Foot care</a>
                                <ul>
                                    <li><a href="/foot-scrubbers">Foot scrubbers</a></li>
                                    <li><a href="/foot-healers">Foot healers</a></li>
                                </ul>
                            </li>
                            <li><a href="#">Soaping Bars</a>
                                <ul>
                                    <li><a href="/body-scrubbers">Body Scrubbers</a></li>
                                    <li><a href="/nourishing-bars">Nourishing Bars</a></li>
                                </ul>
                            </li>
                            <li><a href="/hydrosols">Hydrosols and Water</a>
                            </li>

                            <li><a href="#">Hair care</a>
                                <ul>
                                    <li><a href="/hair-oils">Hair Oils</a></li>
                                    <li><a href="/hair-masks">Hair Masks</a></li>
                                </ul>
                            </li>
                            {/* <li><a href="#">Just Oils</a>
                            </li> */}
                            {/* <li><a href="#">kitchen</a>
                            </li> */}
                        </ul>
                    </nav>
                </div>

                
            </Swipeable>   
        )
    }
}


export default SideBar;