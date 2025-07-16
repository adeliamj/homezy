"use client";

import React, { useEffect, useRef, useState } from "react";
import { MapContainer, TileLayer, Marker, useMap } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import "app/styles/custom-maps.css";

import L, { LatLngExpression } from "leaflet";
import useFormatCurrency from "app/hooks/useFormatCurrency";
import { MarkerType } from "app/types/property.type";
import Plus from "assets/icons/plus.svg";
import Minus from "assets/icons/minus.svg";
import Direction from "assets/icons/direction.svg";
import PopupCardProperty from "@components/fragments/PopupCardProperty";

const HouseSVG = `
<svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M2 22H22" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M2.95 22L3 9.97C3 9.36 3.29 8.78 3.77 8.4L10.77 2.95C11.49 2.39 12.5 2.39 13.23 2.95L20.23 8.39C20.72 8.77 21 9.35 21 9.97V22" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round"/>
  <path d="M13 17H11C10.17 17 9.5 17.67 9.5 18.5V22H14.5V18.5C14.5 17.67 13.83 17 13 17Z" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round"/>
  <path d="M9.5 13.75H7.5C6.95 13.75 6.5 13.3 6.5 12.75V11.25C6.5 10.7 6.95 10.25 7.5 10.25H9.5C10.05 10.25 10.5 10.7 10.5 11.25V12.75C10.5 13.3 10.05 13.75 9.5 13.75Z" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round"/>
  <path d="M16.5 13.75H14.5C13.95 13.75 13.5 13.3 13.5 12.75V11.25C13.5 10.7 13.95 10.25 14.5 10.25H16.5C17.05 10.25 17.5 10.7 17.5 11.25V12.75C17.5 13.3 17.05 13.75 16.5 13.75Z" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round"/>
  <path d="M19 7L18.97 4H14.57" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
`;

interface ExtendedMarkerType extends MarkerType {
  property?: PropertyItems;
}

interface PropertyItems {
  id: number;
  image: string;
  originalPrice: number;
  per?: string;
  title: string;
  address: string;
  description?: string;
  bedrooms: number;
  bathrooms: number;
  size: string;
  location: {
    lat: number;
    lng: number;
  };
  discountPrice?: number;
}

const CustomMapControls = () => {
  const map = useMap();
  return (
    <div className="absolute bottom-24 right-24 z-[1000] flex flex-col gap-8">
      <button
        onClick={() => console.log("Direction clicked!")}
        className="bg-secondary-white p-12 rounded-8 shadow border-2 border-brand-lavender-20"
      >
        <Direction className="w-16 h-16" />
      </button>
      <div className="bg-secondary-white rounded-8 shadow flex flex-col items-center justify-center border-2 border-brand-lavender-20">
        <button
          onClick={() => map.zoomIn()}
          className="p-12 border-b-2 border-b-brand-lavender-20"
        >
          <Plus className="w-16 h-16" />
        </button>
        <button onClick={() => map.zoomOut()} className="p-12">
          <Minus className="w-16 h-16" />
        </button>
      </div>
    </div>
  );
};

const RecenterAutomatically = ({
  lat,
  lng,
  offset = 0,
}: {
  lat: number;
  lng: number;
  offset?: number;
}) => {
  const map = useMap();

  useEffect(() => {
    const targetLat = lat - offset; 
    map.setView([targetLat, lng], map.getZoom(), {
      animate: true, 
    });
  }, [lat, lng, offset, map]);

  return null;
};

const MapRefSetter = ({ setMap }: { setMap: (map: L.Map) => void }) => {
  const map = useMap();
  useEffect(() => {
    setMap(map);
  }, [map]);
  return null;
};

