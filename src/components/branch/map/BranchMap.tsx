"use client";

import { useLoadScript, GoogleMap, Marker } from "@react-google-maps/api";
import type { NextPage } from "next";
import { useMemo, useState } from "react";
import { FaMapMarkerAlt } from "react-icons/fa";
import { renderToString } from "react-dom/server";

const BranchMap: NextPage = () => {
  const [lat, setLat] = useState(41.3775);
  const [lng, setLng] = useState(64.5853);

  const libraries = useMemo(() => ["places"], []);
  const mapCenter = useMemo(() => ({ lat: lat, lng: lng }), [lat, lng]);

  const mapOptions = useMemo<google.maps.MapOptions>(
    () => ({
      disableDefaultUI: true,
      clickableIcons: true,
      scrollwheel: false,
    }),
    []
  );

  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_KEY as string,
    libraries: libraries as any,
  });

  if (!isLoaded) {
    return <p>Loading...</p>;
  }

  const elementToDataURL = (element: JSX.Element): string => {
    const htmlString = renderToString(element);
    const dataURL = `data:image/svg+xml;base64,${btoa(htmlString)}`;
    return dataURL;
  };

  return (
    <div>
      <GoogleMap
        options={mapOptions}
        zoom={8}
        center={mapCenter}
        mapContainerStyle={{ width: "100%", height: "800px" }}
      >
        <Marker
          position={mapCenter}
          icon={elementToDataURL(<FaMapMarkerAlt />)}
          onLoad={() => console.log("Marker Loaded")}
        />
      </GoogleMap>
    </div>
  );
};

export default BranchMap;
