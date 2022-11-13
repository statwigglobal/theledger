import React, { useState } from "react";
import "./Permission.css";
import Roles from "./Roles";

export default function Permission({
  permissions,
  updatePermissions,
  updatedPermissions,
  permissionUpdate,
}) {
  const [flag, setFlag] = useState(false);
  console.log(permissions);
  console.log(updatedPermissions);
  const List = permissions ? Object.keys(permissions) : [];
  return (
    <section className="permission-container">
      <div className="permission-container-header">
        <p className="vl-body f-500 vl-black">Permission Details</p>
        <button
          disabled={updatedPermissions === null ? true : false}
          className={`vl-btn vl-btn-sm ${
            updatedPermissions ? "vl-btn-primary" : "vl-btn-disabled"
          }`}
          onClick={permissionUpdate}
        >
          Save the Changes
        </button>
        {/* <button
          className="vl-btn vl-btn-sm vl-btn-primary"
          onClick={permissionUpdate}
        >
          Save the Changes
        </button> */}
      </div>
      {List.map(
        (list) =>
          Boolean(permissions) &&
          list !== "_id" &&
          list !== "role" &&
          list !== "permissions" &&
          permissions[`${list.toLowerCase()}`] && (
            <Roles
              updatePermissions={updatePermissions}
              flag={flag}
              refresh={(f) => setFlag(f)}
              list={list}
              permissions={
                permissions ? permissions[`${list.toLowerCase()}`] : null
              }
            />
          )
      )}
    </section>
  );
}
