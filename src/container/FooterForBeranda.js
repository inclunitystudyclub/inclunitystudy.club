import React, { Component } from 'react';
import LogoInclunityFull from "../assets/logo-inclunity.png";
import ListPoint from "./ListPoint";
import { Icon } from '@iconify/react';
import locationPinAlt from '@iconify/icons-uil/location-pin-alt';
import graduationCap from '@iconify/icons-uil/graduation-cap';

class FooterForBeranda extends Component {
    render() {
        return(
          <div className="container">
            <div className="row sc-beforefooter-bg sc-footer-bg no-mg">
              <div className="col-md-9 mx-auto sc-d-flex sc-beforefooter">
                <div className="col-md-5 col-xs-12 align-self-center">
                    <img className="sc-logo-beforefooter" src={LogoInclunityFull} alt="inclunity-study-club"></img>
                </div>
                <div className="col-md-7 col-xs-12 align-self-center">
                  <div className="sc-mob-listpoint-content">
                    <h3>
                      Lokasi Study Club
                    </h3>
                    <br></br>
                    <ListPoint
                      iconListPoint={<Icon icon={locationPinAlt} style={{color: '#fecd48', fontSize: '30px'}} />}
                      descListPoint={"Kampus Utama UMRI, Jl. Tuanku Tambusai, Kel. Delima, Kec. Tampan, Kota Pekanbaru, Riau"}
                      classListPoint={"white-color-text"}
                    />
                    <ListPoint
                      iconListPoint={<Icon icon={graduationCap} style={{color: '#fecd48', fontSize: '30px'}} />}
                      descListPoint={"Teknik Informatika, Fakultas Ilmu Komputer, Universitas Muhammadiyah Riau"}
                      classListPoint={"white-color-text"}
                    />
                  </div>
                </div>
              </div>
              <div className="col-md-9 mx-auto sc-d-flex sc-bottom-copyright">
                © 2021 • Made with ❤ by <text>INCLUNITY Team</text> • Thanks to <text>GitHub Pages</text> 😁
              </div>
            </div> 
          </div>
        );
    }
}

export default FooterForBeranda