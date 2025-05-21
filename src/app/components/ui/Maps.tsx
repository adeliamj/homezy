'use client';

import React, { useEffect, useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import 'app/styles/custom-maps.css';

import L, { LatLngExpression } from 'leaflet';
import useFormatCurrency from 'app/hooks/useFormatCurrency';
import { HotelResultType, MarkerType } from 'app/types/hotel.type';

const Maps = ({ markers }: { markers: MarkerType[] }) => {
  const [isActive, setIsActive] = useState(true);
  const { formatCurrency } = useFormatCurrency();
  const [firstPosition, setFirstPosition] = useState<LatLngExpression>([-6.2242577, 106.8398563]);

  const RecenterAutomatically = ({ lat, lng }: { lat: number; lng: number }) => {
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

  const [lat, lng] = Array.isArray(firstPosition) ? firstPosition : [firstPosition.lat, firstPosition.lng];

  return (
    <MapContainer
      className='rounded-2xl xxxl:rounded-2xl-fluid'
      center={firstPosition}
      zoom={13}
      style={{ height: '100%', width: '100%' }}
      scrollWheelZoom={true}
    >
      <TileLayer
        url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      <RecenterAutomatically lat={lat} lng={lng} />

      {markers.map((marker) => {
        const CustomMarker = new L.DivIcon({
          className: 'custom-marker',
          html: `
                  <div style='text-align: center; background-color: ${isActive ? '#23508f' : '#FFFFFF'}; color: ${isActive ? '#FFFFFF' : '#23508f'}'>
                    <p>${formatCurrency(Number(marker.text), 'rupiah')}</p>
                    <div style='color:  ${isActive ? '#23508f' : '#FFFFFF'}'>
                      <div class='triangle'  style='border-color:  ${isActive ? '#23508f' : '#FFFFFF'} transparent transparent transparent'></div>
                    </div>
                  </div>
                  `,
          iconSize: [40, 40],
          iconAnchor: [20, 40],
        });

        return marker.position && <Marker key={marker.idHotel} position={marker.position} icon={CustomMarker} />;
      })}
    </MapContainer>
  );
};

export default Maps;
