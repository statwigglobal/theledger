import React from 'react'
import updownarrow from '../../assets/icons/up-and-down-1.svg';
import FilterIcon from '../../assets/icons/Filter.svg';
import ExportIcon from '../../assets/icons/Export.svg';
import dropdownIcon from '../../assets/icons/drop-down.svg';
import './style.scss'
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import "react-hot-loader/patch"
const StyledMenu = withStyles({
  paper: {
    border: '1px solid #D3D4D5',
  },
})((props) => (
  <Menu
    elevation={0}
    getContentAnchorEl={null}
    anchorOrigin={{
      vertical: 'bottom',
      horizontal: 'center',
    }}
    transformOrigin={{
      vertical: 'top',
      horizontal: 'center',
    }}
    {...props}
  />
));
const StyledMenuItem = withStyles((theme) => ({
  root: {
    '&:focus': {
      /* backgroundColor: theme.palette.primary.main, */
      '& .MuiListItemIcon-root, & .MuiListItemText-primary': {
        color: theme.palette.common.white,
      },
    },
  },
}))(MenuItem);
const AdvanceTableFilter = (props) => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [statusAnchorEl, setStatusAnchorEl] = React.useState(null);
  const [toShipmentAnchorEl, setToShipmentAnchorEl] = React.useState(null);
  const [fromShipmentAnchorEl, setFromShipmentAnchorEl] = React.useState(null);
  const [shipmentIdAnchorEl, setShipmentIdAnchorEl] = React.useState(null);
  const [poDeliveryLocationAnchorEl, setPoDeliveryLocationAnchorEl] = React.useState(null);
  const [poProductNameAnchorEl, setPoProductNameAnchorEl] = React.useState(null);
  const [poOrderIdAnchorEl, setPoOrderIdAnchorEl] = React.useState(null);
  const [poFromAnchorEl, setPoFromAnchorEl] = React.useState(null);
  const [poToAnchorEl, setPoToAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const setDateFilterOnSelect = (selectedVal) => {
    props.setDateFilterOnSelect(selectedVal);
    handleClose();
  }

  const handleStatusClick = (event) => {
    setStatusAnchorEl(event.currentTarget);
  };

  const handleStatusClose = () => {
    setStatusAnchorEl(null);
  };

  const setStatusFilterOnSelect = (selectedVal) => {
    props.setStatusFilterOnSelect(selectedVal);
    handleStatusClose();
  }

  const handlePoDeliveryLocationClick = (event) => {
    setPoDeliveryLocationAnchorEl(event.currentTarget);
  };

  const handlePoDeliveryLocationClose = () => {
    setPoDeliveryLocationAnchorEl(null);
  };

  const setPoDeliveryLocationFilterOnSelect = (selectedVal) => {
    props.setLocationFilterOnSelect(selectedVal);
    handlePoDeliveryLocationClose();
  }
  const renderColumn5 = (columnData) => {
    if (columnData == "Status") {
      return (<div className="box col">
        <a className="filter-item" onClick={handleStatusClick}>
          <div className="icon mr-2">
            {props.data.img5}
          </div>
          <div className="filterTitle">{props.data.coloumn5}</div>
          <img src={updownarrow} width="16" height="16" className="ml-3" />
        </a>
        <StyledMenu
          id="customized-menu"
          anchorEl={statusAnchorEl}
          keepMounted
          open={Boolean(statusAnchorEl)}
          onClose={handleStatusClose}
        >
          <div className="d-flex flex-column align-items-center">
            <StyledMenuItem>
              <Button variant="outlined" color="primary" onClick={() => setStatusFilterOnSelect("")}>Clear</Button>
            </StyledMenuItem>
            <StyledMenuItem>
              <Button variant="outlined" color="primary" onClick={() => setStatusFilterOnSelect("SHIPPED")}>Shipped</Button>
            </StyledMenuItem>
            <StyledMenuItem>
              <Button variant="outlined" color="primary" onClick={() => setStatusFilterOnSelect("RECEIVED")}>Delivered</Button>
            </StyledMenuItem>
          </div>
        </StyledMenu>

      </div>);
    } else if (columnData == "Delivery Location") {
      return (<div className="box col">
        <a className="filter-item" onClick={handlePoDeliveryLocationClick}>
          <div className="icon mr-2">
            {props.data.img5}
          </div>
          <div className="filterTitle">{props.data.coloumn5}</div>
          <img src={updownarrow} width="16" height="16" className="ml-3" />
        </a>
        <StyledMenu
          id="customized-menu"
          anchorEl={poDeliveryLocationAnchorEl}
          keepMounted
          open={Boolean(poDeliveryLocationAnchorEl)}
          onClose={handlePoDeliveryLocationClose}
        >
          <div className="d-flex flex-column align-items-center">
            <StyledMenuItem>
              <Button variant="outlined" color="primary" onClick={() => setPoDeliveryLocationFilterOnSelect("")}>Clear</Button>
            </StyledMenuItem>
            {poDeliveryLocationAnchorEl ?
              props.poDeliveryLocationsList.map((location) => {
                return (
                  <div>
                    <StyledMenuItem>
                      <Button variant="outlined" color="primary" onClick={() => setPoDeliveryLocationFilterOnSelect(location.id)}>{location.id}</Button>
                    </StyledMenuItem>
                  </div>
                )
              }) :
              <div>
                Empty List
            </div>
            }
          </div>
        </StyledMenu>

      </div>);
    } else {
      return (<div className="box col">
        <div className="filter-item">
          <div className="icon mr-2">
            {props.data.img5}
          </div>
          <div className="filterTitle">{props.data.coloumn5}</div>
          <div className="filterAction">
            {/* <img src={updownarrow} width="9" height="9" /> */}
          </div>
        </div>
      </div>);
    }
  }

  const handleToShipmentClick = (event) => {
    setToShipmentAnchorEl(event.currentTarget);
  };

  const handleToShipmentClose = () => {
    setToShipmentAnchorEl(null);
  };

  const setToShipmentFilterOnSelect = (selectedVal) => {
    props.setToShipmentFilterOnSelect(selectedVal);
    handleToShipmentClose();
  }


  const handlePoProductNameClick = (event) => {
    setPoProductNameAnchorEl(event.currentTarget);
  };

  const handlePoProductNameClose = () => {
    setPoProductNameAnchorEl(null);
  };

  const setPoProductNameFilterOnSelect = (selectedVal) => {
    props.setProductNameFilterOnSelect(selectedVal);
    handlePoProductNameClose();
  }
  const renderColumn4 = (columnData) => {
    if (columnData == "To") {
      return (<div className="box col">
        <a className="filter-item" onClick={handleToShipmentClick}>
          <div className="icon mr-2">
            {props.data.img4}
          </div>
          <div className="filterTitle">{props.data.coloumn4}</div>
          <img src={updownarrow} width="16" height="16" className="ml-3" />
        </a>
        <StyledMenu
          id="customized-menu"
          anchorEl={toShipmentAnchorEl}
          keepMounted
          open={Boolean(toShipmentAnchorEl)}
          onClose={handleToShipmentClose}
        >
          <div className="d-flex flex-column align-items-center">
            <StyledMenuItem>
              <Button variant="outlined" color="primary" onClick={() => setToShipmentFilterOnSelect("")}>Clear</Button>
            </StyledMenuItem>
            {toShipmentAnchorEl ?
              props.supplierReceiverList.map((receiver) => {
                let receiverNameDisplay = receiver.name + " (" + receiver.id + ")";
                return (
                  <div>
                    <StyledMenuItem>
                      <Button variant="outlined" color="primary" onClick={() => setToShipmentFilterOnSelect(receiver.id)}>{receiverNameDisplay}</Button>
                    </StyledMenuItem>
                  </div>
                )
              }) :
              <div>
                Empty List
            </div>
            }
          </div>
        </StyledMenu>
      </div>);
    } else if (columnData == "Product") {
      return (<div className="box col">
        <a className="filter-item" onClick={handlePoProductNameClick}>
          <div className="icon mr-2">
            {props.data.img4}
          </div>
          <div className="filterTitle">{props.data.coloumn4}</div>
          <img src={updownarrow} width="16" height="16" className="ml-3" />
        </a>
        <StyledMenu
          id="customized-menu"
          anchorEl={poProductNameAnchorEl}
          keepMounted
          open={Boolean(poProductNameAnchorEl)}
          onClose={handlePoProductNameClose}
        >
          <div className="d-flex flex-column align-items-center">
            <StyledMenuItem>
              <Button variant="outlined" color="primary" onClick={() => setPoProductNameFilterOnSelect("")}>Clear</Button>
            </StyledMenuItem>
            {poProductNameAnchorEl ?
              props.poProductsList.map((product) => {
                // let productNameDisplay = product.name + " (" + product.id + ")";
                return (
                  <div>
                    <StyledMenuItem>
                      <Button variant="outlined" color="primary" onClick={() => setPoProductNameFilterOnSelect(product.id)}>{product.id}</Button>
                    </StyledMenuItem>
                  </div>
                )
              }) :
              <div>
                Empty List
            </div>
            }
          </div>
        </StyledMenu>
      </div>);
    } else {
      return (<div className="box col">
        <div className="filter-item">
          <div className="icon mr-2">
            {props.data.img4}
          </div>
          <div className="filterTitle">{props.data.coloumn4}</div>
          <div className="filterAction">
            {/* <img src={updownarrow} width="9" height="9" /> */}
          </div>
        </div>
      </div>);
    }
  }

  const handleFromShipmentClick = (event) => {
    setFromShipmentAnchorEl(event.currentTarget);
  };

  const handleFromShipmentClose = () => {
    setFromShipmentAnchorEl(null);
  };

  const setFromShipmentFilterOnSelect = (selectedVal) => {
    props.setFromShipmentFilterOnSelect(selectedVal);
    handleFromShipmentClose();
  }


  const handlePoOrderIdClick = (event) => {
    setPoOrderIdAnchorEl(event.currentTarget);
  };

  const handlePoOrderIdClose = () => {
    setPoOrderIdAnchorEl(null);
  };

  const setPoOrderIdFilterOnSelect = (selectedVal) => {
    props.setOrderIdNameFilterOnSelect(selectedVal);
    handlePoOrderIdClose();
  }
  const renderColumn3 = (columnData) => {
    if (columnData == "From") {
      return (<div className="box col">
        <a className="filter-item" onClick={handleFromShipmentClick}>
          <div className="icon mr-2">
            {props.data.img3}
          </div>
          <div className="filterTitle">{props.data.coloumn3}</div>
          <img src={updownarrow} width="16" height="16" className="ml-3" />
        </a>
        <StyledMenu
          id="customized-menu"
          anchorEl={fromShipmentAnchorEl}
          keepMounted
          open={Boolean(fromShipmentAnchorEl)}
          onClose={handleFromShipmentClose}
        >
          <div className="d-flex flex-column align-items-center">
            <StyledMenuItem>
              <Button variant="outlined" color="primary" onClick={() => setFromShipmentFilterOnSelect("")}>Clear</Button>
            </StyledMenuItem>
            {fromShipmentAnchorEl ?
              props.supplierReceiverList.map((supplier) => {
                let supplierNameDisplay = supplier.name + " (" + supplier.id + ")";
                return (
                  <div>
                    <StyledMenuItem>
                      <Button variant="outlined" color="primary" onClick={() => setFromShipmentFilterOnSelect(supplier.id)}>{supplierNameDisplay}</Button>
                    </StyledMenuItem>
                  </div>
                )
              }) :
              <div>
                Empty List
            </div>
            }
          </div>
        </StyledMenu>

      </div>);
    } else if (columnData == "Order ID") {
      return (<div className="box col">
        <a className="filter-item" onClick={handlePoOrderIdClick}>
          <div className="icon mr-2">
            {props.data.img3}
          </div>
          <div className="filterTitle">{props.data.coloumn3}</div>
          <img src={updownarrow} width="16" height="16" className="ml-3" />
        </a>
        <StyledMenu
          id="customized-menu"
          anchorEl={poOrderIdAnchorEl}
          keepMounted
          open={Boolean(poOrderIdAnchorEl)}
          onClose={handlePoOrderIdClose}
        >
          <div className="d-flex flex-column align-items-center">
            <StyledMenuItem>
              <Button variant="outlined" color="primary" onClick={() => setPoOrderIdFilterOnSelect("")}>Clear</Button>
            </StyledMenuItem>
            {poOrderIdAnchorEl ?
              props.poOrderIdList.map((order) => {
                return (
                  <div>
                    <StyledMenuItem>
                      <Button variant="outlined" color="primary" onClick={() => setPoOrderIdFilterOnSelect(order.id)}>{order.id}</Button>
                    </StyledMenuItem>
                  </div>
                )
              }) :
              <div>
                Empty List
            </div>
            }
          </div>
        </StyledMenu>
      </div>);
    } else {
      return (<div className="box col">
        <div className="filter-item">
          <div className="icon mr-2">
            {props.data.img4}
          </div>
          <div className="filterTitle">{props.data.coloumn3}</div>
          <div className="filterAction">
            {/* <img src={updownarrow} width="9" height="9" /> */}
          </div>
        </div>
      </div>);
    }
  }

  const handleShipmentIdClick = (event) => {
    setShipmentIdAnchorEl(event.currentTarget);
  };

  const handleShipmentIdClose = () => {
    setShipmentIdAnchorEl(null);
  };

  const setShipmentIdFilterOnSelect = (selectedVal) => {
    props.setShipmentIdFilterOnSelect(selectedVal);
    handleShipmentIdClose();
  }


  const handlePoToClick = (event) => {
    setPoToAnchorEl(event.currentTarget);
  };

  const handlePoToClose = () => {
    setPoToAnchorEl(null);
  };

  const setPoToFilterOnSelect = (selectedVal) => {
    props.setFromToFilterOnSelect(selectedVal);
    handlePoToClose();
  }

  const handlePoFromClick = (event) => {
    setPoFromAnchorEl(event.currentTarget);
  };

  const handlePoFromClose = () => {
    setPoFromAnchorEl(null);
  };

  const setPoFromFilterOnSelect = (selectedVal) => {
    props.setFromToFilterOnSelect(selectedVal);
    handlePoFromClose();
  }
  const renderColumn1 = (columnData) => {
    if (columnData == "Shipment ID") {
      return (<div className="box col">
        <a className="filter-item" onClick={handleShipmentIdClick}>
          <div className="icon mr-2">
            {props.data.img1}
          </div>
          <div className="filterTitle">{props.data.coloumn1}</div>
          <img src={updownarrow} width="16" height="16" className="ml-3" />
        </a>
        <StyledMenu
          id="customized-menu"
          anchorEl={shipmentIdAnchorEl}
          keepMounted
          open={Boolean(shipmentIdAnchorEl)}
          onClose={handleShipmentIdClose}
        >
          <div className="d-flex flex-column align-items-center">
            <StyledMenuItem>
              <Button variant="outlined" color="primary" onClick={() => setShipmentIdFilterOnSelect("")}>Clear</Button>
            </StyledMenuItem>
            {shipmentIdAnchorEl ?
              props.shipmentIdList.map((shipment) => {
                return (
                  <div>
                    <StyledMenuItem>
                      <Button variant="outlined" color="primary" onClick={() => setShipmentIdFilterOnSelect(shipment.id)}>{shipment.id}</Button>
                    </StyledMenuItem>
                  </div>
                )
              }) :
              <div>
                Empty List
            </div>
            }
          </div>
        </StyledMenu>
      </div>);
    } else if (columnData == "To") {
      return (<div className="box col">
        <a className="filter-item" onClick={handlePoToClick}>
          <div className="icon mr-2">
            {props.data.img1}
          </div>
          <div className="filterTitle">{props.data.coloumn1}</div>
          <img src={updownarrow} width="16" height="16" className="ml-3" />
        </a>
        <StyledMenu
          id="customized-menu"
          anchorEl={poToAnchorEl}
          keepMounted
          open={Boolean(poToAnchorEl)}
          onClose={handlePoToClose}
        >
          <div className="d-flex flex-column align-items-center">
            <StyledMenuItem>
              <Button variant="outlined" color="primary" onClick={() => setPoToFilterOnSelect("")}>Clear</Button>
            </StyledMenuItem>
            {poToAnchorEl ?
              props.poOrganisationsList.map((org) => {
                let orgNameDisplay = org.name + " (" + org.id + ")";
                return (
                  <div>
                    <StyledMenuItem>
                      <Button variant="outlined" color="primary" onClick={() => setPoToFilterOnSelect(org.id)}>{orgNameDisplay}</Button>
                    </StyledMenuItem>
                  </div>
                )
              }) :
              <div>
                Empty List
            </div>
            }
          </div>
        </StyledMenu>
      </div>);
    } else if (columnData == "From") {
      return (<div className="box col">
        <a className="filter-item" onClick={handlePoFromClick}>
          <div className="icon mr-2">
            {props.data.img1}
          </div>
          <div className="filterTitle">{props.data.coloumn1}</div>
          <img src={updownarrow} width="16" height="16" className="ml-3" />
        </a>
        <StyledMenu
          id="customized-menu"
          anchorEl={poFromAnchorEl}
          keepMounted
          open={Boolean(poFromAnchorEl)}
          onClose={handlePoFromClose}
        >
          <div className="d-flex flex-column align-items-center">
            <StyledMenuItem>
              <Button variant="outlined" color="primary" onClick={() => setPoFromFilterOnSelect("")}>Clear</Button>
            </StyledMenuItem>
            {poFromAnchorEl ?
              props.poOrganisationsList.map((org) => {
                let orgNameDisplay = org.name + " (" + org.id + ")";
                return (
                  <div>
                    <StyledMenuItem>
                      <Button variant="outlined" color="primary" onClick={() => setPoFromFilterOnSelect(org.id)}>{orgNameDisplay}</Button>
                    </StyledMenuItem>
                  </div>
                )
              }) :
              <div>
                Empty List
            </div>
            }
          </div>
        </StyledMenu>
      </div>);
    } else {
      return (<div className="box col">
        <div className="filter-item">
          <div className="icon mr-2">
            {props.data.img4}
          </div>
          <div className="filterTitle">{props.data.coloumn1}</div>
          <div className="filterAction">
            {/* <img src={updownarrow} width="9" height="9" /> */}
          </div>
        </div>
      </div>);
    }
  }

  return (
    <div className="filter">
      <div className="d-flex justify-content-between">
        <div className="row" style={{ flexBasis: props.fb }}>
          {/* <div className="box col">
            <div className="filter-item">
              <div className="icon mr-2">
                {props.data.img1}
              </div>
              <div className="filterTitle">{props.data.coloumn1}</div>
              <div className="filterAction"> */}
          {/* <img src={updownarrow} width="9" height="9" /> */}
          {/* </div>
            </div>
          </div> */}
          {props.data.img1 ?
            renderColumn1(props.data.coloumn1)
            : null}
          <span className="divider" />
          <div className="box col">
            <div className="filter-item">
              <div className="icon mr-2">
                {props.data.img2}
              </div>
              <div className="filterTitle">{props.data.coloumn2}</div>
              <div className="filterAction">
                {/* <img src={updownarrow} width="9" height="9" /> */}
              </div>
            </div>
          </div>
          <span className="divider" />

          {/* <div className="box col">
            <div className="filter-item">
              <div className="icon mr-2">
                {props.data.img3}
              </div>
              <div className="filterTitle">{props.data.coloumn3}</div>
              <div className="filterAction"> */}
          {/* <img src={updownarrow} width="9" height="9" /> */}
          {/* </div>
            </div>
          </div> */}
          {props.data.img3 ?
            renderColumn3(props.data.coloumn3)
            : null}
          {props.data.img4 ? <span className="divider" /> : null}
          {props.data.img4 ?
            // <div className="box col">
            //   <div className="filter-item">
            //     <div className="icon mr-2">
            //       {props.data.img4}
            //     </div>
            //     <div className="filterTitle">{props.data.coloumn4}</div>
            //     <div className="filterAction">
            //       {/* <img src={updownarrow} width="9" height="9" /> */}
            //     </div>
            //   </div>
            // </div> 
            renderColumn4(props.data.coloumn4)
            : null}
          {props.data.img5 ? <span className="divider" /> : null}
          {props.data.img5 ?
            // <div className="box col">
            //   <div className="filter-item">
            //       <div className="icon mr-2">
            //         {props.data.img5}
            //       </div>
            //       <div className="filterTitle">{props.data.coloumn5}</div>
            //     <div className="filterAction">
            //       {/* <img src={updownarrow} width="9" height="9" /> */}
            //     </div>
            //   </div>
            // </div> 
            renderColumn5(props.data.coloumn5)
            : null}
        </div>
        <div className="">
          <div className="box col">
            {/* <button className="btn btn-md btn-blue mr-2">
            <div className="d-flex align-items-center">
              <img src={FilterIcon} width="16" height="16" className="mr-3" />
              <span className="text">Filter</span>
              <img src={dropdownIcon} width="16" height="16" className="ml-3" />
            </div>
          </button> */}
            <button
              className="btn btn-md btn-blue mr-2"
              onClick={handleClick}>
              <div className="d-flex align-items-center">
                <img src={FilterIcon} width="16" height="16" className="mr-3" />
                <span className="text">Filter</span>
                <img src={dropdownIcon} width="16" height="16" className="ml-3" />
              </div>
            </button>
            <StyledMenu
              id="customized-menu"
              anchorEl={anchorEl}
              keepMounted
              open={Boolean(anchorEl)}
              onClose={handleClose}
            >
              <div className="d-flex flex-column align-items-center">
                <StyledMenuItem>
                  <Button variant="outlined" color="primary" onClick={() => setDateFilterOnSelect("today")}>Today</Button>
                </StyledMenuItem>
                <StyledMenuItem>
                  <Button variant="outlined" color="primary" onClick={() => setDateFilterOnSelect("week")}>This Week</Button>
                </StyledMenuItem>
                <StyledMenuItem>
                  <Button variant="outlined" color="primary" onClick={() => setDateFilterOnSelect("month")}>This Month</Button>
                </StyledMenuItem>
                <StyledMenuItem>
                  <Button variant="outlined" color="primary" onClick={() => setDateFilterOnSelect("threeMonth")}>Last 3 Months</Button>
                </StyledMenuItem>
                <StyledMenuItem>
                  <Button variant="outlined" color="primary" onClick={() => setDateFilterOnSelect("sixMonth")}>Last 6 Months</Button>
                </StyledMenuItem>
                <StyledMenuItem>
                  <Button variant="outlined" color="primary" onClick={() => setDateFilterOnSelect("year")}>This Year</Button>
                </StyledMenuItem>
              </div>
            </StyledMenu>
            <button className="btn btn-md btn-main-blue">
              <div className="d-flex  align-items-center">
                <img src={ExportIcon} width="16" height="16" className="mr-3" />
                <span>Export</span>
                <img src={dropdownIcon} width="16" height="16" className="ml-3" />
              </div>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
export default AdvanceTableFilter;
