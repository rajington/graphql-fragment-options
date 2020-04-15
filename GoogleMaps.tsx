import React from "react";
import GoogleMapView from "google-map";
import { GoogleMapsFragment } from "./GoogleMaps.graphql";

const GoogleMaps: React.FC<GoogleMapsFragment> = ({ latitude, longitude }) => (
  <GoogleMapView {...{ latitude, longitude }} />
);

export default GoogleMaps;
