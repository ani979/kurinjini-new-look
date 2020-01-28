import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import 'smartmenus';
import { withTranslate } from 'react-redux-multilingual'
import {Swipeable } from 'react-swipeable'
import "./navbar.css";

class NavBar extends Component {
    render() {
        const {translate} = this.props;
        return (
            <Swipeable onSwiped ={this.swipeRight} >
                <div>
                    <nav id="main-nav" className = "nav-block">
                        
                        {/*Horizontal menu*/}
                            <ul id="main-menu" className="row">
                                
                                {/* <li className="mega">
                                    <a href="#">{translate('features')}
                                        <div className="lable-nav">{translate('new')}</div>
                                    </a>
                                    <ul className="mega-menu feature-menu">
                                        <li>
                                            <div className="container">
                                                <div className="row">
                                                    <div className="col-xl-4">
                                                        <Link to={`${process.env.PUBLIC_URL}/blog/blog-page`} >
                                                            <img src={`${process.env.PUBLIC_URL}/assets/images/feature/blog-page.jpg`} alt="" />
                                                            <h6>{translate('blog_left_sidebar')}</h6>
                                                        </Link>
                                                    </div>
                                                    <div className="col-xl-4">
                                                        <Link to={`${process.env.PUBLIC_URL}/blog/right-sidebar`} >
                                                            <img src={`${process.env.PUBLIC_URL}/assets/images/feature/blog(right-sidebar).jpg`} alt="" />
                                                            <h6>{translate('blog_right_sidebar')}</h6>
                                                        </Link>
                                                    </div>
                                                    <div className="col-xl-4">
                                                        <Link to={`${process.env.PUBLIC_URL}/blog/details`} >
                                                            <img src={`${process.env.PUBLIC_URL}/assets/images/feature/blog-detail.jpg`} alt="" />
                                                            <h6>{translate('blog_detail')}</h6>
                                                        </Link>
                                                    </div>
                                                    <div className="col-xl-4">
                                                        <Link to={`${process.env.PUBLIC_URL}/left-sidebar/collection`} >
                                                            <img src={`${process.env.PUBLIC_URL}/assets/images/feature/category-page.jpg`} alt="" />
                                                            <h6>{translate('category_left_sidebar')}</h6>
                                                        </Link>
                                                    </div>
                                                    <div className="col-xl-4">
                                                        <Link to={`${process.env.PUBLIC_URL}/right-sidebar/collection`} >
                                                            <img src={`${process.env.PUBLIC_URL}/assets/images/feature/category-page(right).jpg`} alt=""/>
                                                            <h6>{translate('category_right_sidebar')}</h6>
                                                        </Link>
                                                    </div>
                                                    <div className="col-xl-4">
                                                        <Link to={`${process.env.PUBLIC_URL}/no-sidebar/collection`} >
                                                            <img src={`${process.env.PUBLIC_URL}/assets/images/feature/category-page(no-sidebar).jpg`} alt=""/>
                                                            <h6>{translate('category_no_sidebar')}</h6>
                                                        </Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                    </ul>
                                </li> */}
                            <li className="nav-row col-4"><Link to={`${process.env.PUBLIC_URL}/pages/about-us`} ><h4 className="nav-font" >About us</h4></Link></li>
                            <li className="nav-row col-4"><Link to={`${process.env.PUBLIC_URL}/pages/recycling`} ><h4 className="nav-font">Recycling</h4></Link></li>
                            <li className="nav-row col-4"><Link to={`${process.env.PUBLIC_URL}/pages/faq`} ><h4 className="nav-font">{translate('FAQ')}</h4></Link></li>

                        </ul>
                    </nav>
                </div>
            </Swipeable>    
        )
    }
}


export default withTranslate(NavBar);