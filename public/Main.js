import React, { Component } from "react";
import { Route, NavLink, HashRouter } from "react-router-dom";
import WebFont from 'webfontloader';

import Logo from "./assets/logo.png";
import Beranda from "./id/Beranda";
import toBeranda from "./container/toBeranda";
import Tentang from "./id/Tentang";
import Kelas from "./id/Kelas";
import Peserta from "./id/Peserta";

WebFont.load({
  google: {
    families: ['Manrope:200,300,400,500,600,700,800']
  }
});
 
class Main extends Component {
  render() {
    return (
      <HashRouter>
        {/* Navbar Header */}
        <div className="row nav-bg no-mg">
            <div className="col-md-9 mx-auto">
                <nav className="navbar navbar-light sc-navbar no-pd-rg-lf">
                    <a className="navbar-brand">
                        <NavLink to="/id/">
                            <img src={Logo} height="60" alt={"Logo"}></img>
                        </NavLink>
                    </a>
                    <ul className="nav sc-navbar sc-navbar-mob justify-content-center">
                        <li className="nav-item nav-link sc-navlink">
                            <NavLink to="/id/kelas">Pilihan Kelas</NavLink>
                        </li>
                        <li className="nav-item nav-link sc-navlink">
                            <NavLink to="/id/peserta">Peserta</NavLink>
                        </li>
                        <li className="nav-item nav-link sc-navlink">
                            <NavLink to="/id/tentang">Tentang Kami</NavLink>
                        </li>
                    </ul>
                    <ul className="nav sc-navbar justify-content-end no-pd-rg">
                        <NavLink to="/id/tentang">
                            <li className="nav-item nav-link sc-navlink sc-btn1">Materi</li>
                        </NavLink>
                    </ul>
                </nav>
            </div>
        </div>
        <div className="content">
            <Route exact path="/" component={toBeranda}/>
            <Route exact path="/id/" component={Beranda}/>
            <Route path="/id/tentang" component={Tentang}/>
            <Route path="/id/kelas" component={Kelas}/>
            <Route path="/id/peserta" component={Peserta}/>
        </div>
      </HashRouter>
    );
  }
}
 
export default Main;