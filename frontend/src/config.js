export const SERVER_URL =
  process.env.REACT_APP_SERVER_URL || "https://test.vaccineledger.com";
export const SERVER_URL_FOR_ROAMBEE = "https://integrations.vaccineledger.com";
export const LOCAL_SERVER_URL_USER = "http://localhost:3001";
export const LOCAL_SERVER_URL_SHIPPINGORDER = "http://localhost:3013";
export const LOCAL_SERVER_URL_SHIPMENT = "http://localhost:3002";
export const LOCAL_SERVER_URL_INVENTORY = "http://localhost:3007";
export const LOCAL_SERVER_URL_PO = "http://localhost:3012";
export const LOCAL_SERVER_URL_TRACKANDTRACE = "http://localhost:3005";
export const LOCAL_SERVER_URL_NOTIFICATION = "http://localhost:3006";
export const LOCAL_SERVER_URL_ANALYTICS = "http://localhost:3014";
export const LOCAL_SERVER_URL_EOL = "http://localhost:3017";
export const LOCAL_SERVER_URL_EVENT = "http://localhost:3013";
export const LOCAL_SERVER_URL_PRODUCTS = "http://localhost:3010";
export const LOCAL_SERVER_URL_ALERTS = "http://localhost:3004";
export const LOCAL_SERVER_URL_LASTMILE = "http://localhost:3016";

