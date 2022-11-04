import React from "react";
import AnalyticTiles from "../../shared/stats-tile/AnalyticTiles";
import Filterbar from "./filterbar/Filterbar";
import "./LastmileCenteral.css";
import CenteralStatsTable from "./stats-table/CenteralStatsTable";

export default function LastmileCenteral() {
  return (
    <div className="LastmileCenteral--Grid-layout">
      <div className="LastmileCenteral--table-wrapper">
        <div className="Lastmile--pageHeader">
          <h1
            style={{ paddingBottom: "10px" }}
            className="vl-heading-bdr black f-700 mi-reset"
          >
            LastMile
          </h1>
          <button className="vl-btn vl-btn-sm vl-btn-primary">
            <span>
              <i class="fa-solid fa-file-export"></i>
            </span>{" "}
            Export
          </button>
        </div>
        <div className="LastmileCenteral--Stats-filters">
          <AnalyticTiles
            layout="2"
            variant="1"
            title="Total Number of Units Utilized"
            stat="320"
            link="/units"
          />

          <AnalyticTiles
            layout="2"
            variant="2"
            title="No. of Beneficiaries Vaccinated so far"
            stat="1220"
            link="/units"
          />

          <AnalyticTiles
            layout="2"
            variant="3"
            title="No. of Beneficaries Vaccinated today"
            stat="45"
            link="/units"
          />
        </div>
        <CenteralStatsTable />
      </div>
      <div className="LastmileCenteral--filter-wrapper">
        <Filterbar />
      </div>
    </div>
  );
}
