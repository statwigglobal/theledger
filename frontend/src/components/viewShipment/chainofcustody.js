import React, { useEffect, useState } from "react";
import "./style.scss";
import { useSelector } from "react-redux";
import traceDrop from "../../assets/icons/traceDrop.png";
import Down from "../../assets/icons/up.png";
import { config } from "../../config";

const ChainOfCustody = (props) => {
  const configObject = config();
  // const [imageUrl,setImageUrl] = useState(configObject.getImage);
  const imageUrl = configObject.getImage;
  const list = [];

  for (const [i, image] of props.imagesData.entries()) {
    list.push(
      <img
        className="mr-3"
        height="150"
        width="150"
        src={imageUrl + image}
      ></img>
    );
    if (i == 1) break;
  }

  const [op, setOp] = useState("");
  console.log("From View Shipment");
  console.log(props.imagesData);
  const shipmentData = props.shipments[0];
  console.log("Shipment Data");
  console.log(shipmentData);
  const profile = useSelector((state) => {
    return state.user;
  });
  return Object.keys(props.shipments).length === 0 || !props.shipments ? (
    <div className="row panel justify-content-between">N/A</div>
  ) : (
    <div>
      {props.shipments[0].shipmentUpdates?.map((custody, index) =>
        index == 0 ? (
          <div className="row  mb-3">
            <div></div>
            <div className="big-dot bg-info ml-4"></div>
            <div className="col">
              <div className="color mb-3">
                {custody.status === "CREATED" ? "SHIPPED" : "Shipped"}
              </div>
              <div className="col panel  chain chainpanle">
                <div className="row justify-content-between">
                  <div className="col">
                    <div>
                      <strong>
                        Shipment{" "}
                        {custody.status === "CREATED" ? "Shipped" : "SHIPPED"}
                      </strong>
                    </div>
                    <h6 className="poheads potext mt-3 mb-3">From</h6>
                    <div className=" d-flex flex-row p-1">
                      <span class="w-75  text-secondary">
                        Organisation Name{" "}
                      </span>
                      <span class="w-75">{shipmentData.supplier.org.name}</span>
                    </div>
                    <div className=" d-flex flex-row p-1">
                      <span class="w-75 text-secondary">
                        Organisation Location{" "}
                      </span>
                      <span class="w-75 ">
                        {shipmentData.supplier.warehouse.postalAddress}
                      </span>
                    </div>
                    <h6 className="poheads potext mt-3 mb-3">To</h6>

                    <div className=" d-flex flex-row p-1">
                      <span class="w-75 text-secondary">
                        {" "}
                        Organisation Name{" "}
                      </span>
                      <span class="w-75">{shipmentData.receiver.org.name}</span>
                    </div>
                    <div className=" d-flex flex-row p-1">
                      <span class="w-75 text-secondary">
                        {" "}
                        Organisation Location{" "}
                      </span>
                      <span class="w-75">
                        {shipmentData.receiver.warehouse.postalAddress}
                      </span>
                    </div>
                  </div>
                  <div className="col">
                    <div className="emp"></div>
                    <div>
                      Shipment ID : <strong>{shipmentData.id}</strong>
                    </div>
                  </div>
                  <div className="d-flex flex-column mr-5">
                    <div className="emp"></div>
                    <div>{custody.updatedOn?.split(" ")[0]}</div>
                    <div></div>
                  </div>
                </div>
                {op === index ? (
                  <div className="d-flex flex-row mt-4">
                    <button
                      className="btn btn-main-blue dir mr-2"
                      onClick={() => {
                        props.setHighLight(true);
                        props.setMenuShip(true);
                      }}
                    >
                      View Shipment
                    </button>
                    <button
                      className="btn btn-orange dir"
                      onClick={() => {
                        props.setProductHighLight(true);
                        props.setMenuProduct(true);
                      }}
                    >
                      View Product List
                    </button>
                  </div>
                ) : null}
                {op === index ? (
                  <div
                    className="arrow float-right"
                    onClick={() => {
                      setOp("");
                    }}
                  >
                    <img src={Down} alt="actions" height="7" width="12" />
                  </div>
                ) : (
                  <div
                    className="arrow float-right"
                    onClick={() => {
                      setOp(index);
                    }}
                  >
                    <img src={traceDrop} alt="actions" height="7" width="12" />
                  </div>
                )}
              </div>
            </div>
          </div>
        ) : (
          <div>
            {" "}
            {custody.status === "RECEIVED" ? (
              <div className="row  mb-3">
                <div></div>
                <div className="big-dot bg-info ml-4"></div>
                <div className="col">
                  <div className="color mb-3">
                    {custody.status === "RECEIVED" ? "DELIVERED" : "DELIVERED"}
                  </div>
                  <div className="col panel  chain chainpanle">
                    <div className="row justify-content-between">
                      <div className="col">
                        <div>
                          <strong>
                            Shipment{" "}
                            {custody.status === "RECEIVED"
                              ? "Delivered"
                              : "DELIVERED"}
                          </strong>
                        </div>
                        <h6 className="poheads potext mt-3 mb-3">To</h6>
                        <div className="d-flex flex-row p-1">
                          <span class="w-75 text-secondary">
                            Organisation Name{" "}
                          </span>
                          <span class="w-75">
                            {shipmentData.receiver.org.name}
                          </span>
                        </div>
                        <div className="d-flex flex-row p-1">
                          <span class="w-75 text-secondary">
                            {" "}
                            Organisation Location{" "}
                          </span>
                          <span class="w-75">
                            {shipmentData.receiver.warehouse.postalAddress}
                          </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="emp"></div>
                        <div>
                          Shipment ID : <strong>{shipmentData.id}</strong>
                        </div>
                      </div>
                      <div className="d-flex flex-column mr-5">
                        <div className="emp"></div>
                        <div>{custody.updatedOn?.split(" ")[0]}</div>
                        <div></div>
                      </div>
                    </div>
                    {op === index ? (
                      <div className="row">
                        <div className="column">
                          <h6 className="poheads potext mt-3 mb-3">Comment*</h6>
                          <div>{custody.updateComment}</div>
                        </div>
                        <div className="column">
                          <h6 className="poheads potext mt-3 mb-3">
                            UploadedImage
                          </h6>
                          {list}
                        </div>
                      </div>
                    ) : null}
                    {op === index ? (
                      <div
                        className="arrow float-right"
                        onClick={() => {
                          setOp("");
                        }}
                      >
                        <img src={Down} alt="actions" height="7" width="12" />
                      </div>
                    ) : (
                      <div
                        className="arrow float-right"
                        onClick={() => {
                          setOp(index);
                        }}
                      >
                        <img
                          src={traceDrop}
                          alt="actions"
                          height="7"
                          width="12"
                        />
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ) : (
              <div className="row  mb-3">
                <div></div>
                <div className="big-dot bg-info ml-4"></div>
                <div className="col">
                  <div className="color mb-3">
                    {custody.status === "UPDATED" ? "UPDATED" : "UPDATED"}
                  </div>
                  <div className="col panel  chain chainpanle">
                    <div className="row justify-content-between">
                      <div className="col">
                        <div>
                          <strong>
                            Shipment{" "}
                            {custody.status === "UPDATED"
                              ? "Updated"
                              : "UPDATED"}
                          </strong>
                        </div>
                        <div className=" d-flex flex-row p-1">
                          <span class="w-75 text-secondary"> By </span>
                          <span class="w-75 ">{custody.updatedBy}</span>
                        </div>
                        <div className=" d-flex flex-row p-1">
                          <span class="w-75 text-secondary">
                            {" "}
                            Organisation Name{" "}
                          </span>
                          <span class="w-75">{custody.orgid}</span>
                        </div>
                        <div className=" d-flex flex-row p-1">
                          <span class="w-75 text-secondary">
                            Updated Location{" "}
                          </span>
                          <span class="w-75 ">{custody.updatedAt}</span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="emp"></div>
                        <div>
                          Shipment ID : <strong>{shipmentData.id}</strong>
                        </div>
                      </div>
                      <div className="d-flex flex-column mr-5">
                        <div className="emp"></div>
                        <div>{custody.updatedOn?.split(" ")[0]}</div>
                        <div></div>
                      </div>
                    </div>
                    {op === index ? (
                      <div className="row">
                        <div className="column">
                          <h6 className="poheads potext mt-3 mb-3">Comment*</h6>
                          <div>{custody.updateComment}</div>
                        </div>
                        <div className="column">
                          <h6 className="poheads potext mt-3 mb-3">
                            UploadedImage
                          </h6>
                          {list}
                        </div>
                      </div>
                    ) : null}
                    {op === index ? (
                      <div
                        className="arrow float-right"
                        onClick={() => {
                          setOp("");
                        }}
                      >
                        <img src={Down} alt="actions" height="7" width="12" />
                      </div>
                    ) : (
                      <div
                        className="arrow float-right"
                        onClick={() => {
                          setOp(index);
                        }}
                      >
                        <img
                          src={traceDrop}
                          alt="actions"
                          height="7"
                          width="12"
                        />
                      </div>
                    )}
                  </div>
                </div>
              </div>
            )}
          </div>
        )
      )}
    </div>
  );
};

export default ChainOfCustody;
