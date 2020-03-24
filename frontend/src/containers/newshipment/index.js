import React from "react";
import NewShipment from '../../components/newShipment';
import Header from '../../shared/header';
import Sidebar from '../../shared/sidebarMenu';

const newShipmentContainer = props => {
  return (
    <div className="container-fluid p-0">
      <Header />
      <div className="d-flex">
        <Sidebar {...props} />
        <div className="content">
          <NewShipment />
        </div>
      </div>
    </div>
  );
};

export default newShipmentContainer;

