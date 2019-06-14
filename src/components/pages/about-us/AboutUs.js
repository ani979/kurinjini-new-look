import React from 'react'
import './aboutus.css'
import Card from './Card'
import Breadcrumb from '../../common/breadcrumb';

class AboutUs extends React.Component {
    state = { selectedPath: "1" };

    onItemSelection = arg => {
      this.setState({ selectedPath: arg.path });
    };
  
    render() {
      return (
        <div>
                <Breadcrumb title={'About Us'}/>
            <div className="panel" id="mission-and-vision">
                <div className="center-column aboutus-content">
                    <div>
                        <h2><span className="subheader">Mission &amp; Vision&nbsp;</span></h2>
                    </div>
                    <div className = "answer-style">
                        <blockquote>
                            <p className = "block-para">In a world where synthetic cosmetics has led us down a blind path, where skin care choices are made without knowing what harm chemicals can do to our skin, we are here to bring a change, slowly and steadily. </p>
                        </blockquote>
                        <p>By bringing nature's healing to you, we have devoted ourselves to a dream, a vision, a mission. We will revolutionize the way we care! And in so doing we will bring nourishment and balance, health and well being, sustainability and community to people and planet.</p>
                        <p>Hippocrates the father of medicine, said that 'the way to health is to have an aromatic bath and scented massage every day'. There are about three hundred essential oils in general use today and each having a distinct aroma of its own. The most effective way to use essential oils is not orally , as one might think, but by external application or inhalation. This is where we come in, bringing these aromas closer to you.</p>
                        <p>We need to take small steps so that change doesnt come heavy on you. We don't want you to change your skin routine overnight but we definitely would like you to start trying slowly the nature's gift and see for yourself what it does to you. </p>
                        <p>So let's work together to bring about a beautiful change, a change for a better care and love.</p>
                        <p>Together, we can change the world.</p>
                    </div>        
                </div>
            </div>
            <div className="panel panel-cards">
                
                <div className="cards cards--wrap content-wrapper--large add-pad">
                    <Card title = "Research" excerpt = "Constant research on oils and their benefits"></Card>
                    <Card title = "Home Made" excerpt = "Home made without compromising on purity and quality"></Card>
                    <Card title = "Beauty and health" excerpt = "Beauty and health go together"></Card>
                    <Card title = "Customer service" excerpt = "Greatest wealth lies in serving you"></Card>
                </div>
            </div>
            <section className="testimonial small-section" id="the-team">
                <div style = {{textAlign:"center", marginBottom:"40px"}}>
                    <h2><span className="subheader">The Team</span></h2>
                </div>
                    <div className="container">
                        <div className="row">
                            <div className="col-sm-12">
                                <div className="slide-2 testimonial-slider no-arrow">
                                    
                                    <div className = " row col-md-12">
                                        <div className="media-aboutus media col-md-6">
                                            <div>
                                                <img src={`${process.env.PUBLIC_URL}/assets/images/aboutUs/Shilpi_5.jpg`} alt="#" />
                                                    
                                            </div>
                                            
                                        </div>
                                        <div className="col-md-6">
                                            <div className = "answer-style">
                                                <p> <b>Shilpi</b> started Kurinjini skin care as an outcome of her passion towards soap making. A doctorate in Historical studies, she always had that creative itch on creating something of her own. She had an inclination towards making handmade soaps but she kept it to herself and used her skills to gift her friends. 
                                                    After getting her Doctorate degree, she got an opportunity to take it fulltime. Now, she focuses on research of the various natural oils including essential oils that go into making a perfect concoction for the skin. 
                                                    <br/>
                                                    She intends to continue Kurinjini as a home made brand rather than a factory-made brand.
                                                </p>
                                            </div>
                                        </div>
                                    </div>

                                    <div className = "row col-md-12">
                                        <div className="media-aboutus media col-md-6">
                                           
                                            <div className = "spacer-above">
                                                <img src={`${process.env.PUBLIC_URL}/assets/images/aboutUs/animesh.jpg`} alt="#" />
                                                    
                                                    
                                            </div>
                                            
                                        </div>
                                        <br/>
                                        <div className="col-md-6">
                                            <div className = "answer-style">
                                                <p> <b>Animesh</b> does most of the backend work for Kurinjini. Got married to Shilpi in 2007, he has been there with her in all her endeavors. He is involved into daily operations and deliveries. His responsibility in Kurinjini includes website development, photography and video shoots, preparing promotional content on whatsapp and other social media and managing Kurinjini's deliveries. 
                                                    He strongly believes that customer service is key to any successful business and hence at Kurinjini he ensures that every query is responded quickly and every order is delivered on time to every customer. He works as an IT Engineer at a firm in Bangalore.
                                                </p>
                                            </div>
                                                
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            {/* <div className="panel row" id="the-team">
                <div style = {{textAlign:"center"}}>
                    <h1><span className="subheader">The Team</span></h1>
                </div>
                <div>
                    
                    <div className = "row col-md-12 col-sm-12 col-lg-12">
                        <div className = "col-md-4 col-sm-4 col-lg-4">
                            <img className= "img-team" src = {shilpi}/>
                        </div>
                        <div className = "col-md-4 col-sm-4 col-lg-8">
                            <div className = "answer-style">
                                <p> Shilpi is the founder of Kurinjini skin care. A graduate from Delhi University, she did her post graduation in History from Jawaharalal Nehru University and proceeded to Bangalore after her marraige.
                                    In Bengaluru, she completed her PhD in History under ICHR(Indian Council of Historical Research) funding. Even before starting with Kurinjini, she always had that liking towards making handmade soaps but she kept it to herself and used her skills for gifting to her friends. 
                                    She got an opportunity to take it fulltime after getting her Doctorate degree. Even though her time is divided now between family and Kurinjini, she balances it well without compromising on any. Her focus has always been to research on the essential oils, their benefits and prepare the right concoction to treat different skin issues. 
                                    <br/>
                                    She is even a wonderful baker and a gardener. When she is not working, you can see her gardening or baking some fantastic breads for her household. 
                                    She intends to continue Kurinjini as a home made brand rather than a factory-made brand.
                                </p>
                            </div>
                        </div>
                    </div>  
                    <div className = "row col-md-12 col-sm-12 col-lg-12">
                        <div className = "col-md-4 col-sm-4 col-lg-4">
                            <img className= "img-team" src = {animeshPic}/>
                        </div>
                        <div className = "col-md-8 col-sm-8 col-lg-8">
                            <div className = "answer-style">
                                <p> Animesh does most of the backend work for Kurinjini. Got married to Shilpi in 2008, he has been there with her in all her endeavors. He is involved into daily operations and deliveries. He is a full-time software engineer at an organization in Bangalore. His responsibility in Kurinjini includes website development, photography and video shoots, preparing promotional content on whatsapp and other social media, and managing Kurinjini's deliveries. 
                                    He strongly believes that customer service is key to any successful business and hence at Kurinjini he ensures that every query is responded quickly and every order is delivered on time to every customer. 
                                </p>
                            </div>
                        </div>
                    </div>     
                </div>
            </div> */}
        </div>    
      );
    }
}

export default AboutUs