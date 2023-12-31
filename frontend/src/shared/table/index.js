import React from "react";
import "./style.scss";
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import Typography from "@material-ui/core/Typography";
import Tablee from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableRow from "@material-ui/core/TableRow";
import Pagination from "@material-ui/lab/Pagination";
import { formatDate } from "../../utils/dateHelper";
import dropdownIcon from "../../assets/icons/dropdown_selected.png";
import Divider from "@material-ui/core/Divider";

const Table = (props) => {
  const { inventoryDetails, inventoryCount, t } = props;
  const handlePageChange = (event, value) => {
    props.onPageChange(value);
  };
  inventoryDetails.sort(function (a, b) {
    return new Date(b.createdAt) - new Date(a.createdAt);
  });
  return (
    <div className="table">
      <div className="rTable">
        {inventoryDetails.length === 0 && (
          <div className="rTableRow pt-2 pb-2 justify-content-center text-muted shadow-none">
            {t("no_records_found")}
          </div>
        )}
        {inventoryDetails.map((inventory, index) => (
          <div className="" key={index}>
            <Accordion className="mb-3 p-0 table-inventory">
              <AccordionSummary
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                {/*<div className="rTableCell" style={{position:"relative",left:'0%', fontWeight:"600"}}>*/}
                <div
                  className="col-4 txt1 text-left"
                  style={{
                    position: "relative",
                    left: "0%",
                    fontWeight: "600",
                    fontSize: "14px",
                  }}
                >
                  <div className="d-flex flex-column txtBlue">
                    <div>{inventory.productDetails.name}</div>
                  </div>
                </div>
                <div
                  className="col-2 txt1 text-left"
                  style={{ position: "relative", left: "3%", fontSize: "14px" }}
                >
                  {inventory.productDetails.type}
                </div>
                {/* <div className="rTableCell" style={{position:"relative",left:'0%'}}>{inventory.ProductList[0].productDetails.manufacturer}</div> */}
                <div
                  className="col txt1"
                  style={{
                    position: "relative",
                    left: "10%",
                    fontSize: "14px",
                  }}
                >
                  {" "}
                  {formatDate(inventory.createdAt)}
                </div>
                <div
                  className="col txt1 text-right"
                  style={{
                    position: "relative",
                    left: "13%",
                    fontSize: "14px",
                  }}
                >
                  {inventory.inventoryQuantity || inventory.payloadData?.data?.quantityPurchased}
                  {inventory.productDetails.unitofMeasure ? (
                    inventory.productDetails.unitofMeasure.name ? (
                      <span>
                        {" ("}
                        {inventory.productDetails.unitofMeasure.name}
                        {")"}
                      </span>
                    ) : null
                  ) : null}
                </div>
                <div
                  className="rTableCell"
                  style={{
                    position: "relative",
                    left: "13%",
                    fontWeight: " 600 ",
                  }}
                >
                  {inventory.eventTypePrimary !== "ADD" ? (
                    inventory.eventTypePrimary === "RECEIVE" ? (
                      <div className="status secondary-bg bg-success">
                        {" "}
                        {t("received")}
                      </div>
                    ) : (
                      inventory.eventTypePrimary !== "BUY" ?
                      <div className='status secondary-bg bg-warning'>
                        {t("sent")}
                      </div>
                      :
                      <div className='status secondary-bg bg-warning'>
                      {t("sold")}
                    </div>
                    )
                  ) : (
                    <div className="status secondary-bg bg-primary">
                      {t("added")}
                    </div>
                  )}
                </div>
                <div
                  className=" rTableCell m-1"
                  style={{ position: "relative", left: "7.5%" }}
                >
                  <span className="drop-pad rounded-circle ">
                    <img
                      src={dropdownIcon}
                      height="8"
                      width="14"
                      alt="DropDownIcon"
                    />{" "}
                  </span>
                </div>
                {/* <button
                      className="btn btn-outline-primary fontSize200 expand"
                      type="button"
                      onClick={() => setDisplay(!display)}
                      >{display ? "SHOW LESS" : "SHOW MORE"}
                    </button> */}
              </AccordionSummary>
              <Divider />
              <AccordionDetails>
                <Typography>
                  <TableContainer>
                    <Tablee className="table-borderless lg acc-table">
                      <TableBody>
                        {inventory.eventTypePrimary === "CREATE" ||
                        inventory.eventTypePrimary === "RECEIVE" ? (
                          <div>
                            <TableRow>
                              <TableCell>
                                <div className="d-head">{t("shipment_id")}</div>
                              </TableCell>
                              <div>
                                <TableCell align="left">
                                  {inventory.shipmentDetails.id}
                                </TableCell>
                              </div>
                            </TableRow>
                            <TableRow>
                              <TableCell>
                                <div className="d-head">
                                  {inventory.eventTypePrimary === "CREATE"
                                    ? t("to_organisation")
                                    : t("from_organisation")}
                                </div>
                              </TableCell>
                              <div className="">
                                <TableCell align="left">
                                  {inventory.eventTypePrimary === "CREATE"
                                    ? inventory.receiverDetails[0].name
                                    : inventory.senderDetails[0].name}
                                </TableCell>
                              </div>
                            </TableRow>
                            <TableRow>
                              <TableCell>
                                <div className="d-head">
                                  {inventory.eventTypePrimary === "CREATE"
                                    ? t("to_location")
                                    : t("from_locations")}
                                </div>
                              </TableCell>
                              <div className="">
                                <TableCell align="left">
                                  {inventory.eventTypePrimary === "CREATE"
                                    ? inventory.receiverDetails[0].postalAddress
                                    : inventory.senderDetails[0].postalAddress}
                                </TableCell>
                              </div>
                            </TableRow>
                          </div>
                        ) : (
                          <div>
                            <TableRow>
                              <TableCell>
                                <div className="d-head">{t("mfg_date")}</div>
                              </TableCell>
                              <div className="ml-5">
                                <TableCell align="left">
                                  {formatDate(
                                    inventory.payloadData.data.products.mfgDate,
                                    "mmyyyy"
                                  )}
                                </TableCell>
                              </div>
                            </TableRow>
                            <TableRow>
                              <TableCell align="left">
                                <div className="d-head">{t("exp_date")}</div>
                              </TableCell>
                              <div className="ml-5">
                                <TableCell align="left">
                                  {formatDate(
                                    inventory.payloadData.data.products.expDate,
                                    "mmyyyy"
                                  )}
                                </TableCell>
                              </div>
                            </TableRow>
                            <TableRow>
                              <TableCell align="left">
                                <div className="d-head">{t("batch")}</div>
                              </TableCell>
                              <div className="ml-5">
                                <TableCell align="left">
                                  {
                                    inventory.payloadData.data.products
                                      .batchNumber || inventory.transactionId
                                  }
                                </TableCell>
                              </div>
                            </TableRow>
                          </div>
                        )}
                        <div
                          className="mt-3"
                          style={{
                            position: "absolute ",
                            left: "78% ",
                            bottom: "10% ",
                            width: "20% ",
                          }}
                        >
                          {inventory.eventTypePrimary === "CREATE" ||
                          inventory.eventTypePrimary === "RECEIVE" ? (
                            <button
                              type="button"
                              className="bttn-blue blue-primary"
                              onClick={() => {
                                props.history.push(
                                  `/viewshipment/${inventory.payloadData.data.id}`
                                );
                              }}
                            >
                              {t("view_shipment")}
                            </button>
                          ) : (
                            ""
                          )}
                        </div>
                        {/* <div
                          className='mt-3'
                          style={{
                            position: "absolute",
                            left: "73%",
                            bottom: "13%",
                            width: "25%",
                          }}
                        >
                          <button
                            type='button'
                            className='bttn-orange orange-warning'
                            disabled={
                              !inventory.payloadData.data.products.batchNumber
                            }
                            onClick={() => {
                              props.history.push(
                                `/productlist/${inventory.payloadData.data.products.batchNumber}`
                              );
                            }}
                          >
                            Show Product Details
                          </button>
                        </div> */}
                      </TableBody>
                    </Tablee>
                  </TableContainer>
                </Typography>
              </AccordionDetails>
            </Accordion>
          </div>
        ))}

        {inventoryCount > 0 && (
          <div className="d-flex flex-row-reverse">
            <Pagination
              showFirstButton
              showLastButton
              color="primary"
              count={Math.ceil(inventoryCount / 10)}
              onChange={handlePageChange}
            />
            <span
              className="mx-5 my-1 rounded text-dark"
              style={{ fontWeight: "400", fontSize: "14px" }}
            >
              {t("total_records")} {inventoryCount}{" "}
            </span>
          </div>
        )}
      </div>
      {/* {loadMore && (
         <button className=" btn-primary btn mr-2 float-left" onClick={onLoadMore}>Load More</button>
      )} */}
    </div>
  );
};

export default Table;
