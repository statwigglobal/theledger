import React, { useState, useEffect } from 'react';
import EditTable from '../../shared/table/editTable';
import { useDispatch, useSelector } from 'react-redux';
import './style.scss';
import Modal from '../../shared/modal';
import InventoryPopUp from './inventorypopup';
import ExcelPopUp from './excelpopup';
import FailurePopUp from './failurepopup';
import uploadBlue from '../../assets/icons/UploadWhite.svg';
import ExportIcon from '../../assets/icons/Export.svg';
import dropdownIcon from '../../assets/icons/drop-down.svg';
import review from '../../assets/icons/review.png';
import ShipmentFailPopUp from '../neworder/shipmentFailPopUp';
import { Alert, AlertTitle } from '@material-ui/lab';

import {
  addMultipleInventories,
  setReviewinventories,
  addInventoriesFromExcel,
} from '../../actions/inventoryActions';
import { turnOn, turnOff } from '../../actions/spinnerActions';
import { getProducts, getProductsByCategory } from '../../actions/poActions';

const NewInventory = (props) => {
  const editInventories = useSelector((state) => {
    return state.reviewInventory;
  });

  const [category, setCategory] = useState([]);

  useEffect(() => {
    async function fetchData() {
      dispatch(turnOn());
      const result = await getProducts();
      const productsArray = result.map((product) => product.name);
      //console.log("result inventory",result);
      setProducts(result.map((item) => {
        return {
          value: item.name,
          label: item.name,
          ...item,
        };
      }));

      const categoryArray = result.map((product) => product.type);

      setCategory(
        categoryArray
          .filter((value, index, self) => self.indexOf(value) === index)
          .map((item) => {
            return {
              value: item,
              label: item,
            };
          }),
      );
      setBlankInventory({ ...blankInventory, products: productsArray });
      if (editInventories.length === 0) {
        setInventoryState([{ ...blankInventory, products: productsArray }]);
      } else {
        setInventoryState(editInventories);
      }

      dispatch(turnOff());
    }

    fetchData();
  }, []);

  const [openCreatedInventory, setOpenCreatedInventory] = useState(false);
  const [openFailInventory, setOpenFailInventory] = useState(false);
  const [openQuantityFailInventory, setOpenQuantityFailInventory] =
    useState(false);
  const [inventoryError, setInventoryError] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [products, setProducts] = useState([]);
  const [inventoryState, setInventoryState] = useState([]);
  const [menu, setMenu] = useState(false);
  const [openExcel, setOpenExcel] = useState(false);
  const [blankInventory, setBlankInventory] = useState({
    productName: 'Select Product',
    categories: 'Select Category',
    manufacturer: '',
    productId: '',
    quantity: '',
    manufacturingDate: '',
    expiryDate: '',
    batchNumber: '',
    serialNumber: '',
    unitofMeasure: '',
    products: [],
  });
  const closeModal = () => {
    setOpenCreatedInventory(false);
  };
  const closeExcelModal = () => {
    setOpenExcel(false);
  };

  const closeModalFail = () => {
    setOpenFailInventory(false);
  };
  const closeModalFail1 = () => {
    setOpenQuantityFailInventory(false);
  };

  var numeric = { year: 'numeric', month: 'numeric' };

  const dispatch = useDispatch();

  const inventoryFields = [
    'categories',
    'productName',
    'manufacturer',
    'quantity',
    'unitofMeasure',
    // 'manufacturingDate',
    // 'expiryDate',
    // 'batchNumber',
    // 'serialNumber',
  ];

  const month = new Date().getMonth() + 1;
  const newMonth = `0${month}`.slice(-2);
  const todayDate = newMonth + '/' + new Date().getFullYear();
  const dateValidationFields = ['expiryDate'];
  //const [validate,setValidate] = useState('')
  const expiryDateValidation = (date) => {
    let error = false;
    inventoryState.forEach((inventory) => {
      if (error) return;
      let validationVariable = inventory.expiryDate;
      let a = new Date(
        Date.parse(
          typeof validationVariable == 'string'
            ? validationVariable
            : validationVariable.toLocaleDateString(),
        ),
      ).getFullYear();
      let b = todayDate.slice(-4);
      let c = `0${
        new Date(
          Date.parse(
            typeof validationVariable == 'string'
              ? validationVariable
              : validationVariable.toLocaleDateString(),
          ),
        ).getMonth() + 1
      }`.slice(-2);
      let d = todayDate.substring(0, 2);
      if (a < b || (a == b && c <= d)) {
        setInventoryError('Check expiryDate');
        setOpenFailInventory(true);
        error = true;
      }
    });

    return error;
  };
  const checkValidationErrors = (validations) => {
    let error = false;
    inventoryState.forEach((inventory) => {
      if (error) return error;
      for (let i = 0; i < validations.length; i++) {
        let validationVariable = inventory[validations[i]];

        if (
          validationVariable.length < 1 ||
          validationVariable == 'Select Product' ||
          validationVariable == 'Select Category'
        ) {
          setInventoryError(validations[i]);
          setOpenFailInventory(true);
          error = true;
          break;
        }
      }
      if (parseInt(inventory.quantity, 10) < 1) {
        setInventoryError('Check Quantity ');
        setOpenQuantityFailInventory(true);
        error = true;
      }
    });
    return error;
  };
  const onProceedToReview = () => {
    if (checkValidationErrors(inventoryFields)) {
      return;
    } else if (expiryDateValidation(dateValidationFields)) {
      return;
    }

    //Store in reducer
    dispatch(setReviewinventories(inventoryState));

    //Redirect to review page.
    
    props.history.push('/reviewinventory');
  };

  const onAddAnotherProduct = () => {
    setInventoryState([...inventoryState, blankInventory]);
  };
  const handleInventoryChange = (index, key, value) => {
    const updatedInventoryState = JSON.parse(JSON.stringify(inventoryState));
    updatedInventoryState[index][key] = value;
    const product = products.find(
      (p) => p.name === updatedInventoryState[index]['productName'],
    );
    updatedInventoryState[index]['manufacturer'] = product?.manufacturer;
    updatedInventoryState[index]['productId'] = product?.id;
    updatedInventoryState[index]['unitofMeasure'] = product?.unitofMeasure
    
    if(key=="categories"){
      updatedInventoryState[index]['productName'] ="";
      updatedInventoryState[index]['manufacturer'] = "";
      updatedInventoryState[index]['productId'] = "";
      updatedInventoryState[index]['quantity'] = "";
      updatedInventoryState[index]['unitofMeasure'] = "";
    }
    let total = 0;
    updatedInventoryState.forEach((inv) => (total += parseInt(inv.quantity)));
    setInventoryState(updatedInventoryState);
  };

  const onRemoveRow = (index) => {
    const inventoryStateClone = JSON.parse(JSON.stringify(inventoryState));
    inventoryStateClone.splice(index, 1);
    setInventoryState(inventoryStateClone);
    let total = 0;
    inventoryStateClone.forEach((inv) => (total += parseInt(inv.quantity)));
  };

  const onCategoryChange = async (index, value) => {
    try {
      handleInventoryChange(index, 'categories', value);
    } catch (err) {
      setErrorMessage(err);
    }
  };

  return (
    <div className="Newinventory">
      <div className="d-flex justify-content-between mb-3">
        <h1 className="breadcrumb">ADD INVENTORY</h1>
        <div className="d-flex flex-column align-items-center">
          <button className="btn-primary btn mt-1" onClick={() => setMenu(!menu)}>
            <div className="d-flex  align-items-center">
              <img src={ExportIcon} width="16" height="16" className="mr-3" />
              <span>Import</span>
              <img src={dropdownIcon} width="16" height="16" className="ml-3" />
            </div>
          </button>
          {menu ? (
            <div class="menu">
              <button
                className=" btn btn-outline-info mb-2 "
                onClick={() => setOpenExcel(true)}
              >
                {' '}
                Excel
              </button>
              <button className=" btn btn-outline-info"> Other</button>
            </div>
          ) : null}
          {openExcel && (
            <Modal
              title="Import"
              close={() => closeExcelModal()}
              size="modal-md" //for other size's use `modal-lg, modal-md, modal-sm`
            >
              <ExcelPopUp
                {...props}
                onHide={closeExcelModal} //FailurePopUp
                setOpenCreatedInventory={setOpenCreatedInventory}
              />
            </Modal>
          )}
        </div>
      </div>
      <EditTable
        inventories={inventoryState}
        handleInventoryChange={handleInventoryChange}
        onRemoveRow={onRemoveRow}
        category={category}
        handleCategoryChange={onCategoryChange}
        prods={products}
      />

      <div className="d-flex justify-content-between">
        <button
          className="btn btn-white bg-white shadow-radius mt-3 font-bold"
          onClick={onAddAnotherProduct}
        >
          +<span> Add Another Product</span>
        </button>
      </div>
      <hr />

      <div className="d-flex flex-row-reverse">
      {/* <div className="total">Grand Total</div>
      <span className="value">{grandTotal}</span> */}
      <button className="btn-orange btn" onClick={onProceedToReview}>
        <img src={review} width="20" className="" />
        <span className="ml-1">Review Product</span>
      </button>
      <button 
      type="button"
      className="btn btn-white shadow-radius font-bold mr-3" 
      onClick={() => props.history.push("/inventory")}
      >Cancel
      </button>
      </div>
      {openCreatedInventory && (
        <Modal
          close={() => closeModal()}
          size="modal-sm" //for other size's use `modal-lg, modal-md, modal-sm`
        >
          <InventoryPopUp
            onHide={closeModal} //FailurePopUp
          />
        </Modal>
      )}

      {openFailInventory && (
        <Modal
          close={() => closeModalFail()}
          size="modal-sm" //for other size's use `modal-lg, modal-md, modal-sm`
        >
          <FailurePopUp
            onHide={closeModalFail} //FailurePopUp
            inventoryError={inventoryError}
          />
        </Modal>
      )}
      {openQuantityFailInventory && (
        <Modal
          close={() => closeModalFail1()}
          size="modal-sm" //for other size's use `modal-lg, modal-md, modal-sm`
        >
          <ShipmentFailPopUp
            onHide={closeModalFail1} //FailurePopUp
            shipmentError={inventoryError}
          />
        </Modal>
      )}
      {errorMessage && 
        <div className=""> <Alert severity="error"><AlertTitle>Error</AlertTitle>{errorMessage}</Alert></div>
        }
    </div>
  );
};

export default NewInventory;

/*<button className="btn-primary btn" onClick={onAddInventory}>
          {' '}
          Add Inventory
        </button>*/

/* <div className="d-flex flex-column">
      <div className="text-primary font-weight-bold">Import Inventory from Excel </div><input type='file'  class="select" onChange={setExcelFile}/>
      <button
        className="btn-primary btn  w-50 mt-2"
        onClick={uploadExcel}
      >
       <img src={uploadBlue} width="14" height="14" className="mr-2" /> <span>Upload</span>
      </button>
      </div>*/
