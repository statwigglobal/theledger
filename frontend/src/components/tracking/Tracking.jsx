import React, { useState } from "react";
import { getJourneyTrack } from "../../actions/shipmentActions";
import ChainofCustody from "./chain-of-custody/ChainofCustody";
import CurrentLocation from "./current-location/CurrentLocation";
import Tab from "./tabs/Tab";
import TrackingMap from "./tracking-map/TrackingMap";
import TrackIllustration from "../../assets/images/track.webp";
import "./Tracking.scss";

export default function Tracking() {
  const [LocationTab, setLocationTab] = useState("CHAIN");

  const [trackingID, setTrackingID] = useState();

  const [trackingData, setTrackingData] = useState();

  const handleSearch = async () => {
    try {
      let result = await getJourneyTrack(trackingID);
      if(result.status === 200) {
        setTrackingData(result.data.data);
      } else {
        throw new Error(result);
      }
    } catch(err) {
      console.log("Error while fetching track details - ", err.message);
    }
  }

  const handleKeyPress = (event) => {
    if(event.key === 'Enter') {
      handleSearch();
    }
  }

  return (
    <div className="tracking-main-layout">
      <div className="track-grid-container">
        <div className="tracking-content-area">
          <div className="tracking-header">
            <h1
              style={{ paddingBottom: "10px" }}
              className="vl-heading-bdr black f-700 mi-reset"
            >
              Track & Trace
            </h1>
            <div className="tracking-search-bar">
              <div className="mi-flex-ac">
                <input
                  type="search"
                  placeholder="Search by Tracking ID"
                  className="track-search"
                  onKeyUp={handleKeyPress}
                  onChange={(event) => setTrackingID(event.target.value)}
                />
                <i className="bx bx-search search-track-icon" onClick={handleSearch}></i>
              </div>
            </div>
          </div>
          <div className="tab-buttons">
            <Tab
              layout="button"
              LocationTab={LocationTab}
              setLocationTab={setLocationTab}
            />
          </div>
          {LocationTab === "CHAIN" && <ChainofCustody trackingData={trackingData} />}
          {LocationTab === "LOCATION" && <CurrentLocation currentLocationData={trackingData?.currentLocationData} />}
        </div>
        <div className="tracking-map-area">
          <TrackingMap LocationTab={LocationTab} trackingData={trackingData} />
        </div>
      </div>
    </div>
  );
}