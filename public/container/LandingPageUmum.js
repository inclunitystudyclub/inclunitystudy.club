import React, { Component } from "react";
import Illust1 from "../assets/1.png"
 
class LandingPageUmum extends Component {
  render() {
    return (
        <div className="container">
           <div className="row nav-bg no-mg">
                <div className="col-md-9 mx-auto sc-d-flex sc-landingpage">
                    <div className="col-md-8 col-xs-12 align-self-center">
                        <div className="">
                            <h2>
                                Ambil Laptopmu,
                            </h2>
                            <p>
                                Mari bergabung dan berkembang bersama kami
                            </p>
                            <a className="sc-btn1 sc-landindpage-btn">Yuk Daftar!</a>
                        </div>
                    </div>
                    <div className="col-md-4 col-xs-12 align-self-center sc-illust-hide">
                        <img src={Illust1} width="100%" alt="inclunity-study-club"></img>
                    </div>
                </div>
            </div> 
        </div>
      
    );
  }
}
 
export default LandingPageUmum;