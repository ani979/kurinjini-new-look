import React, { Component } from 'react';
import { IntlActions } from 'react-redux-multilingual'
import Pace from 'react-pace-progress'

// Import custom components
import store from '../../../store';
import NavCarousel from "./common/nav-carousel";
import CartContainer from "./../../../containers/CartContainer";
import TopBar from "./common/topbar";
import {changeCurrency} from '../../../actions'
import {Autocomplete} from '../autocomplete'
import {connect} from "react-redux";
import _products from '../../../api/data.js'

class HeaderOne extends Component {

    constructor(props) {
        super(props);

		this.state = {
			isLoading:false
		}
    }

    componentWillMount(){
        window.addEventListener('scroll', this.handleScroll);
	}
    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScroll);
    }

    handleScroll = () => {
        let number = window.pageXOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;

        if (number >= 300) {
            document.getElementById("sticky").classList.add('fixed');
        } else {
            document.getElementById("sticky").classList.remove('fixed');
		}
		document.getElementById("sticky").classList.remove('fixed');
    }

    changeLanguage(lang) {
        store.dispatch(IntlActions.setLocale(lang))
		localStorage.setItem('locale-lang', lang)
	}

    openNav() {
        var openmyslide = document.getElementById("mySidenav");
        if(openmyslide){
            openmyslide.classList.add('open-side')
		}
    }
    openSearch() {
        document.getElementById("search-overlay").style.display = "block";
    }

    closeSearch() {
        document.getElementById("search-overlay").style.display = "none";
    }

	load = ()=>{
		this.setState({isLoading: true});
		fetch().then(()=>{
			// deal with data fetched
			this.setState({isLoading: false})
		})
	};
	
	render() {

		return (
			<div>
				<header id="sticky" className="sticky">
					{this.state.isLoading ? <Pace color="#27ae60"/> : null}
					{/* <div className="mobile-fix-option"></div> */}
					{/*Top Header Component*/}
					<TopBar/>
					

					
				</header>
				{/* <Autocomplete   
                    suggestions={_products}
                /> */}
				<div style={{margin:"10px"}}>
                        <NavCarousel></NavCarousel>
                </div>
			</div>	
			)
	}
}

export default connect(null,
    { changeCurrency }
)(HeaderOne);