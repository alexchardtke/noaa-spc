import React, { Component } from 'react';

export default class MapTable extends Component {
  render() {

    return (
      <div className="map-table-wrapper">
        <table className="map-table table table-bordered">
          <thead>
            <tr className="map-row-headers">
              <th className="hazard" scope="col">Hazard</th>
              <th className="day" scope="col">Sun (7-15)</th>
              <th className="day" scope="col">Mon (7-16)</th>
              <th className="day" scope="col">Tue (7-17)</th>
              <th className="day" scope="col">Wed (7-18)</th>
              <th className="day" scope="col">Thu (7-19)</th>
              <th className="day" scope="col">Fri (7-20)</th>
              <th className="day" scope="col">Sat (7-21)</th>
              <th className="day" scope="col">Sun (7-22)</th>
            </tr>
          </thead>
          <tbody>
            <tr className="map-row-severe">
              <th className="severe" scope="row">Severe</th>
              <td className="slight">Slight</td>
              <td className="marginal">Marginal</td>
              <td className="marginal">Marginal</td>
              <td className="">No Area</td>
              <td className="">No Area</td>
              <td className="">No Area</td>
              <td className="">No Area</td>
              <td className="">No Area</td>
            </tr>
            <tr className="map-row-fire">
              <th className="fire" scope="row">Fire</th>
              <td className="critical">Critical</td>
              <td className="isoDryT">Iso DryT</td>
              <td className="">No Area</td>
              <td className="">No Area</td>
              <td className="">No Area</td>
              <td className="">No Area</td>
              <td className="">No Area</td>
              <td className="">No Area</td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}
