import React, { Component } from 'react';

import './HomePage.scss';
import Card from '../../components/Card';
import evenImg from "../../../img/college_01.jpg";
import oddImg from "../../../img/college_02.jpg";
import colleges from "../../../models/colleges.json";


class HomePage extends Component {

  constructor(props) {
    super(props);
    this.state = {
      pageNo: 1
    }
  }

  componentDidMount() {
    // Infinite Scroller
    window.addEventListener('scroll', this.listenToScroll);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.listenToScroll);
  }

  listenToScroll = () => {
    const {
      pageNo,
    } = this.state;
    const body = document.body;
    const html = document.documentElement;
    const docHeight = Math.max(body.scrollHeight, body.offsetHeight, html.clientHeight,  html.scrollHeight, html.offsetHeight);
    if ((window.innerHeight + window.pageYOffset) >= (docHeight - 100)) {
        if (pageNo * 10 >= colleges.length) {
          window.removeEventListener('scroll', this.listenToScroll);
        }
        this.setState({ pageNo: pageNo + 1});
    }
  }

  render() {
    const {
      pageNo
    } = this.state;
    return (
      <div id="page-wrapper">
        <p className="page-title">Colleges in North India</p>
        <div className="college-list-wrapper">
          {
            colleges && (colleges.slice(0, pageNo * 10)).map((val, index) => (
              <Card
                key={index}
                isOdd={index % 2 == 0 ? 0 : 1}
                collegeImg={index % 2 == 0 ? evenImg : oddImg}
                collegeInfo={val}
              />
            ))
          }
        </div>
      </div>
    )
  }
}

export default HomePage;
