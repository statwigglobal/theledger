import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import './style.scss';
import Table from '../../shared/table';
import TableFilter from '../../shared/advanceTableFilter';
import {
  getInventoryAnalytics
} from '../../actions/analyticsAction';
import {getProductList} from '../../actions/productActions';
import TotalInventoryAdded from '../../assets/icons/TotalInventoryAddedcopy.svg';
import currentinventory from '../../assets/icons/CurrentInventory.svg';
import Expiration from '../../assets/icons/TotalVaccinenearExpiration.svg';
import TotalVaccineExpired from '../../assets/icons/TotalVaccineExpired.svg';
import Add from '../../assets/icons/add.svg';
import user from '../../assets/icons/brand.svg';
import Package from '../../assets/icons/package.svg';
import calender from '../../assets/icons/calendar.svg';
import Status from '../../assets/icons/Status.svg';
import Quantity from '../../assets/icons/Quantity.png';
import Product from '../../assets/icons/Producttype.png';import {useDispatch, useSelector} from "react-redux";
import {getInventories, resetInventories, getInventoryDetails} from "../../actions/inventoryActions";

const Inventory = props => {
  const headers = {
    coloumn1: 'Product Name',
    coloumn2: 'Product Category',
    coloumn3: 'Manufacturer',
    coloumn4: 'Date',
    coloumn5: 'Quantity',
    coloumn6: 'Status',


    img1: <img src={Product} width="16" height="16" />,
    img2: <img src={Quantity} width="24" height="16" />,
    img3: <img src={user} width="16" height="16" />,
    img4: <img src={calender} width="16" height="16" />,
    img5: <img src={Quantity} width="24" height="16" />,
    img6: <img src={Status} width="16" height="16" />,
  };

  const tableHeaders = {
    coloumn1: 'Product Name',
    coloumn2: 'Manufacturer',
    coloumn3: 'Quantity',
  };
  const [inventoryNearExpiration, setInventoryNearExpiration] = useState('');
  const [inventoryExpired, setInventoryExpired] = useState('');
  const [productCategory, setProductCategory] = useState('');
  const [stockOut, setStockOut] = useState('');

  const [inventoriesCount, setInventoriesCount] = useState('');
  const [currentInventoriesCount, setCurrentInventoriesCount] = useState('');
  const [productsList,setProductsList] = useState([]);
  const dispatch = useDispatch();
  const colors = ["#ffbcc4", "#c1e3f2", "#ffc18c", "#ffef83",
        "#d4e7ff", "#e0b0ff", "#F1EFCE", "#D7FAF1", "#F2B6AF" ];

  const [inventoryAnalytics,setInventoryAnalytics]= useState({})
        // useEffect(() => {
        //   async function fetchData() {
        //     const result = await getInventoryAnalytics();
        //     setInventoryAnalytics(result.data.inventory);
        //   }
        //   fetchData();
        // }, []);

        const [skip, setSkip] = useState(0);
        const [limit, setLimit] = useState(10);
        const [count, setCount] = useState(0);
        const [dateFilter, setDateFilter] = useState("");
        const [productNameFilter, setProductNameFilter] = useState("");
        const [manufacturerFilter, setManufacturerFilter] = useState("");
        const [statusFilter, setStatusFilter] = useState("");

     useEffect(() => {
    async function fetchData() {
      const result = await getProductList();
      setProductsList(result.message);
      const resultAnalytics = await getInventoryAnalytics();
      console.log(resultAnalytics);
      
      setInventoryAnalytics(resultAnalytics.data.inventory);
      setInventoriesCount(
        resultAnalytics.data.inventory.totalProductsAddedToInventory
      );
      setCurrentInventoriesCount(
        resultAnalytics.data.inventory.totalProductsInInventory
      );
      setInventoryNearExpiration(
        resultAnalytics.data.inventory.batchExpiringInSixMonths
      );
      setInventoryExpired(
        resultAnalytics.data.inventory.batchExpiredLastYear
      );
      setProductCategory(
        resultAnalytics.data.inventory.totalProductCategory
      )
      setStockOut(
        resultAnalytics.data.inventory.stockOut
      )

    }
    fetchData();
  }, []);


  const onPageChange = async (pageNum) => {
    console.log("onPageChange =========>", pageNum)
    const recordSkip = (pageNum-1)*limit;
    setSkip(recordSkip);
    dispatch(getInventories(recordSkip, limit, dateFilter, productNameFilter, manufacturerFilter, statusFilter));  //(skip, limit, dateFilter, productName, productManufacturer, status)
  };

  const setDateFilterOnSelect = async (dateFilterSelected) => {
    console.log("setDateFilterOnSelect =========>", dateFilterSelected)
    setDateFilter(dateFilterSelected);
    setSkip(0);
    dispatch(getInventories(0, limit, dateFilterSelected,  productNameFilter, manufacturerFilter, statusFilter));  //(skip, limit, dateFilter, productName, productManufacturer, status)
  }

  const setInventoryStatusFilterOnSelect = async (statusFilterSelected) => {
    console.log("setInventoryStatusFilterOnSelect =========>", statusFilterSelected);
    setStatusFilter(statusFilterSelected);
    setSkip(0);
      dispatch(getInventories(0, limit, dateFilter, productNameFilter, manufacturerFilter, statusFilterSelected));  //(skip, limit, dateFilter, productName, productManufacturer, status)
  }

  const setInventoryProductNameFilterOnSelect = async (productNameFilterSelected) => {
    console.log("setInventoryProductNameFilterOnSelect =========>", productNameFilterSelected)
    setProductNameFilter(productNameFilterSelected);
    setSkip(0);
      dispatch(getInventories(0, limit, dateFilter, productNameFilterSelected, manufacturerFilter, statusFilter));  //(skip, limit, dateFilter, productName, productManufacturer, status)
  }

  const setInventoryManufacturerFilterOnSelect = async (manufacturerFilterSelected) => {
    console.log("setInventoryManufacturerFilterOnSelect =========>", manufacturerFilterSelected)
    setManufacturerFilter(manufacturerFilterSelected);
    setSkip(0);
      dispatch(getInventories(0, limit, dateFilter, productNameFilter, manufacturerFilterSelected, statusFilter));  //(skip, limit, dateFilter, productName, productManufacturer, status)
  }

  return (
    <div className="inventory">
      <div className="d-flex justify-content-between">
        <h1 className="breadcrumb">INVENTORY </h1>
        <div className="d-flex">
          <Link to="/newinventory">
            <button className="btn btn-yellow">
              <img src={Add} width="13" height="13" className="mr-2" />
              <span>Add Inventory</span>
            </button>
          </Link>
        </div>
      </div>
      <div className="row mb-4">
        <div className="col">
          <div className="panel" style={{height:'14vh'}}>
            <div className="picture truck-bg">
              <img src={TotalInventoryAdded} alt="truck" />
            </div>
            <div className="d-flex flex-column">
              <div className="title truck-text">Total Product Category</div>
              
              <div className="count truck-text">{inventoriesCount} {inventoryAnalytics.totalProductCategory}</div>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="panel" style={{height:'14vh'}}>
            <div className="picture sent-bg">
              <img src={currentinventory} alt="truck" />
            </div>
            <div className="d-flex flex-column">
              <div className="title sent-text">Product Out Of Stock</div>
              <div className="sent-text count">{currentInventoriesCount}{inventoryAnalytics.stockOut}</div>
              </div>
              </div>       
              </div>
          <div className="col">
          <div className="panel" style={{height:'14vh'}}>
            <div className="picture recived-bg">
              <img src={Expiration} alt="truck" />
            </div>
            <div className="d-flex flex-column">
              <div className="title recived-text">Batch near Expiration</div>
              <div className="tab-container">
                <div
                  className="tab-item active"
                  onMouseLeave={() =>
                    setInventoryNearExpiration(
                      inventoryAnalytics.batchExpiringInSixMonths
                    )
                  }
                  onMouseEnter={() =>
                    setInventoryNearExpiration(
                      inventoryAnalytics.batchExpiringInSixMonths
                    )
                  }
                >
                {/*6 MONTHS*/}
                </div>
                <div
                  className="tab-item"
                  onMouseLeave={() =>
                    setInventoryNearExpiration(
                      inventoryAnalytics.batchExpiringInSixMonths
                    )
                  }
                  onMouseEnter={() =>
                    setInventoryNearExpiration(
                      inventoryAnalytics.batchExpiringInThreeMonths
                    )
                  }
                >
                  {/*3 MONTHS*/}
                </div>
                <div
                  className="tab-item"
                  onMouseLeave={() =>
                    setInventoryNearExpiration(
                      inventoryAnalytics.batchExpiringInSixMonths
                      )
                  }
                  onMouseEnter={() =>
                    setInventoryNearExpiration(
                      inventoryAnalytics.batchExpiringThisMonth
                    )
                  }
                >
                  {/*THIS MONTH8*/}
                </div>
                <div
                  className="tab-item"
                  onMouseLeave={() =>
                    setInventoryNearExpiration(
                      inventoryAnalytics.batchExpiringInSixMonths
                    )
                  }
                  onMouseEnter={() =>
                    setInventoryNearExpiration(
                      inventoryAnalytics.batchExpiringThisWeek
                    )
                  }
                >
                  {/*THIS WEEK*/}
              </div>
              </div>
              <div className="recived-text count">
                {inventoryNearExpiration}
              </div>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="panel" style={{height:'14vh'}}>
            <div className="picture transit-bg">
              <img src={TotalVaccineExpired} alt="truck" />
            </div>
            <div className="d-flex flex-column">
              <div className="title transit-text">Batch Expired</div>
              <div className="tab-container">
                <div
                  className="tab-item active"
                  onMouseLeave={() =>
                    setInventoryExpired(
                      inventoryAnalytics.batchExpiredLastYear
                    )
                  }
                  onMouseEnter={() =>
                    setInventoryExpired(
                      inventoryAnalytics.batchExpiredLastYear
                    )
                  }
                >
                  {/*THIS YEAR*/}
                </div>
                <div
                  className="tab-item"
                  onMouseLeave={() =>
                    setInventoryExpired(
                      inventoryAnalytics.batchExpiredLastYear
                    )
                  }
                  onMouseEnter={() =>
                    setInventoryExpired(
                      inventoryAnalytics.batchExpiredLastMonth
                    )
                  }
                >
                  {/*THIS MONTH*/}
                </div>
                <div
                  className="tab-item"
                  onMouseLeave={() =>
                    setInventoryExpired(
                      inventoryAnalytics.batchExpiredLastYear
                    )
                  }
                  onMouseEnter={() =>
                    setInventoryExpired(
                      inventoryAnalytics.batchExpiredLastWeek
                    )
                  }
                >
                  {/*THIS WEEK*/}
                </div>
                <div
                  className="tab-item"
                  onMouseLeave={() =>
                    setInventoryExpired(
                      inventoryAnalytics.batchExpiredLastYear
                    )
                  }
                  onMouseEnter={() =>
                    setInventoryExpired(
                      inventoryAnalytics.batchExpiredToday
                    )
                  }
                >
                  {/*TODAY*/}
                </div>
              </div>
              <div className="transit-text count">{inventoryExpired}</div>
            </div>
          </div>
        </div>
      </div>
      <div className="full-width-ribben">
        <TableFilter data={headers} inventoryFilterData={props.inventoryFilterData} setInventoryProductNameFilterOnSelect={setInventoryProductNameFilterOnSelect} setInventoryManufacturerFilterOnSelect={setInventoryManufacturerFilterOnSelect}  setInventoryStatusFilterOnSelect={setInventoryStatusFilterOnSelect} setDateFilterOnSelect={setDateFilterOnSelect} fb="60%" />
      </div>
      <div className="ribben-space">
        <div className="row no-gutter">
        <div className="col-sm-12 col-xl-9 rTableHeader">
            <Table data={tableHeaders} {...props} colors={colors}inventoryCount ={props.inventoriesCount} onPageChange={onPageChange} />
          </div>
          <div className="col-sm-12 col-xl-3">
            <div className="list-container">
              <div className="d-flex justify-content-between align-items-center ml-4">
                <h4><b>Product List</b></h4>
                <Link to="/productlist/all">
                  <button className="btn btn-link mr-3"><b>View all</b></button>
                </Link>
              </div>
              <div className="row overflow">
                {productsList?.map((product, index) => (
                  <div className="col-sm-6" key={index}>
                    <div className="d-flex card flex-column align-items-center ml-4"  style={{backgroundColor: colors[index]}}>
                    <div className="round-sign">{product.productName}</div>
                      <p className="product">&nbsp;</p>
                      {/* <p className="product">{product.productName}</p> */}
                      <h3>Qty : {product.quantity}</h3>
                    </div>
                  </div>
                ))}

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Inventory;
