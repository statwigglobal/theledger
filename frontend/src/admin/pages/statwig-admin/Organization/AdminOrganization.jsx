import React, { useState, useEffect, useRef } from "react";
import "./AdminOrganization.css";
import AnalyticsCard from "../../../common/AnalyticsCard/AnalyticsCard";
import OrganizationTable from "./OrganizationTable/OrganizationTable";
import AddOrganization from "../../../components/AddOrganization/AddOrganization";
import { Dialog, DialogContent } from "@mui/material";
import StatwigHeader from "../../../shared/Header/StatwigHeader/StatwigHeader";
import { useDispatch, useSelector } from "react-redux";
import { getOrgAnalytics } from "../../../actions/organisationActions";
import { useHistory } from "react-router";
import UploadPopup from "../../../common/UploadPopup/UploadPopup";

let useClickOutside = (handler) => {
  let domNode = useRef();

  useEffect(() => {
    let maybeHandler = (event) => {
      if (!domNode.current.contains(event.target)) {
        handler();
      }
    };

    document.addEventListener("mousedown", maybeHandler);

    return () => {
      document.removeEventListener("mousedown", maybeHandler);
    };
  });

  return domNode;
};

export default function AdminOrganization(props) {
  const history = useHistory();
  if(props.user.type !== "CENTRAL_AUTHORITY") {
    history.push("/overview");
  }

  const [ButtonOpen, setButtonOpen] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getOrgAnalytics());
  }, [dispatch]);

  const { orgAnalytics } = useSelector((state) => state.organisationReducer);
  const { totalCount, activeCount, inactiveCount } = orgAnalytics;

  let domNode = useClickOutside(() => {
    setButtonOpen(false);
  });

  const [open, setOpen] = React.useState(false);
  const [Importopen, setImportOpen] = React.useState(false);
  const [fullWidth] = React.useState(true);
  const [maxWidth] = React.useState("md");
  const [smallWidth] = React.useState("sm");

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleImportClickOpen = () => {
    setImportOpen(true);
  };

  const handleImportClose = () => {
    setImportOpen(false);
  };
  return (
    <>
      <StatwigHeader />
      <section className="admin-page-layout">
        <div className="admin-container">
          <div className="admin-organization-container admin-section-space">
            <div className="tiles-three-column-layout">
              <AnalyticsCard
                layout="type4"
                icon="fa-building"
                value={totalCount}
                valueTitle="Total Number of Organization"
                bgColor="analytic-bg-1"
                textColor="analytic-text-1"
              />
              <AnalyticsCard
                layout="type4"
                icon="fa-building"
                value={activeCount}
                valueTitle="Active Organization"
                bgColor="analytic-bg-2"
                textColor="analytic-text-2"
              />
              <AnalyticsCard
                layout="type4"
                icon="fa-building"
                value={inactiveCount}
                valueTitle="In Active Organization"
                bgColor="analytic-bg-3"
                textColor="analytic-text-3"
              />
            </div>
            <div className="organization-table-container">
              <div className="organization-table-header-area">
                <div className="table-search-bar">
                  <i className="fa-solid fa-magnifying-glass"></i>
                  <input type="text" placeholder="Search" />
                </div>
                <div className="table-actions-area">
                  <div className="table-action-icon">
                    <i className={`fa-solid fa-power-off vl-disabled`}></i>
                  </div>
                  <div className="table-action-icon">
                    <i className={`fa-solid fa-trash-can vl-disabled`}></i>
                  </div>
                  <div className="table-dropdown-button" ref={domNode}>
                    <button
                      className="vl-btn vl-btn-alt vl-btn-primary"
                      // onClick={() => setButtonOpen(!ButtonOpen)}
                      onClick={handleClickOpen}
                    >
                      Add Organization
                    </button>

                    <div
                      className={`button-dropdown ${ButtonOpen && "active"}`}
                    >
                      <div
                        className="btn-dropdown-card"
                        onClick={handleImportClickOpen}
                      >
                        <i className="fa-solid fa-upload"></i>
                        <p className="vl-note f-500">Import Organization</p>
                      </div>
                      <div
                        className="btn-dropdown-card"
                        onClick={handleClickOpen}
                      >
                        <i className="fa-solid fa-plus"></i>
                        <p className="vl-note f-500">Add Organization</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <OrganizationTable />
            </div>
          </div>
        </div>
        <Dialog
          fullWidth={fullWidth}
          maxWidth={maxWidth}
          open={open}
          onClose={handleClose}
        >
          <DialogContent sx={{ padding: "0rem !important" }}>
            <AddOrganization handleClose={handleClose} />
          </DialogContent>
        </Dialog>

        <Dialog
          fullWidth={fullWidth}
          maxWidth={smallWidth}
          open={Importopen}
          onClose={handleImportClose}
        >
          <DialogContent sx={{ padding: "0rem !important" }}>
            <UploadPopup handleClose={handleImportClose} />
          </DialogContent>
        </Dialog>
      </section>
    </>
  );
}
