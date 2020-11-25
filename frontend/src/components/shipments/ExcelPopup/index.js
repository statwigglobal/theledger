import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import './styles.scss';
import { addPOsFromExcel } from '../../../actions/shipmentActions';
import { turnOn, turnOff } from '../../../actions/spinnerActions';
import uploadBlue from '../../../assets/icons/UploadBlue.svg';

const ExcelPopUp = props => {
  const [excel, setExcel] = useState('');
  const dispatch = useDispatch();

  const setExcelFile = evt => {
    setExcel(evt.target.files[0]);
  };

  const uploadExcel = async () => {
    let formData = new FormData();
    formData.append('excel', excel);
    dispatch(turnOn());
    const result = await addPOsFromExcel(formData);
    debugger;
    if (result && result.status === 200) {
      console.log('success add PO');
      props.setOpenPOExcel(false);
    }
    dispatch(turnOff());
  };
  return (
    <div className="excelpopup col">
      <div className="d-flex flex-column upload mb-5">
        <img
          src={uploadBlue}
          name="photo"
          width="50"
          height="50"
          className="mt-2"
        />
        <div>"Drag and drop" your Excel file here</div>
        <div>or</div>
        <input type="file" className="mb-3" onChange={setExcelFile} />
      </div>
      <div className="row justify-content-between">
        <div />
        <div className="row">
          <button
            className="btn-outline-primary btn mr-3"
            onClick={props.onHide}
          >
            CANCEl
          </button>
          <button className="btn-primary btn mr-1" onClick={uploadExcel}>
            IMPORT
          </button>
        </div>
      </div>
    </div>
  );
};

export default ExcelPopUp;
