import axios from "axios";
import { config } from "../config";
import { startOfMonth, format } from "date-fns";

export const getBestSellers = async (payload) => {
	try {
    const url = config().getBestSellersUrl;
    const result = await axios.post(url, payload);
		return result.data;
	} catch (e) {
		console.log(e);
		return false;
	}
};

export const getBestSellerSummary = async (reportWarehouse) => {
  try {
    const url = config().getBestSellersSummaryUrl;
    const result = await axios.get(url + `?warehouseId=${reportWarehouse}`);
    return result.data;
  } catch (e) {
    console.log(e);
    return false;
  }
};

export const getmanufacturerInStockReport = async (payload) => {
	try {
    const url = config().getmanufacturerInStockReportUrl;
    const result = await axios.post(url, payload);
		return result.data;
	} catch (e) {
		console.log(e);
		return false;
	}
};

export const getInStockFilterOptions = async (reportWarehouse, date) => {
  try {
    date = date ? format(startOfMonth(new Date(date)), "yyyy-MM-dd") : "";
    const url = config().getmanufacturerInStockFilterOptions;
    const result = await axios.get(
      url + `?warehouseId=${reportWarehouse}&date=${date}`
    );
    return result.data.data;
  } catch (e) {
    console.log(e);
    return false;
  }
};

export const getOutStockFilterOptions = async (reportWarehouse, date) => {
  try {
    date = date ? format(startOfMonth(new Date(date)), "yyyy-MM-dd") : "";
    const url = config().getmanufacturerOutStockFilterOptions;
    const result = await axios.get(
      url + `?warehouseId=${reportWarehouse}&date=${date}`
    );
    return result.data.data;
  } catch (e) {
    console.log(e);
    return false;
  }
};

export const getmanufacturerOutStockReport = async (payload) => {
	try {
    const url = config().getmanufacturerOutStockReportUrl;
    const result = await axios.post(url, payload);
		return result.data;
	} catch (e) {
		console.log(e);
		return false;
	}
};

export const getManufacturerNearExpiryStockReport = async (payload) => {
	try {
    const url = config().getManufacturerNearExpiryStockReportUrl;
    const result = await axios.post(url, payload);
		return result.data;
	} catch (e) {
		console.log(e);
		return false;
	}
};


export const getManufacturerExpiredStockReport = async (payload) => {
	try {
    const url = config().getManufacturerExpiredStockReportUrl;
    const result = await axios.post(url, payload);
		return result.data;
	} catch (e) {
		console.log(e);
		return false;
	}
};

export const getManufacturerWarehouses = async (
  orgId,
  cName,
  partnerLocation,
  MylocationFilter
) => {
  try {
    const url = config().getManufacturerWarehouses;
    const result = await axios.get(
      url +
        `?warehouseOrg=${orgId}&countryName=${cName}&partnerLocation=${
          partnerLocation ? partnerLocation : ""
        }&mylocationFilter=${MylocationFilter ? MylocationFilter : ""}`
    );
    return result.data;
  } catch (e) {
    console.log(e);
    return false;
  }
};

export const getManufacturerFilterOptions = async (type, regExp='') => {
  try {
    const url = config().getManufacturerFilterOptions;
    const result = await axios.get(url + `?type=${type}&regExp=${regExp}`);
    return result.data;
  } catch (e) {
    console.log(e);
    return false;
  }
};


// NEEDS TO BE UPDATED; REQUESTS ARE NOW type:POST
export const getReports = async (report, fileType, reportWarehouse, date) => {
  try {
    let url;
    date = date ? format(startOfMonth(new Date(date)), "yyyy-MM-dd") : "";
    if (report === "INSTOCK") url = config().getmanufacturerInStockReportUrl;
    if (report === "OUTSTOCK") url = config().getmanufacturerOutStockReportUrl;
    if (report === "BESTSELLER") url = config().getBestSellersUrl;
    const res = await axios.get(
      url +
        `?warehouseId=${reportWarehouse}&date=${date}&reportType=${fileType}`,
      {
        responseType: "blob",
      }
    );
    return res.data;
  } catch (e) {
    console.log(e);
    return false;
  }
};
