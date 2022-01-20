import React, { useState } from "react";
import { useDispatch } from "react-redux";
import "./styles.scss";
import { addPOsFromExcel } from "../../../actions/poActions";
import { turnOn, turnOff } from "../../../actions/spinnerActions";
import uploadBlue from "../../../assets/icons/UploadBlue.svg";
import Modal from "../../../shared/modal";
import SuccessOrderPopUp from "./SuccessOrder/SuccessOrder";
import FailPopup from "../../../shared/PopUp/failedPopUp";

const ExcelPopUp = (props) => {
  const { t } = props;
  const [excel, setExcel] = useState(null);
  const dispatch = useDispatch();
  const [openSuccesfulOrder, setopenSuccesfulOrder] = useState(false);
  const [openFailedPopup, setopenFailedPop] = useState(false);
  const [modalProps, setModalProps] = useState({});

  const setExcelFile = (evt) => {
    setExcel(evt.target.files[0]);
  };
  props.setMenu(false);
  const uploadExcel = async () => {
    let formData = new FormData();
    formData.append("excel", excel);
    dispatch(turnOn());
    const result = await addPOsFromExcel(formData);
    let arr = result.data.data;
    let notNullValues = 0;
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] != null) {
        notNullValues++;
      }
    }

    if (result && result.status === 200 && notNullValues !== 0) {
      setopenSuccesfulOrder(true);
      setModalProps({
        message: "Created Successfully!",
        OrderLength: notNullValues,
        type: "Success",
      });
    } else {
      setopenFailedPop(true);
    }
    dispatch(turnOff());
  };

  const closeModal = () => {
    setopenSuccesfulOrder(false);
    props.setOpenExcel(false);
  };
  const closeModalFailedPopUp = () => {
    setopenFailedPop(false);
  };
  return (
    <div className='excelpopup col'>
      {excel === null ? <div className='d-flex flex-column upload mb-5 ml-5'>
        <img
          src={uploadBlue}
          name='photo'
          width='50'
          height='50'
          className='mt-3'
          alt=''
        />
        <div>
          "{t("drag_drop")}" {t("your_excel_file_here")}
        </div>
        <div>{t("or")}</div>
        <div className='row'
        >
          <label htmlFor='fileE' className='mb-3 mt-3 btn btn-primary d-center' style={{
            display: "block",
            margin: "0 auto"
          }}>
            {t("select_a_file")}
          </label>

          <input
            type='file'
            id='fileE'
            style={{ visibility: "hidden" }}
            className='mb-3 excelSpace'
            onChange={setExcelFile}
          />
        </div>
      </div> :
        <UploadedFileInfo file={excel} setExcel={setExcel} />}
      <div className='row justify-content-between'>
        <div />
        <div className='row'>
          <button
            className='btn-outline-primary btn mr-3'
            onClick={props.onHide}
          >
            {t("cancel")}
          </button>
          <button className='btn-primary btn mr-4 import-disable-button' disabled={excel === null ? true : false} onClick={uploadExcel}>
            {t("import")}
          </button>
          {openSuccesfulOrder && (
            <Modal
              close={() => closeModal()}
              size='modal-sm' //for other size's use `modal-lg, modal-md, modal-sm`
            >
              <SuccessOrderPopUp
                onHide={closeModal} // onHide={closeModal} //FailurePopUp
                {...modalProps}
              />
            </Modal>
          )}
          {openFailedPopup && (
            <Modal close={() => closeModalFailedPopUp()} size='modal-sm'>
              <FailPopup onHide={closeModalFailedPopUp} />
            </Modal>
          )}
        </div>
      </div>
    </div>
  );
};

export default ExcelPopUp;


function UploadedFileInfo({ file, setExcel }) {

  const formatFileSize = (bytes, precision = 2) => {
    if (bytes === 0) { return '0 Bytes' }

    const k = 1024, sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'],
      i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(precision)) + ' ' + sizes[i];
  };

  return (
    <div className="UploadedFileInfo">
      <h4>Information about current file</h4>
      <div><strong>Name:</strong> {file?.name} </div>
      <div><strong>Size:</strong> {formatFileSize(file?.size)} </div>
      <div><strong>Type:</strong> {file?.type}</div>
      <button className="UploadedFileInfo-remove-button" onClick={() => setExcel(null)} >Remove File</button>
    </div>
  )

} 