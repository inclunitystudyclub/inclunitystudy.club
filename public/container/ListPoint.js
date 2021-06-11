import React, { Component } from "react";

class ListPoint extends Component {
    render() {
        return(
            <div className="row sc-listpoint">
                <div className="col-1 sc-listpoint-icon">
                    {this.props.iconListPoint}
                </div>
                <div className={`col-11 sc-listpoint-desc ${this.props.classListPoint}`}>
                    {this.props.descListPoint}
                </div>
            </div>
        );
    }
}

export default ListPoint