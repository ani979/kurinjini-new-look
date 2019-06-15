import React from 'react'
import './recycling.css'
import Card from '../about-us/Card'
import Breadcrumb from '../../common/breadcrumb';

function Recycling() {

    return (<div>
                <Breadcrumb title={'Recycling'}/>
                <div className="panel" id="recycling">
                    <div className="center-column aboutus-content">
                        <div>
                            <h2><span className="subheader">Recycling is rewarding</span></h2>
                        </div>
                        <div className = "answer-style">
                            <blockquote>
                                <p className = "block-para">It’s time we practice reduce, reuse and recycle. Don’t throw away the empties. The bottles or containers that you purchased from us can be easily reused. Bring us those empty containers or glass bottles for a refill. And, here are the rewards you get for doing these:</p>
                            </blockquote>
                            
                        </div>        
                    </div>
                </div>
                <div className="panel panel-cards">
                    <div className="cards cards--wrap content-wrapper--large add-pad">
                        <Card title = "Glass containers" excerpt = "When you get empty glass bottles(used in creams) back irrespective of their sizes, you can choose to take Rs. 20/- off on your next purchase of any item"></Card>
                        <Card title = "Lip balm containers" excerpt = "When you get empty lip balm containers back, you can choose to take 10/- off on your next purchase of any item"></Card>                    
                    </div>
                    
                </div>
                <p style={{textAlign:"center"}}><i>Every container will be sterilised before reuse</i></p>
            </div>

    )

}

export default Recycling