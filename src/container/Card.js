import React, { Component } from "react";
import { Icon, InlineIcon } from '@iconify/react';
import calendarAlt from '@iconify/icons-uil/calendar-alt';
import clockIcon from '@iconify/icons-uil/clock';
import angleRightB from '@iconify/icons-uil/angle-right-b';

class Card extends Component {
    render() {
        return(
            <div className="col-md-4 col-mx-12 sc-card no-pd sc-card-box">
                <div className="sc-card-thumb" style={{backgroundImage: "url(" + this.props.CardThumb + ")"}}>
                    {/* This is a Card Thumbnail for Bidang Kelas Studi */}
                </div>
                <div className="sc-card-content">
                    <h4>
                        {this.props.CardNameBidKel}
                    </h4>
                    <p className="mg-bt-0-4rem">
                        <Icon icon={calendarAlt} style={{color: '#fecd48', fontSize: '30px'}} />
                        <text className="sc-card-content-text">Hari {this.props.CardJadwal}</text>
                    </p>
                    <p className="no-mg">
                        <Icon icon={clockIcon} style={{color: '#fecd48', fontSize: '30px'}} />
                        <text className="sc-card-content-text">{this.props.CardWaktu} s/d Selesai</text>
                    </p>
                </div>
                <div className="sc-card-btn">
                    <text>{this.props.CardBtn}<section><Icon icon={angleRightB}/></section></text>
                </div>
            </div>
        );
    }
}

export default Card;