import React from "react";
import "./style.scss";
import Cancel from "../../assets/icons/cancel.svg";

const ShipmentFailPopUp = (props) => {
  const { t } = props;
  return (
    <div className='shipmentpopup'>
      <div className='d-flex  flex-column align-items-center'>
        <img
          src={Cancel}
          width='60'
          height='60'
          className='mb-3'
          alt='Shipment Failed'
        />
        <div className='alert font-weight-bolder'> {t('fail')}! </div>
        <div className='font-weight-bolder error text-center'>
          ' {props.shipmentError} '
        </div>
        <div className='data'>
          {props.shipmentError === "Check deliveryDate" ||
          props.shipmentError === "Check Shipment Reference ID" ||
          props.shipmentError === "ShipmentID cannot be Empty" || 
          props.shipmentError === "Shipment has to be delivered" ||
          props.shipmentError === "Invalid ShipmentID Please Enter a Valid ShipmentID"
            ? null
            : t("cannot_be_empty")}
        </div>
        <div style = {{visibility : props.shipmentError === "ShipmentID cannot be Empty" || props.shipmentError === "Invalid ShipmentID Please Enter a Valid ShipmentID"  ? "hidden" : ''}} className='data mb-3'> {t('please') + " " + t('try_again')}</div>
        <button className='btn-primary btn' onClick={props.onHide}>
          {t('try_again')}
        </button>
      </div>
    </div>
  );
};

export default ShipmentFailPopUp;
