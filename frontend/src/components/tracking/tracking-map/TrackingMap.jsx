import React, { useState } from "react";
import { GoogleMap, InfoWindow, Marker, useJsApiLoader, Polyline } from "@react-google-maps/api";

import mapStyles from "./data/mapStyles";

const containerStyle = {
	width: "100%",
	height: "100%",
	borderRadius: "1rem",
};

const options = {
	styles: mapStyles,
	disableDefaultUI: true,
	zoomControl: true,
	rotateControl: true,
	fullscreenControl: true,
};

export default function TrackingMap({ LocationTab, trackingData }) {
	const [locationClicked, setLocationClicked] = useState(null);
	const [ChainOfCustodySelected, setChainOfCustodySelected] = useState(null);
	const [CurrentLocationSelected, setCurrentLocationSelected] = useState(null);

	const chainOfCustody = trackingData?.trackedShipment;
	const currentLocationData = trackingData?.currentLocationData;

	const India = {
		lat: 20.593683,
		lng: 78.962883,
	};

	const { isLoaded } = useJsApiLoader({
		id: "google-map-script",
		googleMapsApiKey: "AIzaSyBLwFrIrQx_0UUAIaUwt6wfItNMIIvXJ78",
	});

	const lineSymbol = {
		path: "M 0,-1 0,1",
		strokeOpacity: 1,
		scale: 4,
	};

	return isLoaded ? (
		<GoogleMap mapContainerStyle={containerStyle} center={India} zoom={5} options={options}>
			<>
				{LocationTab === "LOCATION"
					? currentLocationData &&
					  Object.keys(currentLocationData)?.map((location, index) => (
							<Marker
								key={index}
								position={{
									lat: currentLocationData[location]?.warehouse?.location?.coordinates[0],
									lng: currentLocationData[location]?.warehouse?.location?.coordinates[1],
								}}
								onClick={() => {
									setLocationClicked(location);
									setCurrentLocationSelected({
										lat: currentLocationData[location]?.warehouse?.location?.coordinates[0],
										lng: currentLocationData[location]?.warehouse?.location?.coordinates[1],
									});
								}}
								icon={{
									url: `/markers/loc${(index % 3) + 1}.png`,
									scaledSize: new window.google.maps.Size(30, 30),
									origin: new window.google.maps.Point(0, 0),
									anchor: new window.google.maps.Point(15, 15),
								}}
							/>
					  ))
					: chainOfCustody?.map((shipment, index) => (
							<>
								<Marker
									key={index}
									position={{
										lat: shipment?.supplier?.warehouse?.location?.coordinates[0],
										lng: shipment?.supplier?.warehouse?.location?.coordinates[1],
									}}
									onClick={() => {
										setLocationClicked(index);
										setChainOfCustodySelected({
											lat: shipment?.supplier?.warehouse?.location?.coordinates[0],
											lng: shipment?.supplier?.warehouse?.location?.coordinates[1],
										});
									}}
									icon={{
										url: `/markers/loc${(index % 3) + 1}.png`,
										scaledSize: new window.google.maps.Size(30, 30),
										origin: new window.google.maps.Point(0, 0),
										anchor: new window.google.maps.Point(15, 15),
									}}
								/>
								<Marker
									key={index}
									position={{
										lat: shipment?.receiver?.warehouse?.location?.coordinates[0],
										lng: shipment?.receiver?.warehouse?.location?.coordinates[1],
									}}
									onClick={() => {
										setLocationClicked(index);
										setChainOfCustodySelected({
											lat: shipment?.receiver?.warehouse?.location?.coordinates[0],
											lng: shipment?.receiver?.warehouse?.location?.coordinates[1],
										});
									}}
									icon={{
										url: `/markers/loc${(index % 3) + 1}.png`,
										scaledSize: new window.google.maps.Size(30, 30),
										origin: new window.google.maps.Point(0, 0),
										anchor: new window.google.maps.Point(15, 15),
									}}
								/>
								<Polyline
									path={[
										{
											lat: shipment?.supplier?.warehouse?.location?.coordinates[0],
											lng: shipment?.supplier?.warehouse?.location?.coordinates[1],
										},
										{
											lat: shipment?.receiver?.warehouse?.location?.coordinates[0],
											lng: shipment?.receiver?.warehouse?.location?.coordinates[1],
										},
									]}
									geodesic={true}
									options={{
										strokeColor: "#ff2527",
										strokeOpacity: 0,
										strokeWeight: 5,
										icons: [
											{
												icon: lineSymbol,
												offset: "0",
												repeat: "20px",
											},
										],
									}}
								/>
							</>
					  ))}

				{CurrentLocationSelected ? (
					<InfoWindow
						position={CurrentLocationSelected}
						onCloseClick={() => {
							setCurrentLocationSelected(null);
						}}
					>
						<div className="info-popup-container">
							<div className="info-header">
								<div className="info-header-content">
									<i className="fa-solid fa-location-dot"></i>

									<p className="mi-body-md f-500 mi-reset location-text-color">
										{`${currentLocationData[locationClicked]?.warehouse?.warehouseAddress?.firstLine}, ${currentLocationData[locationClicked]?.warehouse?.warehouseAddress?.city}`}
									</p>
								</div>
							</div>
							<div className="info-body">
								<p className="mi-body-sm f-500 mi-reset header-text-color">Product Details</p>
								<div className="product-details-list">
									<div className="product-list-card map-card-design">
										<p className="mi-body-sm f-500 mi-reset ">
											{currentLocationData[locationClicked]?.productName}
										</p>
										<p className="mi-body-sm f-500 mi-reset">
											{`${currentLocationData[locationClicked]?.stock} ( Packs )`}
										</p>
									</div>
								</div>
							</div>
						</div>
					</InfoWindow>
				) : null}
			</>
		</GoogleMap>
	) : (
		<></>
	);
}

{
	/* <Polyline
          path={AtoB}
          geodesic={true}
          options={{
            strokeColor: "#ff2527",
            strokeOpacity: 0,
            strokeWeight: 5,
            icons: [
              {
                icon: lineSymbol,
                offset: "0",
                repeat: "20px",
              },
            ],
          }}
        />
        <Polyline
          path={BtoC}
          geodesic={true}
          options={{
            strokeOpacity: 0,
            strokeColor: "#0BC6A7",
            icons: [
              {
                icon: lineSymbol,
                offset: "0",
                repeat: "20px",
              },
            ],
          }}
        />
        <Polyline
          path={BtoD}
          geodesic={true}
          options={{
            strokeOpacity: 0,
            strokeColor: "#0BC6A7",
            icons: [
              {
                icon: lineSymbol,
                offset: "0",
                repeat: "20px",
              },
            ],
          }}
        />
 */
}