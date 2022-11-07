import React from "react";
import "./CurrentLocation.scss";
import TrackLocationCard from "./LocationCard";
import TrackIllustration from "../../../assets/images/track.webp";

export default function CurrentLocation({ currentLocationData, t }) {
	return currentLocationData ? (
		<div>
			{currentLocationData &&
				Object.keys(currentLocationData).map((key, index) => (
					<div key={index} style={{ marginTop: "10px" }}>
						<TrackLocationCard currentLocation={currentLocationData[key]} />
					</div>
				))}
		</div>
	) : (
		<div className="tracking-illustation">
			<img src={TrackIllustration} alt="tracking" />
			<p className="mi-body-md f-500 grey mi-reset">
				{t("try_search_using_your")} {t("tracking_id_to_track_your")} {t("products/shipment")}
			</p>
		</div>
	);
}
