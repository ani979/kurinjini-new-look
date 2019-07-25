import React, {Component} from 'react';
import {Link} from 'react-router-dom'


class DetailsWithPrice extends Component {

    constructor (props) {
        super (props)
        this.state = {
            open:false,
            quantity:1,
            stock: 'InStock',
            nav3: null,
            size:''
        }
    }

    onOpenModal = () => {
        this.setState({ open: true });
    };

    onCloseModal = () => {
        this.setState({ open: false });
    };

    componentDidMount() {
        this.setState({
            nav3: this.slider3,
            price:this.props.item.price,
            size:this.props.item.size[0],
            quantity:1,
            flavour:this.props.item.variants && this.props.item.variants.length > 0 ? this.props.item.variants[0].flavour: ""
        });
    }

    componentDidUpdate(prevProps) {
        if(this.props.item.name !== prevProps.item.name) {
            this.setState({
                price:this.props.item.price,
                size:this.props.item.size[0],
                quantity:1,
                flavour:this.props.item.variants && this.props.item.variants.length > 0 ? this.props.item.variants[0].flavour: ""
    
            })
        }
    }

    minusQty = () => {
        if(this.state.quantity > 1) {
            this.setState({stock: 'InStock'})
            this.setState({quantity: this.state.quantity - 1})
        }
    }

    changePriceBasedOnQuantity = (size) => {
        //console.log("this.props.item.pricePerSize ", this.props.item.pricePerSize)
        //console.log("size is ", size);
        
        
        if(this.props.item.pricePerSize) {
            let selItem = this.props.item.pricePerSize.filter((value, index) => value.size === size);
            //console.log("sel Item ", selItem)
            this.setState({price: selItem[0].price, size:size})
        } else {
            this.setState({size:size})
        }
    }

    changePriceBasedOnVariety = (flavour) => {
        
        //console.log("flavour is ", flavour);
        if(this.props.item.variants) {
            let selItem = this.props.item.variants.filter((value, index) => value.flavour === flavour);
            //console.log("sel Item ", selItem)
            if(selItem[0].price) {
                this.setState({
                    flavour:flavour,
                    price: selItem[0].price
                })
            } else {
                this.setState({
                    flavour:flavour
                })
            }   
        }
    }

    plusQty = () => {
        if(this.props.item.stock >= this.state.quantity) {
            this.setState({quantity: this.state.quantity+1})
        }else{
            this.setState({stock: 'Out of Stock !'})
        }
    }
    changeQty = (e) => {
        this.setState({ quantity: parseInt(e.target.value) })
    }

    render (){
        const {symbol, item, addToCartClicked, BuynowClicked} = this.props
        let flavour = item.variants.length > 1 ? 
                            <div className="product-page-filter row border-product">
                                <p className="col-md-6 col-sm-6 col-xl-6 col-6 product-detail-flavour"> Choose your flavour:</p>
                                <select className="col-md-6 col-sm-6 col-xl-6 col-5 quantity-border"
                                onChange={(e) => this.changePriceBasedOnVariety(e.target.value)}
                                >
                                    {item.variants.map((vari, i) => {
                                        return <option key={i} value={vari.flavour}>{vari.flavour}</option>
                                    })}
                                    
                                </select>
                            </div> : '' 

        return (
            <div className="col-lg-6 rtl-text">
                <div className="product-right">
                    <h2> {item.name} </h2>

                    <h3>{symbol}{(this.state.price - (this.state.price*item.discount/100))} </h3>

                    {flavour}

                    <div className="product-description">

                        <div className="product-page-filter row">
                                <p className="col-md-6 col-sm-6 col-xl-6 col-6 product-detail-flavour"> Choose quantity:</p>
                                <select className="col-md-6 col-sm-6 col-xl-6 col-5 quantity-border"
                                    onChange={(e) => this.changePriceBasedOnQuantity(e.target.value)}
                                >
                                    {item.size.map((size, i) => {
                                        return <option key={i} value={size}>{size}</option>
                                    })}
                                    
                                </select>
                        </div>
                        <span className="instock-cls">{this.state.stock}</span>
                        <h6 className="product-title">How many?</h6>
                        <div className="qty-box">
                            <div className="input-group">
                                <span className="input-group-prepend">
                                    <button type="button" className="btn quantity-left-minus" onClick={this.minusQty} data-type="minus" data-field="">
                                        <i className="fa fa-angle-left"></i>
                                    </button>
                                </span>
                                <input type="text" name="quantity" value={this.state.quantity} onChange={this.changeQty} className="form-control input-number" />
                                <span className="input-group-prepend">
                                    <button type="button" className="btn quantity-right-plus" onClick={this.plusQty} data-type="plus" data-field="">
                                        <i className="fa fa-angle-right"></i>
                                    </button>
                            </span>
                            </div>
                        </div>    
                    </div>
                    <div className="product-buttons" >
                        <a className="btn btn-solid" onClick={() => addToCartClicked(item, this.state.quantity, this.state.size, this.state.flavour)}>add to cart</a>
                        <Link to={`${process.env.PUBLIC_URL}/checkout`} className="btn btn-solid" onClick={() => BuynowClicked(item, this.state.quantity, this.state.size, this.state.flavour)} >buy now</Link>
                    </div>
                    {/* <div className="product-buttons" >
                        <Link to={`${process.env.PUBLIC_URL}/pages/howTo`} className="btn btn-solid" >How to Buy</Link>
                    </div> */}
                    <div className="border-product">
                        <h6 className="product-title">product details</h6>
                        <p>{item.shortDetails}</p>
                    </div>
                    {/* <div className="border-product">
                        <h6 className="product-title">share it</h6>
                        <div className="product-icon">
                            <ul className="product-social">
                                <li><a href="https://www.facebook.com/" target="_blank"><i className="fa fa-facebook"></i></a></li>
                                <li><a href="https://plus.google.com/discover" target="_blank"><i className="fa fa-google-plus"></i></a></li>
                                <li><a href="https://twitter.com/" target="_blank"><i className="fa fa-twitter"></i></a></li>
                                <li><a href="https://www.instagram.com/" target="_blank"><i className="fa fa-instagram"></i></a></li>
                            </ul>
                                <button className="wishlist-btn" onClick={() => addToWishlistClicked(item)}><i
                                    className="fa fa-heart"></i><span
                                    className="title-font">Add To WishList</span>
                                </button>
                        </div>
                    </div> */}
                    {/* <div className="border-product">
                        <h6 className="product-title">Time Reminder</h6>
                        <div className="timer">
                            <p id="demo">
                                <span>25
                                    <span className="padding-l">:</span>
                                    <span className="timer-cal">Days</span>
                                </span>
                                <span>22
                                    <span className="padding-l">:</span>
                                    <span className="timer-cal">Hrs</span>
                                </span>
                                <span>13
                                    <span className="padding-l">:</span>
                                    <span className="timer-cal">Min</span>
                                </span>
                                <span>57
                                    <span className="timer-cal">Sec</span>
                                </span>
                            </p>
                        </div>
                    </div> */}
                </div>
            </div>
        )
    }
}


export default DetailsWithPrice;