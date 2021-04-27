import React, { Component } from "react";
import { Icon, InlineIcon } from '@iconify/react';
import angleRightB from '@iconify/icons-uil/angle-right-b';

class Btn extends Component{
    render() {
        return(
            <a className={this.props.btnClass}>{this.props.btnContent}<text><Icon icon={angleRightB}/></text></a>
        );
    }
}

export default Btn;