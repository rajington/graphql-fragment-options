import React from "react";
import GoogleMapView from "google-map";
import { GoogleMapsFragment } from "./GoogleMaps.graphql";

const GoogleMaps: React.FC<GoogleMapsFragment> = ({ location }) => (
  <GoogleMapView {...location} />
);

export default GoogleMaps;
