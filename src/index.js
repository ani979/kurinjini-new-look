import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { ScrollContext } from 'react-router-scroll-4';
import { IntlReducer as Intl, IntlProvider } from 'react-redux-multilingual'
import { IntlActions } from 'react-redux-multilingual'
import './index.scss';

// Import custom components
import store from './store';
import translations from './constants/translations'
import { getAllProducts } from './actions'
import Fashion from './components/layouts/fashion';

//Collection Pages
import CollectionLeftSidebar from "./components/collection/collection-left-sidebar";
import CollectionAll from "./components/collection/collection-all";

// Product Pages
import LeftSideBar from "./components/products/left-sidebar";


// Features
import Layout from './components/app'
import Cart from './components/cart'
import Compare from './components/compare/index'
import wishList from './components/wishlist'
import checkOut from './components/checkout'
import orderSuccess from './components/checkout/success-page'

// Extra Pages
import PageNotFound from './components/pages/404'
import lookbook from './components/pages/lookbook'
import Login from './components/pages/login'
import Register from './components/pages/register'
import Search from './components/pages/search'
import Collection from './components/pages/collection'
import ForgetPassword from './components/pages/forget-password'
import Contact from './components/pages/contact'
import Dashboard from './components/pages/dashboard'

// Blog Pages
import allProducts from './constants/ProductConstants'
import { SUBCATEGORY_KIDS, SENSITIVE_SKIN } from './constants/Tags';
import { ANTI_AGEING } from './constants/variants';
import AboutUs from './components/pages/about-us/AboutUs';
import FAQ from './components/pages/faq/faq';
import Recycling from './components/pages/recyciling/recycling';
import HowToOrder from './components/pages/order/how-to-order';
import asyncComponent from './AsyncComponent'

var lang = localStorage.getItem('locale-lang');

if(lang==null){
	lang='en';
}

const oilAndSerum = asyncComponent(() =>
	import("./components/collection/collection-all").then(module => module.default),
	{typeSelection:allProducts.skin,
		mainSelection:allProducts.oilsAndSerums,
		subSelection:allProducts.oilsAndSerums}
)


