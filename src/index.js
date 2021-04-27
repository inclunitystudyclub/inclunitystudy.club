import React from "react";
import ReactDOM from "react-dom";
import Main from "./Main";
import "./style.css";
import "./mobStyle.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import WebFont from 'webfontloader';

WebFont.load({
  google: {
    families: ['Manrope:200,300,400,500,600,700,800']
  }
});
 
ReactDOM.render(
  <Main/>, 
  document.getElementById("root")
);