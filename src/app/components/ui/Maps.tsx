"use client";

import React, { useEffect, useState } from "react";
import { MapContainer, TileLayer, Marker, useMap } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import "app/styles/custom-maps.css";

import L, { LatLngExpression } from "leaflet";
import useFormatCurrency from "app/hooks/useFormatCurrency";
import { MarkerType } from "app/types/hotel.type";
import Plus from "assets/icons/plus.svg";
import Minus from "assets/icons/minus.svg";
import Direction from "assets/icons/direction.svg";

const CustomMapControls = () => {
  const map = useMap();

  return (
    <div className="absolute bottom-24 right-24 z-[1000] flex flex-col gap-8">
      <button
        onClick={() => {
          alert("Direction clicked!");
        }}
        className="bg-secondary-white p-12 rounded-8 shadow flex items-center justify-center border-2 border-brand-lavender-20"
      >
        <Direction className="w-16 h-16" />
      </button>
      <div className="bg-secondary-white rounded-8 shadow flex flex-col items-center justify-center border-2 border-brand-lavender-20">
        <button onClick={() => map.zoomIn()} className="p-12  border-b-2 border-b-brand-lavender-20">
          <Plus className="w-16 h-16" />
        </button>

        <button onClick={() => map.zoomOut()} className="p-12">
          <Minus className="w-16 h-16" />
        </button>
      </div>
    </div>
  );
};

const Maps = ({ markers }: { markers: MarkerType[] }) => {
  const [isActive, setIsActive] = useState(true);
  const [mapType, setMapType] = useState<"normal" | "satellite">("normal");
  const { formatCurrency } = useFormatCurrency();
  const [firstPosition, setFirstPosition] = useState<LatLngExpression>([
    -6.2242577, 106.8398563,
  ]);

  const RecenterAutomatically = ({
    lat,
    lng,
  }: {
    lat: number;
    lng: number;
  }) => {
    const map = useMap();
    useEffect(() => {
      map.setView([lat, lng]);
    }, [lat, lng]);
    return null;
  };

  useEffect(() => {
    if (markers.length > 0) {
      setFirstPosition(markers[0].position);
    }
  }, [markers]);

  const [lat, lng] = Array.isArray(firstPosition)
    ? firstPosition
    : [firstPosition.lat, firstPosition.lng];

  return (
    <div className="relative w-full h-full">
      <div className="absolute mt-20 ml-20 z-[1000] border-2 bg-secondary-white border-brand-lavender-20 bg-white shadow rounded-15 flex items-center justify-center">
        <p
          onClick={() => setMapType("normal")}
          className={`cursor-pointer px-16 py-8 ${
            mapType === "normal"
              ? "text-sm-bold"
              : "text-sm-regular text-secondary-dark-20"
          } border-r-2 border-r-brand-lavender-20`}
        >
          Map
        </p>
        <p
          onClick={() => setMapType("satellite")}
          className={`cursor-pointer px-16 py-8 ${
            mapType === "satellite"
              ? "text-sm-bold"
              : "text-sm-regular text-secondary-dark-60"
          }`}
        >
          Satellite
        </p>
      </div>

      <MapContainer
        className="rounded-2xl xxxl:rounded-2xl-fluid"
        center={firstPosition}
        zoom={13}
        style={{ height: "100%", width: "100%" }}
        scrollWheelZoom={true}
        zoomControl={false} // disable default zoom
      >
        {/* Custom Controls */}
        <CustomMapControls />

        {/* Tile Layer */}
        {mapType === "normal" ? (
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
          />
        ) : (
          <TileLayer
            url="https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}"
            attribution="&copy; Esri, i-cubed, USDA, USGS, AEX, GeoEye, and the GIS user community"
          />
        )}

        <RecenterAutomatically lat={lat} lng={lng} />

        {markers.map((marker) => {
          const CustomMarker = new L.DivIcon({
            className: "custom-marker",
            html: `
              <div style='text-align: center; background-color: ${
                isActive ? "#23508f" : "#FFFFFF"
              }; color: ${isActive ? "#FFFFFF" : "#23508f"}'>
                <p>${formatCurrency(Number(marker.text), "rupiah")}</p>
                <div class='triangle' style='border-color:  ${
                  isActive ? "#23508f" : "#FFFFFF"
                } transparent transparent transparent'></div>
              </div>
            `,
            iconSize: [40, 40],
            iconAnchor: [20, 40],
          });

          return (
            marker.position && (
              <Marker
                key={marker.idHotel}
                position={marker.position}
                icon={CustomMarker}
              />
            )
          );
        })}
      </MapContainer>
    </div>
  );
};

export default Maps;
