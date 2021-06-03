import React, { useState } from "react";
import './style.scss';
import Checked from "../../../../assets/icons/checked.svg";
const SuccessOrderPopUp = (props) => {
  console.log(props);
  return (
    <div className="inventorypopup">
      <div className="d-flex  flex-column align-items-center">
        <img src={Checked} width='60' height='60' className="mb-3" />
        <div className="alert" >
         <b> Success!</b>
        </div>
        <div className="data">
        New Orders has been Created
        </div>
        <div className="data mb-4">
         Successfully!
        </div>
         <div className="data mb-4">Total Orders-<b>{props.OrderLength}</b></div>
        <button className="btn-primary btn" onClick={props.onHide}>OK</button>
      </div>
    </div>
  );
};

export default SuccessOrderPopUp;


