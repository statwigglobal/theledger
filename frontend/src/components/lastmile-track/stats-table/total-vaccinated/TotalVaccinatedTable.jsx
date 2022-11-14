import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import React from "react";
import TotalVaccinatedRow from "./TotalVaccinatedRow";
import EmptyIcon from "../../../../assets/files/designs/empty-table.jpg";

export default function TotalVaccinatedTable({ vaccinationsList }) {
  return (
    <>
      <TableContainer className="vl-mui-custom-tablecontainer">
        <div className="Beneficiary--header">
          <h1 className="vl-subtitle f-700 vl-black">
            No. of beneficiaries Vaccinated So far
          </h1>
        </div>
        {vaccinationsList && vaccinationsList.length ? (
          <Table sx={{ minWidth: 650 }} className="vl-mui-custom-table">
            <TableHead className="vl-mui-custom-tablehead">
              <TableRow className="vl-mui-custom-tr">
                <TableCell align="center">
                  <div className="vl-table-column">
                    <p className="vl-body f-500 vl-blue">S. No</p>
                  </div>
                </TableCell>
                <TableCell align="center">
                  <div className="vl-table-column">
                    <p className="vl-body f-500 vl-blue">Batch Number</p>
                  </div>
                </TableCell>
                <TableCell align="center">
                  <div className="vl-table-column">
                    <p className="vl-body f-500 vl-blue">Gender</p>
                  </div>
                </TableCell>
                <TableCell align="center">
                  <div className="vl-table-column">
                    <p className="vl-body f-500 vl-blue">Age</p>
                  </div>
                </TableCell>
                <TableCell align="center">
                  <div className="vl-table-column">
                    <p className="vl-body f-500 vl-blue">Date</p>
                  </div>
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody className="vl-mui-custom-tablebody">
              {vaccinationsList &&
                vaccinationsList.length &&
                vaccinationsList.map((dose, i) => (
                  <TotalVaccinatedRow dose={dose} index={i} />
                ))}
            </TableBody>
          </Table>
        ) : (
          <div className="Table--Empty-container">
            <div className="Table--empty-illustartion">
              <img src={EmptyIcon} alt="EmptyIcon" />
              <h1 className="vl-subheading f-500 vl-black">
                Sorry, No Records
              </h1>
            </div>
          </div>
        )}
        <div className="padding-space"></div>
      </TableContainer>
    </>
  );
}