const Maps = ({ markers }: { markers: ExtendedMarkerType[] }) => {
  const mapRef = useRef<L.Map | null>(null);
  const { formatCurrency } = useFormatCurrency();

  const [mapType, setMapType] = useState<"normal" | "satellite">("normal");
  const [firstPosition, setFirstPosition] = useState<LatLngExpression>([
    -6.2242577, 106.8398563,
  ]);
  const [activeMarkerId, setActiveMarkerId] = useState<string | number | null>(
    null
  );
  const [popupPosition, setPopupPosition] = useState<{
    x: number;
    y: number;
  } | null>(null);

  useEffect(() => {
    if (markers.length > 0) {
      setFirstPosition(markers[0].position);
    }
  }, [markers]);

  const handleMarkerClick = (id: string | number) => {
    const marker = markers.find((m) => m.id === id);
    if (!marker || !mapRef.current) return;

    const point = mapRef.current.latLngToContainerPoint(marker.position);
    setPopupPosition({ x: point.x, y: point.y });
    setActiveMarkerId(id === activeMarkerId ? null : id);
  };

  const [lat, lng] = Array.isArray(firstPosition)
    ? firstPosition
    : [firstPosition.lat, firstPosition.lng];

  const activeMarker = markers.find((m) => m.id === activeMarkerId);

  useEffect(() => {
    const map = mapRef.current;
    if (!map || !activeMarker) return;

    const updatePopupPosition = () => {
      const point = map.latLngToContainerPoint(activeMarker.position);
      setPopupPosition({ x: point.x, y: point.y });
    };

    updatePopupPosition();

    map.on("move", updatePopupPosition);
    map.on("zoom", updatePopupPosition);

    return () => {
      map.off("move", updatePopupPosition);
      map.off("zoom", updatePopupPosition);
    };
  }, [activeMarker, mapRef.current]);

  return (
    <div className="relative w-full h-full">
      <div className="absolute mt-20 ml-20 z-[1000] border-2 bg-secondary-white border-brand-lavender-20 shadow rounded-15 flex items-center justify-center">
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
        center={firstPosition}
        zoom={16}
        style={{ height: "100%", width: "100%" }}
        scrollWheelZoom={true}
        zoomControl={false}
        className="rounded-2xl xxxl:rounded-2xl-fluid"
      >
        <MapRefSetter setMap={(map) => (mapRef.current = map)} />
        <CustomMapControls />

        {mapType === "normal" ? (
          <TileLayer
            url="https://tiles.stadiamaps.com/tiles/alidade_smooth/{z}/{x}/{y}{r}.png"
            attribution="&copy; Stadia Maps &copy; OpenMapTiles &copy; OpenStreetMap contributors"
            maxZoom={20}
          />
        ) : (
          <TileLayer
            url="https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}"
            attribution="&copy; Esri & other contributors"
          />
        )}

        {activeMarker ? (
          <RecenterAutomatically
            lat={activeMarker.position[0]}
            lng={activeMarker.position[1]}
            offset={0.003}
          />
        ) : (
          <RecenterAutomatically lat={lat} lng={lng} />
        )}

        {markers.map((marker) => {
          const isActive = marker.id === activeMarkerId;

          const backgroundColor = isActive
            ? "bg-secondary-dark-100"
            : "bg-secondary-white";
          const textColor = isActive
            ? "text-secondary-white"
            : "text-secondary-dark-100";
          const iconColor = isActive
            ? "text-secondary-white"
            : "text-brand-lavender-100";

          const CustomMarker = new L.DivIcon({
            className: "custom-marker",
            html: `
              <div class='w-full h-full ${backgroundColor} px-16 py-8 rounded-8 flex flex-row items-center gap-8'>
                <p class='w-20 h-20 ${iconColor}'>${HouseSVG}</p>
                <p class='text-normal-bold font-hanken ${textColor}'>${formatCurrency(
              Number(marker.text),
              "dollar"
            )}</p>
              </div>
            `,
            iconSize: [109, 36],
            iconAnchor: [109 / 2, 36 / 2],
          });

          return (
            <Marker
              key={marker.id}
              position={marker.position}
              icon={CustomMarker}
              eventHandlers={{
                click: () => handleMarkerClick(marker.id),
              }}
            />
          );
        })}
      </MapContainer>

      {activeMarker && popupPosition && (
        <div
          className="absolute z-[1000]"
          style={{
            left: popupPosition.x,
            top: popupPosition.y + 20,
            transform: "translateX(-50%)",
          }}
        >
          <PopupCardProperty property={activeMarker.property!} />
        </div>
      )}
    </div>
  );
};

export default Maps;
