import React from "react";
import "./style.scss";
import totalshipments from "../../assets/icons/TotalShipmentsCompleted.svg";
import totalinventory from "../../assets/icons/TotalInventoryAdded.svg";
import currentshipment from "../../assets/icons/CurrentShipmentInTransit.svg";
import Totalshipments from "../../assets/icons/TotalShipments.svg";
import shipmentsdelayed from "../../assets/icons/TotalShipmentsDelayed.svg";

const OverViewAnalytic = () => {
  return (
    <div className='containerAnalytic'>
      <div className='box1'>
        <div id='circle'>
          <img id='car1' src={totalshipments} alt='Total Shipments Completed' />
        </div>
        <div id='text1'>Total Shipments Completed</div>
        <div id='text2'>1.3 M</div>
        <div id='text3'>This Year</div>
      </div>

      <div className='box1'>
        <div id='circle'>
          {" "}
          <img id='car3' src={totalinventory} alt='Total Inventory' />
        </div>
        <div id='text1'>Total Inventory Added</div>
        <div id='text4'>5.4 M</div>
        <div id='text3'>This Year</div>
      </div>

      <div className='box1'>
        <div id='circle'>
          {" "}
          <img id='car1' src={currentshipment} alt='Current Shipments' />{" "}
        </div>
        <div id='text1'>Current Shipment in transit</div>
        <div id='text5'>53</div>
        <div id='text8'>Today</div>
      </div>

      <div className='box1'>
        <div id='circle'>
          {" "}
          <img id='car1' src={Totalshipments} alt='Total Shipments' />{" "}
        </div>
        <div id='text1'>Total Shipments</div>
        <div id='text6'>42</div>
        <div id='text9'>Today</div>
      </div>

      <div className='box1'>
        <div id='circle'>
          {" "}
          <img
            id='car1'
            src={shipmentsdelayed}
            alt='Total Shipments Delayed'
          />{" "}
        </div>
        <div id='text1'>Total Shipments Delayed</div>
        <div id='text7'>32</div>
        <div id='text10'>This Month</div>
      </div>
    </div>
  );
};

export default OverViewAnalytic;
