import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import { withTranslate } from 'react-redux-multilingual'
import SideBar from "../common/sidebar";
import './carousel-css.css'
import CartContainer from '../../../../containers/CartContainer';

class TopBar extends Component {
    

    openNav() {
        var openmyslide = document.getElementById("mySidenav");
        if(openmyslide){
            openmyslide.classList.add('open-side')
		}
    }
    render() {
         
        const {translate} = this.props;
        let logoDisplay = <span>
                                <img src={`${process.env.PUBLIC_URL}/assets/images/icon/Kurinjini_smallsize.png`} className="img-fluid small-image-logo" alt=""/>
                         </span>;
        if (document.documentElement.clientWidth < 750) { 
            logoDisplay = <Link to={`${process.env.PUBLIC_URL}/`}> 
                            <div>
                                <h2 style={{color:"#31315f"}}> Kurinjini Skin care</h2>
                                <h5 style={{color:"#31315f"}}>
                                    {translate('call_us')}:  748- 389 - 7810
                                </h5>
                            </div>
                           </Link> 
        }   
        
        return (
            <div className="top-header sticky"  id="sticky" >
                <div className="container">
                        <div className = "top-bar-row">
                            
                            <div className="brand-logo top-bar-sidebar">
                                <div>
                                    <a href="javascript:void(0)" onClick={this.openNav}>
                                        <div className="sidebar-back text-left bar-style"> <i className="fa fa-bars sidebar-bar pr-2" style={{color:"#31315f"}}aria-hidden="true"></i></div>
                                    </a>
                                    {/*SideBar Navigation Component*/}
                                    <SideBar/>
                                </div>
                                
                            </div>
                            <div className="top-bar-brand-logo">
                                <Link to={`${process.env.PUBLIC_URL}/`}>
                                    {logoDisplay}
                                    {/* <img src={`${process.env.PUBLIC_URL}/assets/images/icon/Kurinjini_smallsize.png`} className="img-fluid small-image-logo" alt=""/> */}
                                </Link>
                            </div>   
                            <div>
                                <Link to={`${process.env.PUBLIC_URL}/`}>
                                    <div className="header-contact">
                                        <h2 style={{color:"#31315f"}}> Kurinjini SC</h2>
                                        <h5 style={{color:"#31315f"}}>
                                            {translate('call_us')}:  748- 389 - 7810
                                        </h5>
                                    </div>
                                </Link>    
                            </div> 
                            <div>
                                <CartContainer/>
                           </div>     
                        </div>
                        
                           
                        <div className="container">
						<div className="row">
							<div className="col-sm-12">
								<div className="main-menu">
									<div className="menu-left">
										
										
									</div>
										
									
								</div>
							</div>
						</div>
                        {/* <div className="col-lg-6 text-right">
                            <ul className="header-dropdown">
                                <li className="mobile-wishlist compare-mobile"><Link to={`${process.env.PUBLIC_URL}/compare`}><i className="fa fa-random" aria-hidden="true"></i>{translate('compare')}</Link></li>
                                <li className="mobile-wishlist"><Link to={`${process.env.PUBLIC_URL}/wishlist`}><i className="fa fa-heart" aria-hidden="true"></i>{translate('wishlist')}</Link></li>
                                <li className="onhover-dropdown mobile-account">
                                    <i className="fa fa-user" aria-hidden="true"></i> {translate('my_account')}
                                    <ul className="onhover-show-div">
                                        <li>
                                            <Link to={`${process.env.PUBLIC_URL}/pages/login`} data-lng="en">Login</Link>
                                        </li>
                                        <li>
                                            <Link to={`${process.env.PUBLIC_URL}/pages/register`} data-lng="en">Register</Link>
                                        </li>
                                    </ul>
                                </li>
                            </ul>
                        </div> */}
                    </div>
                </div>
            </div>
        )
    }
}


export default withTranslate(TopBar);