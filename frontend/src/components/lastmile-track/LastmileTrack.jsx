import React, { useState } from "react";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import {
  fetchAnalytics,
  getVaccinationsList,
} from "../../actions/lastMileActions";
import Modal from "../../shared/modal";
import AnalyticTiles from "../../shared/stats-tile/AnalyticTiles";
import BatchesTable from "./batches-table/BatchesTable";
import Beneficiary from "./beneficiary/Beneficiary";
import "./LastmileTrack.css";
import ScanBatch from "./scan-batch/ScanBatch";
import TodayVaccinatedTable from "./stats-table/today-vaccinated/TodayVaccinatedTable";
import TotalVaccinatedTable from "./stats-table/total-vaccinated/TotalVaccinatedTable";
import UnitUsedTable from "./stats-table/units-used/UnitUsedTable";

export default function LastmileTrack(props) {
  const [Steps, setSteps] = useState(1);
  const [tableView, setTableView] = useState(false);
  const [tableComp, setTableComp] = useState(null);
  const [vialId, setVialId] = useState(null);
  const [analytics, setAnalytics] = useState();
  const [totalVaccinations, setTotalVaccinations] = useState();
  const [todaysVaccinations, setTodaysVaccinations] = useState();
  const [batchDetails, setBatchDetails] = useState();
  const [batchesList, setBatchesList] = useState();
  const [showBatchesList, toggleShowBatchesList] = useState();
  const [save, setSave] = useState(false);
  const { t } = useTranslation();

  useEffect(() => {
    (async () => {
      // Fetch analytics
      const analytics = await fetchAnalytics();
      if (analytics?.data?.success) {
        setAnalytics(analytics.data.data);
      }
      const vaccinationsList = await getVaccinationsList();
      if (vaccinationsList?.data?.success) {
        setTotalVaccinations(vaccinationsList.data.data.vaccinationsList);
        setTodaysVaccinations(
          vaccinationsList.data.data.todaysVaccinationsList
        );
      }
    })();
  }, [Steps, save]);

  const saveVaccination = async () => {
    setVialId(null);
    setSave(!save);
    handleAnalyticsClicked("unitsUtilized");
  };

  const handleAnalyticsClicked = (tableType) => {
    let table;
    switch (tableType) {
      case "unitsUtilized": {
        table = (
          <UnitUsedTable
            t={t}
            setSteps={setSteps}
            setTableView={setTableView}
            setBatchDetails={setBatchDetails}
            setVialId={setVialId}
          />
        );
        break;
      }
      case "totalVaccinations": {
        table = (
          <TotalVaccinatedTable t={t} vaccinationsList={totalVaccinations} />
        );
        break;
      }
      case "todaysVaccinations": {
        table = (
          <TodayVaccinatedTable t={t} vaccinationsList={todaysVaccinations} />
        );
        break;
      }
      default:
        table = null;
    }
    setTableComp(table);
    setTableView(true);
  };

  return (
		<>
			<div className="Lastmile--mainPage-layout">
				<div className="Lastmile--pageHeader">
					<h1 style={{ paddingBottom: "10px" }} className="vl-heading-bdr black f-700 mi-reset">
						{t("lastmile")}
					</h1>
					{(tableView || Steps != 1) && (
						<div className="back-link-button-space">
							<button
								className="back-action-btn"
								onClick={() => {
									if (tableView) {
										setTableView(false);
										setSteps(1);
									} else {
										setSteps(1);
									}
								}}
							>
								<i className="fa-solid fa-arrow-left"></i>
								<span>{t("back_to_batch_details")}</span>
							</button>
						</div>
					)}
				</div>
				<div className="Lastmile--gridLayout-wrapper">
					{tableView ? (
						<div className="Lastmile--Interaction-space">{tableComp}</div>
					) : (
						<div className="Lastmile--Interaction-space">
							{Steps === 1 ? (
								<ScanBatch
									setBatchDetails={setBatchDetails}
									setBatchesList={setBatchesList}
									toggleShowBatchesList={toggleShowBatchesList}
									setSteps={setSteps}
									{...props}
								/>
							) : (
								<Beneficiary
									vialId={vialId}
									setVialId={setVialId}
									batchDetails={batchDetails}
									saveVaccination={saveVaccination}
									{...props}
								/>
							)}
						</div>
					)}
					<div className="Lastmile--Analytics-space">
						<AnalyticTiles
							layout="1"
							variant="1"
							title={t("total_units_utilized")}
							stat={analytics?.unitsUtilized ? analytics.unitsUtilized : 0}
							name="unitsUtilized"
							onClick={handleAnalyticsClicked}
						/>
						<AnalyticTiles
							layout="1"
							variant="2"
							title={t("no_beneficiaries_vaccinated_so_far")}
							stat={analytics?.totalVaccinations ? analytics.totalVaccinations : 0}
							name="totalVaccinations"
							onClick={handleAnalyticsClicked}
						/>
						<AnalyticTiles
							layout="1"
							variant="3"
							title={t("no_beneficiaries_vaccinated_today")}
							stat={analytics?.todaysVaccinations ? analytics.todaysVaccinations : 0}
							name="todaysVaccinations"
							onClick={handleAnalyticsClicked}
						/>
					</div>
				</div>
			</div>
			{showBatchesList && (
				<Modal title={"Choose Batch to continue ->"} close={() => toggleShowBatchesList(false)} size="modal-md">
					<BatchesTable
						batchesList={batchesList}
						setBatchDetails={setBatchDetails}
            setSteps={setSteps}
            toggleShowBatchesList={toggleShowBatchesList}
					/>
				</Modal>
			)}
		</>
	);
}