export function config() {
  const confs = {
    local: {
      getOrganizationsUrl: `${LOCAL_SERVER_URL_INVENTORY}/inventorymanagement/api/inventory/getOrganizations?orgType=`,
      getOrganizationsByTypeUrl: `${LOCAL_SERVER_URL_USER}/usermanagement/api/auth/getOrganizationsByType?id=`,
      loginUrl: `${LOCAL_SERVER_URL_USER}/usermanagement/api/auth/login`,
      sendOtpUrl: `${LOCAL_SERVER_URL_USER}/usermanagement/api/auth/sendOtp`,
      registerUrl: `${LOCAL_SERVER_URL_USER}/usermanagement/api/auth/register`,
      checkUserUrl: `${LOCAL_SERVER_URL_USER}/usermanagement/api/auth/check`,
      verifyOtpUrl: `${LOCAL_SERVER_URL_USER}/usermanagement/api/auth/verifyOtp`,
      verifyAuth: `${LOCAL_SERVER_URL_USER}/usermanagement/api/auth/verifyAuth`,
      googleLoginUrl: `${LOCAL_SERVER_URL_USER}/usermanagement/api/auth/googleLogin`,
      newDemoRequestUrl: `${LOCAL_SERVER_URL_USER}/usermanagement/api/demoRequest/newDemoRequest`,
      validateRequestUrl: `${LOCAL_SERVER_URL_USER}/usermanagement/api/demoRequest/validateRequest`,
      userInfoUrl: `${LOCAL_SERVER_URL_USER}/usermanagement/api/auth/userInfo`,
      getAllUsersUrl: `${LOCAL_SERVER_URL_USER}/usermanagement/api/auth/getAllUsers`,
      updateProfileUrl: `${LOCAL_SERVER_URL_USER}/usermanagement/api/auth/updateProfile`,
      locationUrl: `${LOCAL_SERVER_URL_USER}/usermanagement/api/auth/switchLocation`,
      fetchGMRShipmentsUrl: `${LOCAL_SERVER_URL_SHIPMENT}/shipmentmanagement/api/shipment/fetchGMRShipments`,
      newShipmentUrl: `${LOCAL_SERVER_URL_SHIPMENT}/shipmentmanagement/api/shipment/newShipment`,
      viewShipmentGmrUrl: `${LOCAL_SERVER_URL_SHIPMENT}/shipmentmanagement/api/shipment/viewShipmentGmr?shipmentId=`,
      upload: `${LOCAL_SERVER_URL_USER}/usermanagement/api/auth/uploadImage?`,
      fetchProfileImage: `${LOCAL_SERVER_URL_USER}`,
      uploadProfileImage: `${LOCAL_SERVER_URL_USER}/usermanagement/api/auth/uploadImage?action=PROFILE`,
      getAnalyticsUrl: `${LOCAL_SERVER_URL_ANALYTICS}/analyticsmanagement/api/analytics/getAnalytics`,
      getOverviewAnalyticsUrl: `${LOCAL_SERVER_URL_ANALYTICS}/analyticsmanagement/api/analytics/getOverviewAnalytics`,
      getInventoryAnalyticsUrl: `${LOCAL_SERVER_URL_ANALYTICS}/analyticsmanagement/api/analytics/getInventoryAnalytics`,
      getShipmentAnalyticsUrl: `${LOCAL_SERVER_URL_ANALYTICS}/analyticsmanagement/api/analytics/getShipmentAnalytics`,
      getOrderAnalyticsUrl: `${LOCAL_SERVER_URL_ANALYTICS}/analyticsmanagement/api/analytics/getOrderAnalytics`,
      createShippingOrderUrl: `${LOCAL_SERVER_URL_SHIPPINGORDER}/shippingordermanagement/api/shipping/createShippingOrder`,
      getShippingOrdersUrl: `${LOCAL_SERVER_URL_SHIPPINGORDER}/shippingordermanagement/api/shipping/getShippingOrders`,
      getShippingOrderIdsUrl: `${LOCAL_SERVER_URL_SHIPPINGORDER}/shippingordermanagement/api/shipping/getShippingOrderIds`,
      viewShippingOrderUrl: `${LOCAL_SERVER_URL_SHIPPINGORDER}/shippingordermanagement/api/shipping/viewShippingOrder?soId=`,
      shipmentsUrl: `${LOCAL_SERVER_URL_SHIPMENT}/shipmentmanagement/api/shipment/fetchShipments`,
      viewShipmentUrl: `${LOCAL_SERVER_URL_SHIPMENT}/shipmentmanagement/api/shipment/viewShipment?shipmentId=`,
      getShipmentIdsUrl: `${LOCAL_SERVER_URL_SHIPMENT}/shipmentmanagement/api/shipment/fetchShipmentIds`,
      chainOfCustody: `${LOCAL_SERVER_URL_SHIPMENT}/shipmentmanagement/api/shipment/chainOfCustody?shipmentId=`,
      receiveApi: `${LOCAL_SERVER_URL_SHIPMENT}/shipmentmanagement/api/shipment/receiveShipment`,
      uploadImage: `${LOCAL_SERVER_URL_SHIPMENT}/shipmentmanagement/api/shipment/uploadImage?id=`,
      fetchImage: `${LOCAL_SERVER_URL_SHIPMENT}/shipmentmanagement/api/shipment/fetchImage?id=`,
      getImage: `${LOCAL_SERVER_URL_SHIPMENT}/shipmentmanagement/api/shipment/images`,
      getProducts: `${LOCAL_SERVER_URL_PRODUCTS}/productmanagement/api/products/getProducts`,
      getProductsByCategoryUrl: `${LOCAL_SERVER_URL_PRODUCTS}/productmanagement/api/products/getProductsByCategory?type=`,
      getProductsByInventoryUrl: `${LOCAL_SERVER_URL_SHIPMENT}/shipmentmanagement/api/shipment/getProductsByInventory?invId=`,
      generateCodes: `${LOCAL_SERVER_URL_PRODUCTS}/productmanagement/api/products/generateCodes`,
      getManufacturers: `${LOCAL_SERVER_URL_PRODUCTS}/productmanagement/api/products/getManufacturer`,
      createNewOrg: `${LOCAL_SERVER_URL_PRODUCTS}/productmanagement/api/organisation/saveOrganisations`,
      addNewOrgNWarehouse: `${LOCAL_SERVER_URL_PRODUCTS}/productmanagement/api/organisation/addNewOrgNWarehouse`,
      getSerialNumbersByBatchNumber: `${LOCAL_SERVER_URL_INVENTORY}/inventorymanagement/api/inventory/getInventoryDetailsByBatchNumber?skip=0&limit=100&batchNumber=`,
      getInventoryDetailsUrl: `${LOCAL_SERVER_URL_INVENTORY}/inventorymanagement/api/inventory/getInventoryDetails`,
      getInventoryByBatchNumber: `${LOCAL_SERVER_URL_INVENTORY}/inventorymanagement/api/inventory/getBatchDetailsByBatchNumber?skip=0&limit=100&batchNumber=`,
      addProductsToInventory: `${LOCAL_SERVER_URL_INVENTORY}/inventorymanagement/api/inventory/addProductsToInventory`,
      addInventoriesFromExcel: `${LOCAL_SERVER_URL_INVENTORY}/inventorymanagement/api/inventory/addInventoriesFromExcel`,
      createShipmentUrl: `${LOCAL_SERVER_URL_SHIPMENT}/shipmentmanagement/api/shipment/createShipment`,
      createShipmentForTpl: `${LOCAL_SERVER_URL_SHIPMENT}/shipmentmanagement/api/shipment/createShipmentForTpl`,
      addInventoryUrl: `${LOCAL_SERVER_URL_INVENTORY}/inventorymanagement/api/inventory/addNewInventory`,
      shipmentsSearch: `${LOCAL_SERVER_URL_SHIPMENT}/shipmentmanagement/api/shipping/fetchShipments?key=`,
      inventorySearch: `${LOCAL_SERVER_URL_INVENTORY}/inventorymanagement/api/inventory/getInventoryDetailsForProduct?key=`,
      getProductDetailsByWarehouseIdUrl: `${LOCAL_SERVER_URL_INVENTORY}/inventorymanagement/api/inventory/getProductDetailsByWarehouseId?warehouseId=`,
      getRegionsUrl: `${LOCAL_SERVER_URL_INVENTORY}/inventorymanagement/api/inventory/getRegions`,
      getCountryByRegionUrl: `${LOCAL_SERVER_URL_INVENTORY}/inventorymanagement/api/inventory/getCountryDetailsByRegion?region=`,
      getWareHousesByCountryUrl: `${LOCAL_SERVER_URL_INVENTORY}/inventorymanagement/api/inventory/getWarehouseDetailsByCountry?name=`,
      getWareHousesByRegionUrl: `${LOCAL_SERVER_URL_INVENTORY}/inventorymanagement/api/inventory/getWarehouseDetailsByRegion?region=`,
      createPurchaseOrderUrl: `${LOCAL_SERVER_URL_PO}/pomanagement/api/po/createPurchaseOrder`,
      createOrderUrl: `${LOCAL_SERVER_URL_PO}/pomanagement/api/po/createOrder`,
      fetchPurchaseOrderUrl: `${LOCAL_SERVER_URL_PO}/pomanagement/api/po/fetchPurchaseOrders`,
      fetchPurchaseOrderById: `${LOCAL_SERVER_URL_PO}/pomanagement/api/po/fetchPurchaseOrders?skip=0&limit=5&poId=`,
      productListUrl: `${LOCAL_SERVER_URL_INVENTORY}/inventorymanagement/api/inventory/getProductListCounts`,
      inventoriesUrl: `${LOCAL_SERVER_URL_INVENTORY}/inventorymanagement/api/inventory/getInventory`,
      bacthcNearExpiryUrl: `${LOCAL_SERVER_URL_INVENTORY}/inventorymanagement/api/inventory/getBatchNearExpiration`,
      batchExpiredUrl: `${LOCAL_SERVER_URL_INVENTORY}/inventorymanagement/api/inventory/getBatchExpired`,
      batchWarehouseUrl: `${LOCAL_SERVER_URL_INVENTORY}/inventorymanagement/api/inventory/getBatchWarehouse`,
      addPOsFromExcelUrl: `${LOCAL_SERVER_URL_PO}/pomanagement/api/po/addPOsFromExcel`,
      changePOStatus: `${LOCAL_SERVER_URL_SHIPMENT}/pomanagement/api/po/changePOStatus`,
      fetchAllPurchaseOrderUrl: `${LOCAL_SERVER_URL_SHIPMENT}/shipmentmanagement/api/shipping/fetchpurchaseOrder?key=`,
      getPOsUrl: `${LOCAL_SERVER_URL_PO}/pomanagement/api/po/purchaseOrderStatistics`,
      trackShipment: `${LOCAL_SERVER_URL_SHIPMENT}/shipmentmanagement/api/shipping/trackShipment?shipmentId=`,
      trackShipmentJourney: `${LOCAL_SERVER_URL_SHIPMENT}/shipmentmanagement/api/shipment/trackJourney?trackingId=`,
      trackJourney: `${LOCAL_SERVER_URL_SHIPMENT}/shipmentmanagement/api/shipment/trackJourney?trackingId=`,
      poDetailsByShipmentId: `${LOCAL_SERVER_URL_SHIPMENT}/shipmentmanagement/api/shipping/fetchPOdetailsByShipmentID?shipmentId=`,
      productDetailsByShipmentId: `${LOCAL_SERVER_URL_SHIPMENT}/shipmentmanagement/api/shipping/fetchProductdetailsByShipmentID?shipmentId=`,
      trackTemperature: `${LOCAL_SERVER_URL_TRACKANDTRACE}/tracktracemanagement/api/track/fetchTemp`,
      trackProduct: `${LOCAL_SERVER_URL_TRACKANDTRACE}/tracktracemanagement/api/track/track?trackingNumber=`,
      addNewProduct: `${LOCAL_SERVER_URL_PRODUCTS}/productmanagement/api/products/addProduct`,
      getOrganisations: `${LOCAL_SERVER_URL_PRODUCTS}/productmanagement/api/organisation/getOrganisations`,
      getOrganisationsAtSignup: `${LOCAL_SERVER_URL_PRODUCTS}/productmanagement/api/organisation/getOrganisationsAtSignup`,
      getUnregisteredOrganisations: `${LOCAL_SERVER_URL_PRODUCTS}/productmanagement/api/organisation/getUnregisteredOrganisations`,
      addWarehouseForTpl: `${LOCAL_SERVER_URL_PRODUCTS}/productmanagement/api/organisation/addWarehouseForTpl`,
      getWarehouseByOrgId: `${LOCAL_SERVER_URL_PRODUCTS}/productmanagement/api/organisation/warehouses?id=`,
      getAllWarehouses: `${LOCAL_SERVER_URL_PRODUCTS}/productmanagement/api/organisation/allWarehouses`,
      addMultipleProducts: `${LOCAL_SERVER_URL_PRODUCTS}/productmanagement/api/products/addMultipleProducts`,
      getNotificationsUrl: `${LOCAL_SERVER_URL_NOTIFICATION}/notificationmanagement/api/notification/getNotifications`,
      deleteNotificationUrl: `${LOCAL_SERVER_URL_NOTIFICATION}/notificationmanagement/api/notification/deleteNotification`,
      updateTrackingStatusUrl: `${LOCAL_SERVER_URL_SHIPMENT}/shipmentmanagement/api/shipment/updateTrackingStatus`,
      getOrderIds: `${LOCAL_SERVER_URL_PO}/pomanagement/api/po/getOrderIds`,
      getOpenOrderIds: `${LOCAL_SERVER_URL_PO}/pomanagement/api/po/getOpenOrderIds`,
      fetchOutboundPurchaseOrderUrl: `${LOCAL_SERVER_URL_PO}/pomanagement/api/po/fetchOutboundPurchaseOrders`,
      fetchInboundPurchaseOrderUrl: `${LOCAL_SERVER_URL_PO}/pomanagement/api/po/fetchInboundPurchaseOrders`,
      getOrganizationsByType: `${LOCAL_SERVER_URL_USER}/usermanagement/api/auth/getOrganizationsByType?id=`,
      getwarehouseByType: `${LOCAL_SERVER_URL_USER}/usermanagement/api/auth/getwarehouseByType?id=`,
      fetchProductIdsCustomerLocationsOrganisationsUrl: `${LOCAL_SERVER_URL_PO}/pomanagement/api/po/fetchProductIdsCustomerLocationsOrganisations`,
      fetchInboundShipmentsUrl: `${LOCAL_SERVER_URL_SHIPMENT}/shipmentmanagement/api/shipment/fetchInboundShipments`,
      fetchOutboundShipmentsUrl: `${LOCAL_SERVER_URL_SHIPMENT}/shipmentmanagement/api/shipment/fetchOutboundShipments`,
      GetEOLInfoBySerialNumber: `${LOCAL_SERVER_URL_EOL}/lastmilemanagement/api/GetEOLInfoBySerialNumber?serial_number=`,
      GetEOLInfoByProductId: `${LOCAL_SERVER_URL_EOL}/lastmilemanagement/api/GetEOLInfoByProductId?id=`,
      GetEOLInfoByIdentityId: `${LOCAL_SERVER_URL_EOL}/lastmilemanagement/api/GetEOLInfoByIdentityId?id=`,
      GetEOLInfoByPlaceAdministered: `${LOCAL_SERVER_URL_EOL}/lastmilemanagement/api/GetEOLInfoByPlaceAdministered?place=`,
      GetEOLListByDateWindow: `${LOCAL_SERVER_URL_EOL}/lastmilemanagement/api/GetEOLListByDateWindow`,
      fetchSupplierAndReceiverListUrl: `${LOCAL_SERVER_URL_SHIPMENT}/shipmentmanagement/api/shipment/fetchSupplierAndReceiverList`,
      updateWarehouse: `${LOCAL_SERVER_URL_SHIPMENT}/usermanagement/api/auth/updateWarehouse?warehouseId=`,
      getWarehouseById: `${LOCAL_SERVER_URL_SHIPMENT}/usermanagement/api/auth/getwarehouseinfo?id=`,
      addPOsFromExcel: `${LOCAL_SERVER_URL_PO}/pomanagement/api/po/addPOsFromExcel`,
      getOrganizationsTypewithauth: `${LOCAL_SERVER_URL_USER}/usermanagement/api/auth/getOrganizationsTypewithauth?id=`,
      getTransactions: `${LOCAL_SERVER_URL_EVENT}/eventmanagement/api/event/getAllEventsWithFilter`,
      getTransactionFilterList: `${LOCAL_SERVER_URL_EVENT}/eventmanagement/api/event/fetchProductDetailsList`,
      getAllStates: `${LOCAL_SERVER_URL_INVENTORY}/inventorymanagement/api/inventory/getAllStates`,
      getDistrictsByState: `${LOCAL_SERVER_URL_INVENTORY}/inventorymanagement/api/inventory/getDistrictsByState`,
      GetEOLInfo: `${LOCAL_SERVER_URL_EOL}/lastmilemanagement/api/GetEOLInfo`,
      GetProductsByWarehouse: `${LOCAL_SERVER_URL_EOL}/lastmilemanagement/api/getProductsByWarehouse`,
      getCountries: `${LOCAL_SERVER_URL_INVENTORY}/inventorymanagement/api/inventory/getCountries`,
      getStatesByCountry: `${LOCAL_SERVER_URL_INVENTORY}/inventorymanagement/api/inventory/getStatesByCountry`,
      getCitiesByState: `${LOCAL_SERVER_URL_INVENTORY}/inventorymanagement/api/inventory/getCitiesByState`,
      getWarehousesByCity: `${LOCAL_SERVER_URL_INVENTORY}/inventorymanagement/api/inventory/getWarehousesByCity`,
      emailverify: `${LOCAL_SERVER_URL_USER}/usermanagement/api/auth/emailverify`,
      pushWarehouse: `${LOCAL_SERVER_URL_USER}/usermanagement/api/auth/pushWarehouse`,
      fetchairwayBillNumber: `${LOCAL_SERVER_URL_SHIPMENT}/shipmentmanagement/api/shipment/fetchairwayBillNumber`,
      fetchAllRegions: `${LOCAL_SERVER_URL_PRODUCTS}/productmanagement/api/location?region=all`,
      fetchCountriesByRegion: `${LOCAL_SERVER_URL_PRODUCTS}/productmanagement/api/location?region=`,
      fetchStateByCountry: `${LOCAL_SERVER_URL_PRODUCTS}/productmanagement/api/location?country_id=`,
      fetchCitiesByState: `${LOCAL_SERVER_URL_PRODUCTS}/productmanagement/api/location?state_id=`,
      getIotEnabledStatus: `${LOCAL_SERVER_URL_PRODUCTS}/productmanagement/api/products/getIotEnabledStatus`,
      trackLastTenIotShipmentData: `${SERVER_URL_FOR_ROAMBEE}/integrationmanagement/api/v1/roambee/lastteniotsamplesforshipmentid/:shipmentId`,
      trackLatestShipmentData: `${SERVER_URL_FOR_ROAMBEE}/integrationmanagement/api/v1/roambee/latestiotdataforshipmentid/:shipmentId`,
      trackAllIotShipmentData: `${SERVER_URL_FOR_ROAMBEE}/integrationmanagement/api/v1/roambee/alliotsamplesforshipmentid/:shipmentId`,
      searchProduct: `${LOCAL_SERVER_URL_INVENTORY}/inventorymanagement/api/inventory/searchProduct?skip=0&limit=10`,
      getSuggestions: `${LOCAL_SERVER_URL_INVENTORY}/inventorymanagement/api/inventory/getsearchsuggestions`,
      fetchBatchesOfInventory: `${LOCAL_SERVER_URL_INVENTORY}/inventorymanagement/api/inventory/fetchBatchesOfInventory`,
      getAlerts: `${LOCAL_SERVER_URL_NOTIFICATION}/notificationmanagement/api/notification/getNotifications?type=`,
      getExportFileForInboundShipmentUrl: `${LOCAL_SERVER_URL_SHIPMENT}/shipmentmanagement/api/shipment/exportInboundShipments`,
      getExportFileForOutboundShipmentUrl: `${LOCAL_SERVER_URL_SHIPMENT}/shipmentmanagement/api/shipment/exportOutboundShipments`,
      getExportFileForInboundPurchaseOrdersUrl: `${LOCAL_SERVER_URL_PO}/pomanagement/api/po/exportInboundPurchaseOrders`,
      getExportFileForOutboundPurchaseOrdersUrl: `${LOCAL_SERVER_URL_PO}/pomanagement/api/po/exportOutboundPurchaseOrders`,
      getAllManageAlertsUrl: `${LOCAL_SERVER_URL_PO}/alertmanagement/api/alert/getAllAlerts`,
      createUpdateAlertsUrl: `${LOCAL_SERVER_URL_PO}/alertmanagement/api/alert/createNewAlert`,
      requestModalAlertUrl: `${LOCAL_SERVER_URL_TRACKANDTRACE}/tracktracemanagement/api/request/getRequestById?id=`,
      updateStatusModalAlert: `${LOCAL_SERVER_URL_TRACKANDTRACE}/tracktracemanagement/api/request/updateRequest?id=`,
      temperatureGraph: `${LOCAL_SERVER_URL_SHIPMENT}/shipmentmanagement/api/shipment/sensorHistory`,
      driverGraph: `${LOCAL_SERVER_URL_SHIPMENT}/shipmentmanagement/api/shipment/driverHistory`,
      customReceiveShipment: `${LOCAL_SERVER_URL_SHIPMENT}/shipmentmanagement/api/shipment/customReceiveShipment`,
      getBestSellersUrl: `${LOCAL_SERVER_URL_ANALYTICS}/analyticsmanagement/api/network/bestSellers`,
      getBestSellersSummaryUrl: `${LOCAL_SERVER_URL_ANALYTICS}/analyticsmanagement/api/network/bestSellerSummary`,
      getmanufacturerInStockReportUrl: `${LOCAL_SERVER_URL_ANALYTICS}/analyticsmanagement/api/network/inStockReport`,
      getmanufacturerOutStockReportUrl: `${LOCAL_SERVER_URL_ANALYTICS}/analyticsmanagement/api/network/outOfStockReport`,
      getmanufacturerInStockFilterOptions: `${LOCAL_SERVER_URL_ANALYTICS}/analyticsmanagement/api/network/inStockFilterOptions`,
      getmanufacturerOutStockFilterOptions: `${LOCAL_SERVER_URL_ANALYTICS}/analyticsmanagement/api/network/outStockFilterOptions`,
      getManufacturerWarehouses: `${LOCAL_SERVER_URL_INVENTORY}/inventorymanagement/api/inventory/getManufacturerWarehouses`,
      getManufacturerFilterOptions: `${LOCAL_SERVER_URL_INVENTORY}/inventorymanagement/api/inventory/getManufacturerFilterOptions`,
      fetchBatchDetails: `${LOCAL_SERVER_URL_LASTMILE}/lastmilemanagement/api/vaccination/fetchBatchById`,
      vaccinateIndividual: `${LOCAL_SERVER_URL_LASTMILE}/lastmilemanagement/api/vaccination/vaccinateIndividual`,
      vaccinateMultiple: `${LOCAL_SERVER_URL_LASTMILE}/lastmilemanagement/api/vaccination/vaccinateMultiple`,
      getAllVaccinationDetails: `${LOCAL_SERVER_URL_LASTMILE}/lastmilemanagement/api/vaccination/getAllVaccinationDetails`,
      getVaccinationDetailsByVial: `${LOCAL_SERVER_URL_LASTMILE}/lastmilemanagement/api/vaccination/getVaccinationDetailsByVial`,
      getVaccineAnalytics: `${LOCAL_SERVER_URL_LASTMILE}/lastmilemanagement/api/vaccination/getAnalytics`,
      getCitiesAndOrgsForFilters: `${LOCAL_SERVER_URL_LASTMILE}/lastmilemanagement/api/vaccination/getCitiesAndOrgsForFilters`,
      getVialsUtilised: `${LOCAL_SERVER_URL_LASTMILE}/lastmilemanagement/api/vaccination/getVialsUtilised`,
      getVaccinationsList: `${LOCAL_SERVER_URL_LASTMILE}/lastmilemanagement/api/vaccination/getVaccinationsList`,
      exportVaccinationList: `${LOCAL_SERVER_URL_LASTMILE}/lastmilemanagement/api/vaccination/exportVaccinationList`,
    },
    prod: {
      getOrganizationsUrl: `${SERVER_URL}/inventorymanagement/api/inventory/getOrganizations?orgType=`,
      getOrganizationsByTypeUrl: `${SERVER_URL}/usermanagement/api/auth/getOrganizationsByType?id=`,
      loginUrl: `${SERVER_URL}/usermanagement/api/auth/login`,
      sendOtpUrl: `${SERVER_URL}/usermanagement/api/auth/sendOtp`,
      registerUrl: `${SERVER_URL}/usermanagement/api/auth/register`,
      checkUserUrl: `${SERVER_URL}/usermanagement/api/auth/check`,
      verifyOtpUrl: `${SERVER_URL}/usermanagement/api/auth/verifyOtp`,
      verifyAuth: `${SERVER_URL}/usermanagement/api/auth/verifyAuth`,
      googleLoginUrl: `${SERVER_URL}/usermanagement/api/auth/googleLogin`,
      newDemoRequestUrl: `${SERVER_URL}/usermanagement/api/demoRequest/newDemoRequest`,
      validateRequestUrl: `${SERVER_URL}/usermanagement/api/demoRequest/validateRequest`,
      userInfoUrl: `${SERVER_URL}/usermanagement/api/auth/userInfo`,
      getAllUsersUrl: `${SERVER_URL}/usermanagement/api/auth/getAllUsers`,
      locationUrl: `${SERVER_URL}/usermanagement/api/auth/switchLocation`,
      updateProfileUrl: `${SERVER_URL}/usermanagement/api/auth/updateProfile`,
      upload: `${SERVER_URL}/usermanagement/api/auth/uploadImage?`,
      getOrganizationsByType: `${SERVER_URL}/usermanagement/api/auth/getOrganizationsByType?id=`,
      fetchProfileImage: `${SERVER_URL}`,
      uploadProfileImage: `${SERVER_URL}/usermanagement/api/auth/uploadImage?action=PROFILE`,
      getAnalyticsUrl: `${SERVER_URL}/analyticsmanagement/api/analytics/getAnalytics`,
      getOverviewAnalyticsUrl: `${SERVER_URL}/analyticsmanagement/api/analytics/getOverviewAnalytics`,
      getInventoryAnalyticsUrl: `${SERVER_URL}/analyticsmanagement/api/analytics/getInventoryAnalytics`,
      getShipmentAnalyticsUrl: `${SERVER_URL}/analyticsmanagement/api/analytics/getShipmentAnalytics`,
      getOrderAnalyticsUrl: `${SERVER_URL}/analyticsmanagement/api/analytics/getOrderAnalytics`,
      shipmentsUrl: `${SERVER_URL}/shipmentmanagement/api/shipment/fetchShipments`,
      viewShipmentUrl: `${SERVER_URL}/shipmentmanagement/api/shipment/viewShipment?shipmentId=`,
      chainOfCustody: `${SERVER_URL}/shipmentmanagement/api/shipment/chainOfCustody?shipmentId=`,
      receiveApi: `${SERVER_URL}/shipmentmanagement/api/shipment/receiveShipment`,
      getShipmentIdsUrl: `${SERVER_URL}/shipmentmanagement/api/shipment/fetchShipmentIds`,
      fetchImage: `${SERVER_URL}/shipmentmanagement/api/shipment/fetchImage?id=`,
      getImage: `${SERVER_URL}/shipmentmanagement/api/shipment/images`,
      uploadImage: `${SERVER_URL}/shipmentmanagement/api/shipment/uploadImage?id=`,
      getManufacturers: `${SERVER_URL}/productmanagement/api/products/getManufacturer`,
      createNewOrg: `${SERVER_URL}/productmanagement/api/organisation/saveOrganisations`,
      createShippingOrderUrl: `${SERVER_URL}/shippingordermanagement/api/shipping/createShippingOrder`,
      getShippingOrdersUrl: `${SERVER_URL}/shippingordermanagement/api/shipping/getShippingOrders`,
      getShippingOrderIdsUrl: `${SERVER_URL}/shippingordermanagement/api/shipping/getShippingOrderIds`,
      viewShippingOrderUrl: `${SERVER_URL}/shippingordermanagement/api/shipping/viewShippingOrder?soId=`,
      createShipmentUrl: `${SERVER_URL}/shipmentmanagement/api/shipment/createShipment`,
      createShipmentForTpl: `${SERVER_URL}/shipmentmanagement/api/shipment/createShipmentForTpl`,
      fetchGMRShipmentsUrl: `${SERVER_URL}/shipmentmanagement/api/shipment/fetchGMRShipments`,
      newShipmentUrl: `${SERVER_URL}/shipmentmanagement/api/shipment/newShipment`,
      viewShipmentGmrUrl: `${SERVER_URL}/shipmentmanagement/api/shipment/viewShipmentGmr?shipmentId=`,
      shipmentsSearch: `${SERVER_URL}/shipmentmanagement/api/shipping/fetchShipments?key=`,
      createPurchaseOrderUrl: `${SERVER_URL}/pomanagement/api/po/createPurchaseOrder`,
      createOrderUrl: `${SERVER_URL}/pomanagement/api/po/createOrder`,
      fetchPurchaseOrderUrl: `${SERVER_URL}/pomanagement/api/po/fetchPurchaseOrders`,
      fetchPurchaseOrderById: `${SERVER_URL}/pomanagement/api/po/fetchPurchaseOrders?skip=0&limit=5&poId=`,
      changePOStatus: `${SERVER_URL}/pomanagement/api/po/changePOStatus`,
      fetchAllPurchaseOrderUrl: `${SERVER_URL}/shipmentmanagement/api/shipping/fetchpurchaseOrder?key=`,
      getPOsUrl: `${SERVER_URL}/pomanagement/api/po/purchaseOrderStatistics`,
      inventoriesUrl: `${SERVER_URL}/inventorymanagement/api/inventory/getInventory`,
      bacthcNearExpiryUrl: `${SERVER_URL}/inventorymanagement/api/inventory/getBatchNearExpiration`,
      batchExpiredUrl: `${SERVER_URL}/inventorymanagement/api/inventory/getBatchExpired`,
      batchWarehouseUrl: `${SERVER_URL}/inventorymanagement/api/inventory/getBatchWarehouse`,
      inventorySearch: `${SERVER_URL}/inventorymanagement/api/inventory/getInventoryDetailsForProduct?key=`,
      getSerialNumbersByBatchNumber: `${SERVER_URL}/inventorymanagement/api/inventory/getInventoryDetailsByBatchNumber?skip=0&limit=100&batchNumber=`,
      getInventoryDetailsUrl: `${SERVER_URL}/inventorymanagement/api/inventory/getInventoryDetails`,
      getInventoryByBatchNumber: `${SERVER_URL}/inventorymanagement/api/inventory/getBatchDetailsByBatchNumber?skip=0&limit=100&batchNumber=`,
      addProductsToInventory: `${SERVER_URL}/inventorymanagement/api/inventory/addProductsToInventory`,
      addInventoriesFromExcel: `${SERVER_URL}/inventorymanagement/api/inventory/addInventoriesFromExcel`,
      addInventoryUrl: `${SERVER_URL}/inventorymanagement/api/inventory/addNewInventory`,
      productListUrl: `${SERVER_URL}/inventorymanagement/api/inventory/getProductListCounts`,
      getProductDetailsByWarehouseIdUrl: `${SERVER_URL}/inventorymanagement/api/inventory/getProductDetailsByWarehouseId?warehouseId=`,
      getRegionsUrl: `${SERVER_URL}/inventorymanagement/api/inventory/getRegions`,
      getCountryByRegionUrl: `${SERVER_URL}/inventorymanagement/api/inventory/getCountryDetailsByRegion?region=`,
      getWareHousesByCountryUrl: `${SERVER_URL}/inventorymanagement/api/inventory/getWarehouseDetailsByCountry?country=`,
      getWarehouseDetailsByCountryUrl: `${SERVER_URL}/inventorymanagement/api/inventory/getWarehouseDetailsByCountry?name=`,
      getWareHousesByRegionUrl: `${SERVER_URL}/inventorymanagement/api/inventory/getWarehouseDetailsByRegion?region=`,
      trackShipment: `${SERVER_URL}/shipmentmanagement/api/shipping/trackShipment?shipmentId=`,
      trackShipmentJourney: `${SERVER_URL}/shipmentmanagement/api/shipment/trackJourney?trackingId=`,
      trackJourney: `${SERVER_URL}/shipmentmanagement/api/shipment/trackJourney?trackingId=`,
      poDetailsByShipmentId: `${SERVER_URL}/shipmentmanagement/api/shipping/fetchPOdetailsByShipmentID?shipmentId=`,
      productDetailsByShipmentId: `${SERVER_URL}/shipmentmanagement/api/shipping/fetchProductdetailsByShipmentID?shipmentId=`,
      trackTemperature: `${SERVER_URL}/tracktracemanagement/api/track/fetchTemp`,
      getIotEnabledStatus: `${SERVER_URL}/productmanagement/api/products/getIotEnabledStatus`,
      trackLastTenIotShipmentData: `${SERVER_URL_FOR_ROAMBEE}/integrationmanagement/api/v1/roambee/lastteniotsamplesforshipmentid/:shipmentId`,
      trackLatestShipmentData: `${SERVER_URL_FOR_ROAMBEE}/integrationmanagement/api/v1/roambee/latestiotdataforshipmentid/:shipmentId`,
      trackAllIotShipmentData: `${SERVER_URL_FOR_ROAMBEE}/integrationmanagement/api/v1/roambee/alliotsamplesforshipmentid/:shipmentId`,
      trackProduct: `${SERVER_URL}/tracktracemanagement/api/track/track?trackingNumber=`,
      getOrganisations: `${SERVER_URL}/productmanagement/api/organisation/getOrganisations`,
      getOrganisationsAtSignup: `${SERVER_URL}/productmanagement/api/organisation/getOrganisationsAtSignup`,
      getUnregisteredOrganisations: `${SERVER_URL}/productmanagement/api/organisation/getUnregisteredOrganisations`,
      getwarehouseByType: `${SERVER_URL}/usermanagement/api/auth/getwarehouseByType?id=`,
      getWarehouseByOrgId: `${SERVER_URL}/productmanagement/api/organisation/warehouses?id=`,
      getAllWarehouses: `${SERVER_URL}/productmanagement/api/organisation/allWarehouses`,
      addNewProduct: `${SERVER_URL}/productmanagement/api/products/addProduct`,
      getProducts: `${LOCAL_SERVER_URL_PRODUCTS}/productmanagement/api/products/getProducts`,
      getProductsByCategoryUrl: `${SERVER_URL}/productmanagement/api/products/getProductsByCategory?type=`,
      getProductsByInventoryUrl: `${SERVER_URL}/shipmentmanagement/api/shipment/getProductsByInventory?invId=`,
      generateCodes: `${SERVER_URL}/productmanagement/api/products/generateCodes`,
      addMultipleProducts: `${SERVER_URL}/productmanagement/api/products/addMultipleProducts`,
      getNotificationsUrl: `${SERVER_URL}/notificationmanagement/api/notification/getNotifications`,
      deleteNotificationUrl: `${SERVER_URL}/notificationmanagement/api/notification/deleteNotification`,
      updateTrackingStatusUrl: `${SERVER_URL}/shipmentmanagement/api/shipment/updateTrackingStatus`,
      getOrderIds: `${SERVER_URL}/pomanagement/api/po/getOrderIds`,
      getOpenOrderIds: `${SERVER_URL}/pomanagement/api/po/getOpenOrderIds`,
      fetchOutboundPurchaseOrderUrl: `${SERVER_URL}/pomanagement/api/po/fetchOutboundPurchaseOrders`,
      fetchInboundPurchaseOrderUrl: `${SERVER_URL}/pomanagement/api/po/fetchInboundPurchaseOrders`,
      fetchProductIdsCustomerLocationsOrganisationsUrl: `${SERVER_URL}/pomanagement/api/po/fetchProductIdsCustomerLocationsOrganisations`,
      fetchInboundShipmentsUrl: `${SERVER_URL}/shipmentmanagement/api/shipment/fetchInboundShipments`,
      fetchOutboundShipmentsUrl: `${SERVER_URL}/shipmentmanagement/api/shipment/fetchOutboundShipments`,
      fetchSupplierAndReceiverListUrl: `${SERVER_URL}/shipmentmanagement/api/shipment/fetchSupplierAndReceiverList`,
      updateWarehouse: `${SERVER_URL}/usermanagement/api/auth/updateWarehouse?warehouseId=`,
      GetEOLInfoBySerialNumber: `${SERVER_URL}/lastmilemanagement/api/GetEOLInfoBySerialNumber?serial_number=`,
      GetEOLInfoByProductId: `${SERVER_URL}/lastmilemanagement/api/GetEOLInfoByProductId?id=`,
      GetEOLInfoByIdentityId: `${SERVER_URL}/lastmilemanagement/api/GetEOLInfoByIdentityId?id=`,
      GetEOLInfoByPlaceAdministered: `${SERVER_URL}/lastmilemanagement/api/GetEOLInfoByPlaceAdministered?place=`,
      GetEOLListByDateWindow: `${SERVER_URL}/lastmilemanagement/api/GetEOLListByDateWindow`,
      getWarehouseById: `${SERVER_URL}/usermanagement/api/auth/getwarehouseinfo?id=`,
      addWarehouse: `${SERVER_URL}/usermanagement/api/auth/addWarehouse`,
      pushWarehouse: `${SERVER_URL}/usermanagement/api/auth/pushWarehouse`,
      addPOsFromExcel: `${SERVER_URL}/pomanagement/api/po/addPOsFromExcel`,
      getOrganizationsTypewithauth: `${SERVER_URL}/usermanagement/api/auth/getOrganizationsTypewithauth?id=`,
      getTransactions: `${SERVER_URL}/eventmanagement/api/event/getAllEventsWithFilter`,
      getTransactionFilterList: `${SERVER_URL}/eventmanagement/api/event/fetchProductDetailsList`,
      getAllStates: `${SERVER_URL}/inventorymanagement/api/inventory/getAllStates`,
      getDistrictsByState: `${SERVER_URL}/inventorymanagement/api/inventory/getDistrictsByState`,
      GetEOLInfo: `${SERVER_URL}/lastmilemanagement/api/GetEOLInfo`,
      GetProductsByWarehouse: `${SERVER_URL}/lastmilemanagement/api/getProductsByWarehouse`,
      getCountries: `${SERVER_URL}/inventorymanagement/api/inventory/getCountries`,
      getStatesByCountry: `${SERVER_URL}/inventorymanagement/api/inventory/getStatesByCountry`,
      getCitiesByState: `${SERVER_URL}/inventorymanagement/api/inventory/getCitiesByState`,
      getWarehousesByCity: `${SERVER_URL}/inventorymanagement/api/inventory/getWarehousesByCity`,
      emailverify: `${SERVER_URL}/usermanagement/api/auth/emailverify`,
      fetchairwayBillNumber: `${SERVER_URL}/shipmentmanagement/api/shipment/fetchairwayBillNumber`,
      fetchAllRegions: `${SERVER_URL}/productmanagement/api/location?region=all`,
      fetchCountriesByRegion: `${SERVER_URL}/productmanagement/api/location?region=`,
      fetchStateByCountry: `${SERVER_URL}/productmanagement/api/location?country_id=`,
      fetchCitiesByState: `${SERVER_URL}/productmanagement/api/location?state_id=`,
      searchProduct: `${SERVER_URL}/inventorymanagement/api/inventory/searchProduct?skip=0&limit=10`,
      getSuggestions: `${SERVER_URL}/inventorymanagement/api/inventory/getsearchsuggestions`,
      fetchBatchesOfInventory: `${SERVER_URL}/inventorymanagement/api/inventory/fetchBatchesOfInventory`,
      getAlerts: `${SERVER_URL}/notificationmanagement/api/notification/getNotifications?type=`,
      readNotification: `${SERVER_URL}/notificationmanagement/api/notification/readNotification?id=`,
      getExportFileForInboundShipmentUrl: `${SERVER_URL}/shipmentmanagement/api/shipment/exportInboundShipments`,
      getExportFileForOutboundShipmentUrl: `${SERVER_URL}/shipmentmanagement/api/shipment/exportOutboundShipments`,
      getExportFileForInboundPurchaseOrdersUrl: `${SERVER_URL}/pomanagement/api/po/exportInboundPurchaseOrders`,
      getExportFileForOutboundPurchaseOrdersUrl: `${SERVER_URL}/pomanagement/api/po/exportOutboundPurchaseOrders`,
      getAllManageAlertsUrl: `${SERVER_URL}/alertmanagement/api/alert/getAllAlerts`,
      createUpdateAlertsUrl: `${SERVER_URL}/alertmanagement/api/alert/createNewAlert`,
      requestModalAlertUrl: `${SERVER_URL}/tracktracemanagement/api/request/getRequestById?id=`,
      updateStatusModalAlert: `${SERVER_URL}/tracktracemanagement/api/request/updateRequest?id=`,
      temperatureGraph: `${SERVER_URL}/shipmentmanagement/api/shipment/sensorHistory`,
      driverGraph: `${SERVER_URL}/shipmentmanagement/api/shipment/driverHistory`,
      customReceiveShipment: `${SERVER_URL}/shipmentmanagement/api/shipment/customReceiveShipment`,
      getBestSellersUrl: `${SERVER_URL}/analyticsmanagement/api/network/bestSellers`,
      getBestSellersSummaryUrl: `${SERVER_URL}/analyticsmanagement/api/network/bestSellerSummary`,
      getmanufacturerInStockReportUrl: `${SERVER_URL}/analyticsmanagement/api/network/inStockReport`,
      getmanufacturerOutStockReportUrl: `${SERVER_URL}/analyticsmanagement/api/network/outOfStockReport`,
      getManufacturerWarehouses: `${SERVER_URL}/inventorymanagement/api/inventory/getManufacturerWarehouses`,
      getManufacturerFilterOptions: `${SERVER_URL}/inventorymanagement/api/inventory/getManufacturerFilterOptions`,
      getmanufacturerInStockFilterOptions: `${SERVER_URL}/analyticsmanagement/api/network/inStockFilterOptions`,
      getmanufacturerOutStockFilterOptions: `${SERVER_URL}/analyticsmanagement/api/network/outStockFilterOptions`,
      fetchBatchDetails: `${SERVER_URL}/lastmilemanagement/api/vaccination/fetchBatchById`,
      vaccinateIndividual: `${SERVER_URL}/lastmilemanagement/api/vaccination/vaccinateIndividual`,
      vaccinateMultiple: `${SERVER_URL}/lastmilemanagement/api/vaccination/vaccinateMultiple`,
      getAllVaccinationDetails: `${SERVER_URL}/lastmilemanagement/api/vaccination/getAllVaccinationDetails`,
      getVaccinationDetailsByVial: `${SERVER_URL}/lastmilemanagement/api/vaccination/getVaccinationDetailsByVial`,
      getVaccineAnalytics: `${SERVER_URL}/lastmilemanagement/api/vaccination/getAnalytics`,
      getVialsUtilised: `${SERVER_URL}/lastmilemanagement/api/vaccination/getVialsUtilised`,
      getVaccinationsList: `${SERVER_URL}/lastmilemanagement/api/vaccination/getVaccinationsList`,
      getCitiesAndOrgsForFilters: `${SERVER_URL}/lastmilemanagement/api/vaccination/getCitiesAndOrgsForFilters`,
      exportVaccinationList: `${SERVER_URL}/lastmilemanagement/api/vaccination/exportVaccinationList`,
    },
  };

  const environment = process.env.REACT_APP_ENVIRONMENT || `prod`; // change for respective environments
  const conf = confs[environment];
  return conf;
}
