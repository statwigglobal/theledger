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
    const isXls = evt.target.files[0].type;
    if (isXls === ('application/vnd.ms-excel') || isXls === ('application/vnd.openxmlformats-officedocument.spreadsheetml.sheet')) {
      setopenFailedPop(false);
      setExcel(evt.target.files[0]);
    } else {
      setopenFailedPop(true);
      setModalProps({
        message: t("you_can_only_upload_excel_formats"),
      });
    }
  };
  props.setMenu(false);
  const uploadExcel = async () => {
    let formData = new FormData();
    formData.append("excel", excel);
    dispatch(turnOn());
    const result = await addPOsFromExcel(formData);
    if (result && result.status === 200) {
      let arr = result.data.data;
      let notNullValues = 0;
      if (arr && arr.length > 0)
        for (let i = 0; i < arr.length; i++) {
          if (arr[i] != null) {
            notNullValues++;
          }
        }

      if (notNullValues !== 0
      ) {
        setopenSuccesfulOrder(true);
        setModalProps({
          message: `${t("created")}${t("successfully")}`,
          OrderLength: notNullValues,
          type: "Success",
        });
      }
    } else {
      setopenFailedPop(true);
      setModalProps({
        message: t("records_duplication"),
      });
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
      <div className='d-flex flex-column upload mb-5 ml-5' style={excel === null ? { height: '200px' } : { height: '220px' }}>
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
        <div className='row' style={{ position: 'relative' }}
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
            accept=".xls,.xlsx,application /vnd.openxmlformats-officedocument.spreadsheetml.sheet,application/vnd.ms-excel"
            style={{ visibility: "hidden" }}
            className='mb-3 excelSpace'
            onChange={setExcelFile}
          />
          {excel !== null && <p className="file-name">{excel?.name}</p>}
        </div>
      </div>
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
                t={t}
                onHide={closeModal} // onHide={closeModal} //FailurePopUp
                {...modalProps}
              />
            </Modal>
          )}
          {openFailedPopup && (
            <Modal close={() => closeModalFailedPopUp()} size='modal-sm'>
              <FailPopup message={modalProps.message} onHide={closeModalFailedPopUp} t={t} />
            </Modal>
          )}
        </div>
      </div>
    </div>
  );
};

export default ExcelPopUp;