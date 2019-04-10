import React from 'react'
import Card from '../../components/card'
import './home.css'
import Lottie from 'react-lottie'
import * as balanceData from '../../balance.json'
import ReactPlayer from 'react-player'
import { Link } from 'react-router-dom';
import './home.css';

class Home extends React.Component {

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {

    const defaultOptions = {
      loop: false,
      autoplay: true, 
      animationData: balanceData.default,
      rendererSettings: {
        preserveAspectRatio: 'xMidYMid meet',
        className: 'wrapper'
      }
    };

    const workout = "https://farm5.staticflickr.com/4866/31803217927_09ed5d7f1c_n.jpg";
    const meditate = "https://farm5.staticflickr.com/4894/32869498918_ba13761b5b_n.jpg";
    const woga = "https://farm8.staticflickr.com/7859/32869499228_243b51b331_n.jpg";

    return (
      <div className="home">

        <div className="home-section-0">
          <div className="home-container-0">
            <div className="home-element-0">
              <div className="txt-1">Find 
                <Lottie options={defaultOptions}
                />
                  </div>
                  <div className="txt-2">with your</div>
                  <div className="txt-3">body & mind.</div>
                </div>
                <div className="home-element-1">
                  <ReactPlayer
                    width="100%"
                    height="100%"
                    url="http://clips.vorwaerts-gmbh.de/big_buck_bunny.mp4"
                    playing={true}
                  />
                    </div>

                  </div>
                  <div className="home-wrapper-0">
                    <a href="#home-section-1" title="Learn more">Learn more</a>
                  </div>
                </div>

                <div className="home-section-1" id="home-section-1">
                  <div className="home-element-2">
                    A modern way of practicing spirituality.
                  </div>
                  <div className="home-element-3">
                    Search for any of the following mind-n-body balancing tools.
                  </div>
                  <div className="home-container-1">
                    <Card url={workout} title={"workout"} info={"20 min. Crossfit routines guaranteed to make you break a sweat!"}/>
                    <Card url={meditate} title={"meditate"} info={"10 min. guided meditations to help you clear your mind."}/>
                    <Card url={woga} title={"woga"} info={"Mix the two resources up to achieve balance the modern way."}/>
                  </div>
                  <div className="home-element-3">
                    Or upload your own to match your needs!
                  </div>
                  <div className="home-wrapper-0">
                    <Link to="/resources" className="active">Get Started</Link>
                  </div>
                </div>

              </div>
    );
  }
}

export default Home