class Root extends React.Component {

	
    render() {
        store.dispatch(getAllProducts());
		store.dispatch(IntlActions.setLocale(lang))

        return(
        	<Provider store={store}>
                <IntlProvider translations={translations} locale='en'>
				<BrowserRouter basename={'/'} >
					<ScrollContext>
                        <Layout>
                            <Switch>
								<Route exact path={`${process.env.PUBLIC_URL}/`} component={Fashion}/>

								{/*Routes For Features (Product Collection) */}
								<Route path={`${process.env.PUBLIC_URL}/face-care/collection`} render={(props) => <CollectionLeftSidebar {...props} type="skin"/>}/>
								<Route path={`${process.env.PUBLIC_URL}/hair-care/collection`} render={(props) => <CollectionLeftSidebar {...props} type="hair"/>}/>
								{/* <Route path={`${process.env.PUBLIC_URL}/right-sidebar/collection`} component={CollectionRightSidebar}/> */}

								{/*Routes For Single Product*/}
								<Route path={`${process.env.PUBLIC_URL}/product/:id`} component={LeftSideBar}/>

								{/* <Route path={`${process.env.PUBLIC_URL}/all/collection`} render={
									(props) => 	import("./components/collection/collection-all").then(CollectionAll => 
										<CollectionAll {...props} typeSelection=""/>
								)}/> */}
								<Route path={`${process.env.PUBLIC_URL}/all/collection`} render={(props) => <CollectionAll {...props} typeSelection=""/>}/>
								<Route path={`${process.env.PUBLIC_URL}/oils-serums`} component = {oilAndSerum}/> 
								<Route path={`${process.env.PUBLIC_URL}/moisturizing-creams`} render={(props) => <CollectionAll {...props} typeSelection = {allProducts.skin} mainSelection = {allProducts.faceCare} subSelection={allProducts.moisturizingCreams} />}/>
								<Route path={`${process.env.PUBLIC_URL}/spf-creams`} render={(props) => <CollectionAll {...props} typeSelection = {allProducts.skin} mainSelection = {allProducts.faceCare} subSelection={allProducts.sunProtection} />}/>
								<Route path={`${process.env.PUBLIC_URL}/kids`} render={(props) => <CollectionAll {...props} typeSelection = {allProducts.skin} mainSelection = {allProducts.faceCare} subSelection={SUBCATEGORY_KIDS} />}/>
								<Route path={`${process.env.PUBLIC_URL}/sensitive-skin`} render={(props) => <CollectionAll {...props} typeSelection = {allProducts.skin} mainSelection = {allProducts.faceCare} subSelection={SENSITIVE_SKIN} />}/>
								<Route path={`${process.env.PUBLIC_URL}/anti-ageing`} render={(props) => <CollectionAll {...props} typeSelection = {allProducts.skin} mainSelection = {allProducts.faceCare} subSelection={ANTI_AGEING} />}/>
								<Route path={`${process.env.PUBLIC_URL}/lip-balms`} render={(props) => <CollectionAll {...props} typeSelection = {allProducts.skin} mainSelection = {allProducts.lipCare} subSelection={allProducts.lipbalm} />}/>
								<Route path={`${process.env.PUBLIC_URL}/lip-scrubs`} render={(props) => <CollectionAll {...props} typeSelection = {allProducts.skin} mainSelection = {allProducts.lipCare} subSelection={allProducts.lipScrubs} />}/>
								<Route path={`${process.env.PUBLIC_URL}/kids-lips`} render={(props) => <CollectionAll {...props} typeSelection = {allProducts.skin} mainSelection = {allProducts.lipCare} subSelection={SUBCATEGORY_KIDS} />}/>
								<Route path={`${process.env.PUBLIC_URL}/kids-hair`} render={(props) => <CollectionAll {...props} typeSelection = {allProducts.hair} subSelection={SUBCATEGORY_KIDS} />}/>

								<Route path={`${process.env.PUBLIC_URL}/foot-scrubbers`} render={(props) => <CollectionAll {...props} typeSelection = {allProducts.skin} mainSelection = {allProducts.soaps} subSelection={allProducts.footScrubbers} />}/>
								<Route path={`${process.env.PUBLIC_URL}/foot-healers`} render={(props) => <CollectionAll {...props} typeSelection = {allProducts.skin} mainSelection = {allProducts.moisturizingCreams} subSelection={allProducts.footHealer} />}/>

								<Route path={`${process.env.PUBLIC_URL}/body-scrubbers`} render={(props) => <CollectionAll {...props} typeSelection = {allProducts.skin} mainSelection = {allProducts.soaps} subSelection={allProducts.scrubbers} />}/>
								<Route path={`${process.env.PUBLIC_URL}/nourishing-bars`} render={(props) => <CollectionAll {...props} typeSelection = {allProducts.skin} mainSelection = {allProducts.soaps} subSelection={allProducts.normalSoaps} />}/>
								
								<Route path={`${process.env.PUBLIC_URL}/body-scrubbers`} render={(props) => <CollectionAll {...props} typeSelection = {allProducts.skin} mainSelection = {allProducts.soaps} subSelection={allProducts.scrubbers} />}/>
								<Route path={`${process.env.PUBLIC_URL}/nourishing-bars`} render={(props) => <CollectionAll {...props} typeSelection = {allProducts.skin} mainSelection = {allProducts.soaps} subSelection={allProducts.normalSoaps} />}/>

								<Route path={`${process.env.PUBLIC_URL}/hydrosols`} render={(props) => <CollectionAll {...props} typeSelection = {allProducts.skin} mainSelection = {allProducts.hydrosols}/>}/>

								<Route path={`${process.env.PUBLIC_URL}/hair-oils`} render={(props) => <CollectionAll {...props} typeSelection = {allProducts.hair} mainSelection = {allProducts.oilsAndSerums}/>}/>
								<Route path={`${process.env.PUBLIC_URL}/hair-masks`} render={(props) => <CollectionAll {...props} typeSelection = {allProducts.hair} mainSelection = {allProducts.hairCare} />}/>


								{/*Routes For custom Features*/}
								<Route path={`${process.env.PUBLIC_URL}/cart`} component={Cart}/>
								<Route path={`${process.env.PUBLIC_URL}/wishlist`} component={wishList}/>
								<Route path={`${process.env.PUBLIC_URL}/compare`} component={Compare}/>
								<Route path={`${process.env.PUBLIC_URL}/checkout`} component={checkOut}/>
								<Route path={`${process.env.PUBLIC_URL}/order-success`} component={orderSuccess}/>

								{/*Routes For Extra Pages*/}
                                <Route path={`${process.env.PUBLIC_URL}/pages/about-us`} component={AboutUs}/>
                                <Route path={`${process.env.PUBLIC_URL}/pages/404`} component={PageNotFound}/>
                                <Route path={`${process.env.PUBLIC_URL}/pages/lookbook`} component={lookbook}/>
                                <Route path={`${process.env.PUBLIC_URL}/pages/login`} component={Login}/>
                                <Route path={`${process.env.PUBLIC_URL}/pages/register`} component={Register}/>
                                <Route path={`${process.env.PUBLIC_URL}/pages/search`} component={Search}/>
                                <Route path={`${process.env.PUBLIC_URL}/pages/collection`} component={Collection}/>
                                <Route path={`${process.env.PUBLIC_URL}/pages/forget-password`} component={ForgetPassword}/>
                                <Route path={`${process.env.PUBLIC_URL}/pages/contact`} component={Contact}/>
                                <Route path={`${process.env.PUBLIC_URL}/pages/dashboard`} component={Dashboard}/>
                                <Route path={`${process.env.PUBLIC_URL}/pages/faq`} component={FAQ}/>
								<Route path={`${process.env.PUBLIC_URL}/pages/recycling`} component={Recycling}/>
								<Route path={`${process.env.PUBLIC_URL}/pages/howTo`} component={HowToOrder}/>

								{/*Blog Pages*/}
                                {/* <Route path={`${process.env.PUBLIC_URL}/blog/right-sidebar`} component={RightSide}/>
                                <Route path={`${process.env.PUBLIC_URL}/blog/details`} component={Details}/>
                                <Route path={`${process.env.PUBLIC_URL}/blog/blog-page`} component={BlogPage}/> */}

								<Route component={PageNotFound} />
                            </Switch>
						</Layout>
					  </ScrollContext>
					</BrowserRouter>
                </IntlProvider>
			</Provider>
    	);
    }
}

ReactDOM.render(<Root />, document.getElementById('root'));


