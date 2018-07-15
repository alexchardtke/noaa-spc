import React, { Component } from 'react';

export default class Headline extends Component {
  render() {
    return (
      <div className="headline-wrapper">
        <h3 className="headline-title text-center font-weight-bold">What's New...</h3>
        <ul className="headline-list">
          <li className="headline-list-item"><strong>March 30, 2018:</strong>  Interested in learning more about what is going on at the SPC? Click here for the Spring 2018 newsletter.</li>
          <li className="headline-list-item"><strong>November 1, 2017:</strong>  Effective Wednesday, November 1, 2017, SPC has a new High Resolution Ensemble Forecast version 2 (HREFv2) web page</li>
          <li className="headline-list-item"><strong>May 15, 2017:</strong>  We present a video lecture series on severe thunderstorm forecasting, a collaboration between the NOAA Storm more</li>
        </ul>
        <p>More news <a href="#headline-more">here</a></p>
      </div>
    );
  }
}
