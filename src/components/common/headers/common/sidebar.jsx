import React, {Component} from 'react';
import $ from 'jquery';
import 'smartmenus';

class SideBar extends Component {

    componentWillMount (){
        $(function() {
            $('#sub-menu').smartmenus({
                subMenusSubOffsetX: 1,
                subMenusSubOffsetY: -8
            });
        });
    }

    closeNav() {
        var closemyslide = document.getElementById("mySidenav");
        if(closemyslide)
            closemyslide.classList.remove('open-side');
    }

    render() {
        return (
            <div id="mySidenav" className="sidenav">
                <a href="javascript:void(0)" className="sidebar-overlay" onClick={this.closeNav}></a>
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
                                <li><a href="/oilsAndSerums">Oils and Serums</a></li>
                                <li><a href="/moisturizingCreams">Moisturizing Creams</a></li>
                                <li><a href="/kidscreams">For Kids</a></li>
                                <li><a href="/sensitiveSkin">Creams for sensitive skin</a></li>
                                <li><a href="/antiaging">Anti-ageing</a></li>
                               
                            </ul>
                        </li>
                        <li><a href="#">Kids Special</a>
                            <ul>
                                <li><a href="#">shopper bags</a></li>
                                <li><a href="#">laptop bags</a></li>
                                <li><a href="#">clutches</a></li>
                                <li><a href="#">purses</a>
                                    <ul>
                                        <li><a href="#">purses</a></li>
                                        <li><a href="#">wallets</a></li>
                                        <li><a href="#">leathers</a></li>
                                        <li><a href="#">satchels</a></li>
                                    </ul>
                                </li>
                            </ul>
                        </li>
                        <li><a href="#">Lip care</a>
                            <ul>
                                <li><a href="#">sport shoes</a></li>
                                <li><a href="#">formal shoes</a></li>
                                <li><a href="#">casual shoes</a></li>
                            </ul>
                        </li>
                        <li><a href="#">Foot care</a>
                        </li>
                        <li><a href="#">Soaping Bars</a>
                            <ul>
                                <li><a href="#">fashion jewellery</a></li>
                                <li><a href="#">caps and hats</a></li>
                                <li><a href="#">precious jewellery</a></li>
                                <li><a href="#">more..</a>
                                    <ul>
                                        <li><a href="#">necklaces</a></li>
                                        <li><a href="#">earrings</a></li>
                                        <li><a href="#">wrist wear</a></li>
                                        <li><a href="#">accessories</a>
                                            <ul>
                                                <li><a href="#">ties</a></li>
                                                <li><a href="#">cufflinks</a></li>
                                                <li><a href="#">pockets squares</a></li>
                                                <li><a href="#">helmets</a></li>
                                                <li><a href="#">scarves</a></li>
                                                <li><a href="#">more...</a>
                                                    <ul>
                                                        <li><a href="#">accessory gift sets</a></li>
                                                        <li><a href="#">travel accessories</a></li>
                                                        <li><a href="#">phone cases</a></li>
                                                    </ul>
                                                </li>
                                            </ul>
                                        </li>
                                        <li><a href="#">belts & more</a></li>
                                        <li><a href="#">wearable</a></li>
                                    </ul>
                                </li>
                            </ul>
                        </li>
                        <li><a href="#">Hydrosols and Water</a>
                        </li>

                        <li><a href="#">Hair care</a>
                            <ul>
                                <li><a href="#">makeup</a></li>
                                <li><a href="#">skincare</a></li>
                                <li><a href="#">premium beaty</a></li>
                                <li><a href="#">more</a>
                                    <ul>
                                        <li><a href="#">fragrances</a></li>
                                        <li><a href="#">luxury beauty</a></li>
                                        <li><a href="#">hair care</a></li>
                                        <li><a href="#">tools & brushes</a></li>
                                    </ul>
                                </li>
                            </ul>
                        </li>
                        <li><a href="#">Just Oils</a>
                        </li>
                        {/* <li><a href="#">kitchen</a>
                        </li> */}
                    </ul>
                </nav>
            </div>
        )
    }
}


export default SideBar;