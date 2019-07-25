import React, {Component} from 'react';


class orderSuccess extends Component {

    render () {

        //const {payment, items, symbol, orderTotal} = this.props.location.state;
        //console.log("state ", this.props.location.state);
        const {orderNumber, items, email, orderTotal} = this.props.location.state;
        //console.log("items ", JSON.parse(items.data));
        const itemsJson = JSON.parse(items.data);
        // var options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
        // var current = new Date();
        // var next5days = new Date(Date.now() + 5 * 86400000);
        // let CheckDate = current.toLocaleDateString("en-US", options).toString()
        // let deliveryDate = next5days.toLocaleDateString("en-US", options).toString()

        return (
            
            <div>
                <section className="section-b-space light-layout">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12">
                                <div className="success-text">
                                    <i className="fa fa-check-circle" aria-hidden="true"></i>
                                    <h2>thank you</h2>
                                    <p> We have sent you an email on <b style={{textTransform:"lowercase"}}>{email.toLowerCase()}</b> confirming your order <b>{orderNumber}</b></p>
                                    {/* <p>Transaction ID: {(payment.paymentID)?payment.paymentID:payment.id}</p> */}
                                    <p>We will get in touch with you shortly on delivery and payment. Thanks.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="section-b-space">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-6">
                                <div className="product-order">
                                    <h3>your order details</h3>
                                    {itemsJson.map((item, index) => {
                                    return <div className="row product-order-detail" key={index}>
                                                {/* <div className="col-3">
                                                    <img src={`${item.variants[0].images}`} alt="" className="img-fluid" />
                                                </div> */}
                                                <div className="col-3 order_detail">
                                                    <div>
                                                        <h4>product name</h4>
                                                        <h5>{item.name}</h5>
                                                    </div>
                                                </div>
                                                <div className="col-3 order_detail">
                                                    <div>
                                                        <h4>quantity</h4>
                                                        <h5>{item.quantity}</h5>
                                                    </div>
                                                </div>
                                                <div className="col-3 order_detail">
                                                    <div>
                                                        <h4>price</h4>
                                                        <h5>{item.price}</h5>
                                                    </div>
                                                </div>
                                            </div>
                                    })}
                                    <div className="total-sec">
                                        <ul>
                                            <li>subtotal <span>{orderTotal}</span></li>
                                            {/* <li>shipping <span>$0</span></li>
                                            <li>tax(GST) <span>$0</span></li> */}
                                        </ul>
                                    </div>
                                    <div className="final-total">
                                        <h3>total <span>{orderTotal}</span></h3>
                                    </div>
                                </div>
                            </div>
                            {/* <div className="col-lg-6">
                                <div className="row order-success-sec">
                                    <div className="col-sm-6">
                                        <h4>summery</h4>
                                        <ul className="order-detail">
                                            {(payment.paymentID)?
                                                <div>
                                            <li>payer ID: {payment.payerID}</li>
                                            <li>payment ID: {payment.paymentID}</li>
                                            <li>payment Token: {payment.paymentToken}</li></div>
                                                :
                                            <li>Order ID: {payment.id}</li> }

                                            <li>Order Date: {CheckDate}</li>
                                            <li>Order Total: {symbol}{orderTotal}</li>
                                        </ul>
                                    </div>
                                    <div className="col-sm-6">
                                        <h4>shipping address</h4>
                                        <ul className="order-detail">
                                            <li>gerg harvell</li>
                                            <li>568, suite ave.</li>
                                            <li>Austrlia, 235153</li>
                                            <li>Contact No. 987456321</li>
                                        </ul>
                                    </div>

                                    <div className="col-sm-12 payment-mode">
                                        <h4>payment method</h4>
                                        <p>Pay on Delivery (Cash/Card). Cash on delivery (COD) available. Card/Net
                                            banking acceptance subject to device availability.</p>
                                    </div>
                                    <div className="col-md-12">
                                        <div className="delivery-sec">
                                            <h3>expected date of delivery</h3>
                                            <h2>{deliveryDate}</h2>
                                        </div>
                                    </div>
                                </div>
                            </div> */}

                        </div>
                    </div>
                </section>
            </div>
           
        )
    }
}

export default orderSuccess