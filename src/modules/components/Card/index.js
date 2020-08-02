import React, { Component } from 'react';

import "./Card.scss";

class Card extends Component {

    render() {
        const {
            isOdd,
            collegeImg,
            collegeInfo
        } = this.props;
        return (
            <div className={`card-wrapper ${isOdd ? 'odd-img' : ''}`}>
                <div className="card-college-img-wrapper">
                    <img src={collegeImg} />
                    <i className="card-black-layer" />
                    <span className="card-college-img-promoted">
                        <i>PROMOTED</i>
                    </span>
                    <span className="card-college-img-rating">
                        <p className="rating"><b>{collegeInfo["rating"]}</b>/5</p>
                        <p className="rating-remarks">{collegeInfo["rating_remarks"]}</p>
                    </span>
                    <div className="card-college-img-bottom">
                        {
                            collegeInfo["tags"].map((tag, index) => (
                                <span className="tag" key={index}>
                                    {tag}
                                </span>
                            ))
                        }
                        <p className="college-rank">#{collegeInfo["ranking"]}</p>
                    </div>
                </div>
                <div>
                    <div>
                        <div className="college-bottom-left-wrapper">
                            <div className="college-name-wrapper">
                                <p>{collegeInfo["college_name"]}</p>
                                <div className="college-rating">
                                    <span className={`${collegeInfo["rating"] < 1 ? 'not-rated' : ''}`}>★</span>
                                    <span className={`${collegeInfo["rating"] < 2 ? 'not-rated' : ''}`}>★</span>
                                    <span className={`${collegeInfo["rating"] < 3 ? 'not-rated' : ''}`}>★</span>
                                    <span className={`${collegeInfo["rating"] < 4 ? 'not-rated' : ''}`}>★</span>
                                    <span className={`${collegeInfo["rating"] < 5 ? 'not-rated' : ''}`}>★</span>
                                </div>
                            </div>
                            <div className="college-nearest-place-wrapper">
                                {
                                    collegeInfo["nearest_place"].map((place, index) => (
                                        <p key={index}>{place}</p>
                                    ))
                                }
                            </div>
                            {

                                collegeInfo["famous_nearest_places"] ?
                                    <div className="college-famous-nearest-place-wrapper">
                                        93% Match :
                                        <b>&nbsp; {collegeInfo["famous_nearest_places"].split(",")[0].split("from")[0]}</b>
                                        <p> from {collegeInfo["famous_nearest_places"].split(",")[0].split("from")[1]} </p>,
                                        <b>{collegeInfo["famous_nearest_places"].split(",")[1].split("from")[0]}</b>
                                        <p> from {collegeInfo["famous_nearest_places"].split(",")[1].split("from")[1]} </p>
                                    </div> : ''
                            }
                        </div>
                        <div className="college-bottom-right-wrapper">
                            <div className="college-original-fees-wrapper">
                                <del>₹ {collegeInfo["original_fees"]}</del>
                                <div className="discount">
                                    <div class="tl"></div>
                                    <div class="bl"></div>
                                    <i />
                                    {collegeInfo["discount"]}
                                </div>
                            </div>
                            <p className="discount-fees">
                                ₹ {collegeInfo["discounted_fees"]}
                            </p>
                            <p className="fee-cycle">{collegeInfo["fees_cycle"]}</p>
                        </div>
                    </div>
                    <div>
                        {

                            collegeInfo["offertext"] ?
                                <div className="college-offer-text">
                                    {collegeInfo["offertext"].split("LOGIN")[0].split("Rs")[0]}
                                    Rs <p className="price-color">{collegeInfo["offertext"].split("LOGIN")[0].split("Rs")[1].split("off")[0]}&nbsp;</p>
                                    off {collegeInfo["offertext"].split("LOGIN")[0].split("Rs")[1].split("off")[1]}
                                    Rs <p className="price-color">{collegeInfo["offertext"].split("LOGIN")[0].split("Rs")[2].split("wallet!")[0]}&nbsp;</p>
                                    wallet! {collegeInfo["offertext"].split("LOGIN")[0].split("Rs")[2].split("wallet!")[1]}
                                    <p className="login-text">LOGIN</p>
                                </div> : ''
                        }
                        <div className="college-amenties-wrapper">
                            {
                                collegeInfo["amenties"] ?
                                    collegeInfo["amenties"].map((item, index) => (
                                        <span>
                                            <p key={index}>{item}</p>
                                            <i />
                                        </span>
                                    ))
                                    : ''
                            }
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Card;
