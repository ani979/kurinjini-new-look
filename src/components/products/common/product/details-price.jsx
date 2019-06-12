import React, {Component} from 'react';
import {Link} from 'react-router-dom'
import Slider from 'react-slick';
import Modal from 'react-responsive-modal';


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
            size:this.props.item.size[0]
        });
    }

    minusQty = () => {
        if(this.state.quantity > 1) {
            this.setState({stock: 'InStock'})
            this.setState({quantity: this.state.quantity - 1})
        }
    }

    changePriceBasedOnQuantity = (size) => {
        console.log("this.props.item.pricePerSize ", this.props.item.pricePerSize)
        //console.log("size is ", size);
        
        
        if(this.props.item.pricePerSize) {
            let selItem = this.props.item.pricePerSize.filter((value, index) => value.size === size);
            console.log("sel Item ", selItem)
            this.setState({price: selItem[0].price, size:size})
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
        const {symbol, item, addToCartClicked, BuynowClicked, addToWishlistClicked} = this.props

        var colorsnav = {
            slidesToShow: 6,
            swipeToSlide:true,
            arrows: false,
            dots: false,
            focusOnSelect: true
        };

        let flavour = item.variants.length > 0 ? 
                            <div className="product-page-filter row border-product">
                                <h4 className="col-md-6 col-sm-6 col-xl-6"> Choose your flavour:</h4>
                                <select className="col-md-6 col-sm-6 col-xl-6"
                                // onChange={(e) => this.props.filterSort(e.target.value)}
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
                    {/* <h4>
                        <del>{symbol}{item.price}</del>
                        <span>{item.discount}% off</span></h4> */}
                    <h3>{symbol}{(this.state.price - (this.state.price*item.discount/100))} </h3>
                    {/* <ul > */}
                        {/* <Slider {...colorsnav} asNavFor={this.props.navOne} ref={slider => (this.slider1 = slider)} className="color-variant"> */}
                            {/* {item.variants.map((vari, i) => {
                                return <li className="red" key={i} title={vari.flavour}></li>
                            })} */}
                    {flavour}
                        {/* </Slider> */}
                        
                    {/* </ul> */}
                    <div className="product-description">
                        {/* <h6 className="product-title size-text">select size
                            <span><a href="#" data-toggle="modal"
                                     data-target="#sizemodal" onClick={this.onOpenModal} >size chart</a></span></h6>
                        <div className="modal fade" id="sizemodal" tabIndex="-1"
                             role="dialog" aria-labelledby="exampleModalLabel"
                             aria-hidden="true">
                            <div className="modal-dialog modal-dialog-centered"
                                 role="document">
                                <div className="modal-content">
                                    <div className="modal-header">
                                        <h5 className="modal-title"
                                            id="exampleModalLabel">Sheer Straight
                                            Kurta</h5>
                                        <button type="button" className="close"
                                                data-dismiss="modal" aria-label="Close">
                                            <span aria-hidden="true">&times;</span>
                                        </button>
                                    </div>
                                    <div className="modal-body">
                                        <img src={`${process.env.PUBLIC_URL}/assets/images/size-chart.jpg`} alt="" className="img-fluid"/>
                                    </div>
                                </div>
                            </div>
                        </div> */}
                        {/* <div className="size-box">
                            <ul>
                                {item.size.map((size, i) => {
                                    return <li key={i}><a href="#">{size}</a></li>
                                })}
                            </ul>
                        </div> */}
                        <div className="product-page-filter row">
                                <h4 className="col-md-6 col-sm-6 col-xl-6"> Choose quantity:</h4>
                                <select className="col-md-6 col-sm-6 col-xl-6"
                                    onChange={(e) => this.changePriceBasedOnQuantity(e.target.value)}
                                >
                                    {item.size.map((size, i) => {
                                        return <option key={i} value={size}>{size}</option>
                                    })}
                                    
                                </select>
                            </div>
                        {/* <span className="instock-cls">{this.state.stock}</span>
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
                        </div> */}
                    </div>
                    {/* <div className="product-buttons" >
                        <a className="btn btn-solid" onClick={() => addToCartClicked(item, this.state.quantity, this.state.size)}>add to cart</a>
                        <Link to={`${process.env.PUBLIC_URL}/checkout`} className="btn btn-solid" onClick={() => BuynowClicked(item, this.state.quantity, this.state.price)} >buy now</Link>
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
                <Modal open={this.state.open} onClose={this.onCloseModal} center>
                    <div className="modal-dialog modal-dialog-centered" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="exampleModalLabel">Sheer Straight Kurta</h5>
                            </div>
                            <div className="modal-body">
                                <img src={`${process.env.PUBLIC_URL}/assets/images/size-chart.jpg`} alt="" className="img-fluid" />
                            </div>
                        </div>
                    </div>
                </Modal>
            </div>
        )
    }
}


export default DetailsWithPrice;