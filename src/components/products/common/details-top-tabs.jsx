import React, {Component} from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.scss';
import HowToUseRenderer from '../../../api/howtouse';
import "./details-tabs.css"

class DetailsTopTabs extends Component {

    render () {
        const {item} = this.props
        let videoTab;
        let howToUse;
        let precaution;
        if(item.video) {
            videoTab = <Tab className="nav-item">
            <span className="nav-link" >
                <i className="icofont icofont-contacts"></i>Video</span>
            <div className="material-border"></div>
        </Tab>;
        } else {
            videoTab = ''
        }
        
        if(item.howToUse) {
            howToUse = 
            <tr key="hello">
                <th>How to use :</th>
                <td><HowToUseRenderer items = {item.howToUse}></HowToUseRenderer></td>
            </tr>
        
        } else {
            howToUse = ""
        }

        if(item.precaution) {
            precaution = <tr>
                <th>Precaution :</th>
                <td>{item.precaution}</td>
            </tr>
        
        } else {
            precaution = ""
        }
        
        return (
            <section className="tab-product m-0">
                <div className="row">
                    <div className="col-sm-12 col-lg-12">
                        <Tabs className="tab-content nav-material">
                            <TabList className="nav nav-tabs nav-material">
                                <Tab className="nav-item description-tab">
                                    <span className="nav-link active">
                                    <i className="show-forward-icon fa fa-forward"></i>
                                    Details
                                    </span>
                                    
                                    <div className="material-border"></div>
                                </Tab>
                                <Tab className="nav-item detail-tab">
                                    <span className="nav-link" >
                                    <i className="show-forward-icon fa fa-forward"></i>Description</span>
                                    <div className="material-border"></div>
                                </Tab>
                                
                                {videoTab}
                                
                                {/* <Tab className="nav-item">
                                    <span className="nav-link" >
                                        <i className="icofont icofont-contacts"></i>Write Review</span>
                                    <div className="material-border"></div>
                                </Tab> */}
                            </TabList>
                            <TabPanel className="tab-pane fade mt-4 show active">
                                <table className="table table-striped mb-0">
                                    <tbody>
                                    <tr>
                                        <th>Suitable for</th>
                                        <td>{item.goodFor.join(", ")}</td>
                                    </tr>
                                    <tr>
                                        <th>Gets rid from :</th>
                                        <td>{item.tags.join(", ")}</td>
                                    </tr>
                                    <tr>
                                        <th>Available in Flavours :</th>
                                        <td>{(item.variants.length > 0 ? (item.variants.map((vari, index) =>
                                                       vari.flavour
                                        )).join(", "):"No flavours")}</td>
                                    </tr>
                                    <tr>
                                        <th>Ingredients :</th>
                                        <td>{item.ingredients.join(", ")}</td>
                                    </tr>
                                    {howToUse}
                                    {precaution}
                                    {/* <tr>
                                        <th>Neck :</th>
                                        <td>Round Neck</td>
                                    </tr>
                                    <tr>
                                        <th>Sleeve :</th>
                                        <td>3/4 Sleeve</td>
                                    </tr>
                                    <tr>
                                        <th>Work :</th>
                                        <td>N/A</td>
                                    </tr> */}
                                    </tbody>
                                </table>
                            </TabPanel>
                            <TabPanel>
                                <p className="mt-4 p-0">
                                    {item.description}
                                </p>
                            </TabPanel>
                            <TabPanel>
                                <div className="mt-4 text-center">
                                    <div className="embed-responsive embed-responsive-16by9">
                                        <iframe
                                            src={item.video}
                                            allow="autoplay; encrypted-media"
                                            allowFullScreen>
                                        </iframe>
                                    </div>
                                </div>
                            </TabPanel>
                            {/* <TabPanel>
                                <form className="theme-form mt-4">
                                    <div className="form-row">
                                        <div className="col-md-12 ">
                                            <div className="media m-0">
                                                <label>Rating</label>
                                                <div className="media-body ml-3">
                                                    <div className="rating three-star">
                                                        <i className="fa fa-star"></i>
                                                        <i className="fa fa-star"></i>
                                                        <i className="fa fa-star"></i>
                                                        <i className="fa fa-star"></i>
                                                        <i className="fa fa-star"></i>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <label htmlFor="name">Name</label>
                                            <input type="text" className="form-control" id="name" placeholder="Enter Your name" required />
                                        </div>
                                        <div className="col-md-6">
                                            <label htmlFor="email">Email</label>
                                            <input type="text" className="form-control" id="email" placeholder="Email" required />
                                        </div>
                                        <div className="col-md-12">
                                            <label htmlFor="review">Review Title</label>
                                            <input type="text" className="form-control" id="review" placeholder="Enter your Review Subjects" required />
                                        </div>
                                        <div className="col-md-12">
                                            <label htmlFor="review">Review Title</label>
                                            <textarea className="form-control" placeholder="Wrire Your Testimonial Here" id="exampleFormControlTextarea1" rows="6"></textarea>
                                        </div>
                                        <div className="col-md-12">
                                            <button className="btn btn-solid" type="submit">Submit YOur Review</button>
                                        </div>
                                    </div>
                                </form>
                            </TabPanel> */}
                        </Tabs>
                    </div>
                </div>
            </section>
        )
    }
}

export default DetailsTopTabs;